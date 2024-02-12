'use client';

import { Textarea, input } from '@nextui-org/react';
import {JetBrains_Mono} from 'next/font/google'
import { useEffect, useState } from 'react';

const jetbrainsMono = JetBrains_Mono({subsets: ['latin']})


export default function Home() {
  const [output, setOutput] = useState([] as string[])
  const [inputText, setInputText] = useState('')
  /**
   * Globally check for input, and add it to text area.
   * if Enter is pressed, send command.
   */
  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (e.key) {
        document.getElementById('input')?.focus()
      }
    }
    window.addEventListener('keydown', callback)
  
    return () => window.removeEventListener('keydown', callback);
  }, [])
  
  return (
    <div className={`${jetbrainsMono.className} m-1`}>
      {output.map((it, i) => (<p key={i}>{it}</p>))}
      <div className='flex'>
        <Textarea 
          value={inputText}

          onValueChange={(character) => {
            const newChar = character.substring(inputText.length)
            if (newChar != '\n') setInputText(character)
            else {
              setInputText('')
              setOutput([...output, '$ ' + inputText, inputText])
            }
          }}
          spellCheck='false'
          className='w-full'
          id='input'
          type='text'
          label='$'
          labelPlacement='outside'
        />
      </div>
    </div>
  );
}

