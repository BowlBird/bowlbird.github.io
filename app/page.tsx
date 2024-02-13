'use client';

import { Textarea, input } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [output, setOutput] = useState([] as string[])
  const [inputText, setInputText] = useState('$ ')

  const parseCommand = (commandString: string) => {
    let commandSplit = commandString.trim().split(' ')
    let tempOutput = [...output, '$ ' + commandString]

    const commands: { [id: string] : (commandString: string, output: string[]) => void } = {
      'echo' : (commandString: string, output: string[]) => {
        setOutput([...output, commandString.replace('echo ', '')])
      },
      'clear' : (commandString: string, output: string[]) => {
        setOutput([])
      },
      'help' : (commandString: string, output: string[]) => {
        let commandsOutput = 'Available Commands:\n' + Object.keys(commands).sort().map(it => '\t- ' + it).join('\n')
        setOutput([...output, commandsOutput])
      },
      'github' : (commandString: string, output: string[]) => {
        open('https://github.com/BowlBird')
        setOutput([...output])
      },
      'linkedin' : (commandString: string, output: string[]) => {
        open('https://www.linkedin.com/in/carson-miller-295571253/')
        setOutput([...output])
      },
      'resume' : (commandString: string, output: string[]) => {
        open('https://drive.google.com/file/d/1Ybb_2QpkmsaQ9wy9z4rZo6Sed88w75oW/view?usp=sharing')
        setOutput([...output])
      }
    }

    try {
      //get command function based on string command
      let command = commands[commandSplit[0]]

      //execute
      command(commandString, tempOutput)
    } catch {
      setOutput([...tempOutput, 'Unrecognized command.'])
    }
  }

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
    <div className='m-1 mt-40'>
      {output.map((it, i) => (<div className='history' key={i}>{it}</div>))}
      <div className='flex'>
        <Textarea 
          value={inputText}
          onValueChange={(character) => {
            if (character.substring(0,2) != '$ ') return;
            if (character[character.length - 1] != '\n') {
              setInputText(character)
              return
            }
            
            // command should have been entered
            setInputText('$ ')
            parseCommand(character.substring(2))
          }}
          spellCheck='false'
          className='w-full'
          id='input'
          type='text'
        />
      </div>
    </div>
  );
}

