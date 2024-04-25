import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)


  return (
    <>
      <div className="heading">
        <h1 id="greeting">Hi, Welcome to my Profile</h1>
        <div>
          <label htmlFor="like-btn">Like My Page? Give it a Like!</label>
          <button type="button" className="btn btn-secondary" id="like-btn" onClick={() => setLikes(count => count + 1)}>{likes} : Likes</button>
        </div>
      </div>
      <div className="container">
        <h1>Hobbies</h1>
        <div className='container'>
          <div className='hobbies'></div>
          <div className='hobbies'></div>
          <div className='hobbies'></div>
          <div className='hobbies'></div>
        </div>
        <h1>Family</h1>
        <div className='container'>
          <div className='hobbies'></div>
          <div className='hobbies'></div>
          <div className='hobbies'></div>
          <div className='hobbies'></div>
        </div>
      </div>
    </>
  )
}

export default App

