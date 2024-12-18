import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

import { useEffect, useState } from "react";

import { rgbToHex, rgbValues, colorTone } from "../utils/func";



export function App() {
  const COLORS_URL = 'http://localhost:3500/rgbColors';
  const [fetchErr, setFetchErr] = useState(null);
  const [loading, setLoading] = useState(true);

  // Color data array, stores data from fetch op
  const [colorsList, setColorsList] = useState([]);

  // set the state of the pop up colors list
  const [popupList, setPopupList] = useState([]);
  const [active, setActive] = useState(false);
  const [colorName, setColorName] = useState('');


  const [rgbValue, setRgbValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [hexColor, setHexColor] = useState('');

  // rainbow...
  const [rainbowOn, setRainbowOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await fetch(COLORS_URL);
          if (!response.ok) throw Error('Error with fetch operation');
          const res = await response.json();
          setColorsList(res);
          setFetchErr(null);
        } catch (err) {
          setFetchErr(err.message);
        } finally {
          setLoading(false);
        }
      })();
    }, 1000);
  }, [])

  const handleChange = (e) => {
    const value = e.target.value;
    setColorName(value);

    if (value === '') {
      setActive(false);
      setPopupList([]);
      setHexValue('');
      setRgbValue('');

    } else {
      const filteredColors = colorsList.filter(color =>
        (color.name.toLowerCase()).includes(value.toLowerCase()));

      setPopupList(filteredColors);
      setActive(true);

      if (filteredColors.length === 1 && 
        value.toLowerCase() === filteredColors[0].name.toLowerCase()) {
        
        setActive(false);
        setPopupList([]);

        setTimeout(() => {
          // Hex value and text color
          setHexValue(rgbToHex(filteredColors[0].rgb));
          setHexColor(colorTone(filteredColors[0].rgb) < 100 ? 'white' : 'black');
          // rgb value
          setRgbValue(filteredColors[0].rgb);
        }, 250);

      }
    }
  }

  const handleSelectedColor = (color) => {
    setColorName(color.name);
    // Clear pop up list state & hide list
    setActive(false);
    setPopupList([]);

    // Show color values, rgb and hex
    setTimeout(() => {
      setHexValue(rgbToHex(color.rgb));
      // Define hex value text color
      setHexColor(colorTone(color.rgb) < 100 ? 'white' : 'black');
      // rgb values
      setRgbValue(rgbValues(color.rgb));
    }, 250);

  }

  const handleRainbow = () => {
    setRainbowOn(true);
    //console.log('rainbow on');
    setTimeout(() => {
      setRainbowOn(false);
      //console.log('rainbow off');
    }, 5000);
  }

  return (
    <div className="App">
      <Header title="What's the value of my color" />
      <main className="content">
        {loading && <p className="loading" >Fetching Colors...</p>}
        {fetchErr && <p style={{ color: 'red' }}>{`Error: ${fetchErr}`}</p>}
        {!fetchErr && !loading &&
          <Content
            colorName={colorName}
            rgbValue={rgbValue}
            hexValue={hexValue}
            hexColor={hexColor}
            handleChange={handleChange}
            popupList={popupList}
            handleSelectedColor={handleSelectedColor}
            active={active}

            rainbowOn={rainbowOn}
            handleRainbow={handleRainbow}
          />
        }
      </main>
      <Footer />
    </div>
  )
}