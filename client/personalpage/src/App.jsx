import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="heading">
        <h1 id="greeting">Hi, Welcome to my Profile</h1>
        <div>
          <label htmlFor="like-btn">Like My Page? Give it a Click --></label>
          <button type="button" className="btn btn-secondary" id="like-btn" onClick={() => setCount(count => count + 1)}>{count} : Likes</button>
        </div>
        </div>
    </>
  )
}

export default App

