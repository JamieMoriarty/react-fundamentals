// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [ inputValue, setInputValue ] = React.useState(undefined);
  const usernameInputRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmitUsername(inputValue);
  }
  
  const handleChange = (event) => {
    const userName = event.target.value;

    setInputValue(userName.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameID">Username:</label>
        <input id="usernameID" type="text" ref={usernameInputRef} onChange={handleChange} value={inputValue}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
