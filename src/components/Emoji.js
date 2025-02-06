import './emoji.css'

export function Emoji({ rainbowOn, handleRainbow }) {
    const ASCII = () => {
        return `
        *^^*
     *        *
  *    ^     ^   *
*    /   \\ /   \\   *
|     \\_/   \\_/    |
*         ^        *
   *            *
      *__^^__*  
    `;
    }


    return (
        <div >
            <pre className={`emojiRainbow ${rainbowOn ? 'clicked' : ''}`} onClick={handleRainbow}>{ASCII()}</pre>
        </div>
    )
}