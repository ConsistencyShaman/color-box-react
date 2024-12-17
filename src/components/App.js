import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

import { useEffect, useState } from "react";

import { rgbToHex, rgbValues } from "../utils/func";
import { apiRequest } from "../utils/apiRequest";


export function App() {
  const COLORS_URL = 'http://localhost:3500/rgbColors';
  const [fetchErr, setFetchErr] = useState(null);
  const [loading, setLoading] = useState(true);

  // Color data array, stores data from fetch op
  const [colorsList, setColorsList] = useState([]);

  // set the state of the pop up colors list
  const [popupList, setPopupList] = useState([]);
  const [active, setActive] = useState(false);
  const [colorName, setcolorName] = useState('');


  const [rgbValue, setRgbValue] = useState('');
  const [hexValue, setHexValue] = useState('');

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
    setcolorName(value);

    if (value === '') {
      setActive(false);
      setPopupList([]);
      setHexValue('');
      setRgbValue('');

    } else {
      const filteredColors = colorsList.filter(color =>
        ((color.name).toLowerCase()).includes(value.toLowerCase()));

      setPopupList(filteredColors);
      setActive(true);
    }
  }

  const handleSelectedColor = (color) => {
    setcolorName(color.name);
    // Clear pop up list state & hide list
    setActive(false);
    setPopupList([]);

    // Show RGB values
    setRgbValue(color.rgb);
    // Convert to hex value
    setTimeout(() => {
      setHexValue(rgbToHex(color.rgb));
      setRgbValue(rgbValues(color.rgb));
    }, 250);

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
            handleChange={handleChange}
            popupList={popupList}
            handleSelectedColor={handleSelectedColor}
            active={active}
          />
        }
      </main>
      <Footer />
    </div>
  )
}