import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'

const App = () => {

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]

  const [input , setInput] = useState('')
  const [ans , setAns] = useState('')

  const onSearch = () => {
    if(input){
      let result = dictionary.filter((ele) => ele.word.toLowerCase().includes(input.toLowerCase()))

      if(result.length > 0){
        setAns(result[0].meaning)
      }else{
        setAns("Word not found in the dictionary.")
      }
    }else{
      setAns("Word not found in the dictionary.")
    }
  }

  return (
    <div>
      <Card className = "m-auto w-[30rem] mt-[3rem] bg-stone-800 border-none p-3 shadow-lg">
        <div className=' flex items-center gap-3'>
          <Input 
            value = {input}
            onChange = {(e) => setInput(e.target.value)}
            placeholder = "Search for a word..."
            className = "border border-stone-700 placeholder:text-stone-100 text-stone-100"  
          />
          <Button variant = "ghost" onClick = {onSearch}>
            Submit
          </Button>
        </div>
      </Card>
      <Card className = "m-auto w-[30rem] mt-[3rem] bg-stone-800 border-none p-3 shadow-lg">
        <CardContent className = "p-2">
          <CardTitle className = "text-[1rem] text-stone-100">
            Definition :
          </CardTitle>
          {ans && 
            <p className=' text-stone-300 mt-4'>{ans}</p>
          }
        </CardContent>
      </Card>
    </div>
  )
}

export default App