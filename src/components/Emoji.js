import { useState } from "react";

export function Emoji() {
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
            <pre>{ASCII()}</pre>
        </div>
    )
}