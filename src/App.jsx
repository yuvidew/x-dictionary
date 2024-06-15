import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'

const App = () => {

  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ])
  const [word, setWord] = useState("");
  const [ wordMeaning, setWordMeaning] = useState("");


  const handleSearch = () => {
  if (word) { 
    let result = dictionary.filter((inputword) => inputword.word.toLowerCase().includes(word.toLowerCase()))
    if(result.length > 0) {
      setWordMeaning(result[0].meaning);
    } else {
      setWordMeaning("Word not found in the dictionary.");
    }
  }
  else {
    setWordMeaning("Word not found in the dictionary.");
  }  
}

  return (
    <div>
      <Card className = "m-auto w-[30rem] mt-[3rem] bg-stone-800 border-none p-3 shadow-lg">
        <div className=' flex items-center gap-3'>
          <Input 
            type="text"  
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder = "Search for a word..."
            className = "border border-stone-700 placeholder:text-stone-100 text-stone-100"  
          />
          <Button variant = "ghost" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </Card>
      <Card className = "m-auto w-[30rem] mt-[3rem] bg-stone-800 border-none p-3 shadow-lg">
        <CardContent className = "p-2">
          <CardTitle className = "text-[1rem] text-stone-100">
            Definition :
          </CardTitle>
          {wordMeaning && 
            <p className=' text-stone-300 mt-4'>{wordMeaning}</p>
          }
        </CardContent>
      </Card>
    </div>
  )
}

export default App

