import React from "react";
import { useState } from "react";
import Button from "./Components/Button";
import Results from "./Components/Results";

const App = () => {
  
  const [results, setResults] = useState("")

  function pressButton(value){
    setResults(results + value)
  }

  return (

    <div>
      <h4 className="title" >calc</h4>
      <Results number={results} />
      <div className="buttons-grid">
      <Button onClick={() => pressButton("7")} text='7' />
      <Button onClick={() => pressButton("8")} text='8' />
      <Button onClick={() => pressButton("9")} text='9' />
      <Button className='del-button' text='DEL' />
      <Button onClick={() => pressButton("4")} text='4' />
      <Button onClick={() => pressButton("5")} text='5' />
      <Button onClick={() => pressButton("6")} text='6' />
      <Button text='+' />
      <Button onClick={() => pressButton("1")} text='1' />
      <Button onClick={() => pressButton("2")} text='2' />
      <Button onClick={() => pressButton("3")} text='3' />
      <Button text='-' />
      <Button text='.' />
      <Button onClick={() => pressButton("0")} text='0' />
      <Button text='/' />
      <Button text='x' />
      </div>
      <div className="reset-equal-buttons">
      <Button className='reset-button' text='Reset' />
      <Button className='equal-button' text='=' />
      </div>
    </div>
  );
};

export default App;
