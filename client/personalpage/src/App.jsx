import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  //useEffect to get a random quote from the api
useEffect(() => {
  const getQuote = async () => {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      //set a random quote from the array of quotes and set the author as well in a new state called author and setAuthor the author and qutoe need to be from the same array index
      const random = Math.floor(Math.random() * data.length);
      setQuote(data[random].text);
      setAuthor(data[random].author);
    });
  }
getQuote();

},[]);
  return (
    <>
      <div className="quote">
            <h1>Quote of the Day</h1>
            <p>{quote}</p>
            <p>{author}</p>
            </div>
      <div className="heading">
        <h1 id="greeting">Family</h1>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="src/Images/boatsno.jpg" className="d-block w-150" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Tyler and Teddy</h5>
                <p>On the bow of our first cruise ship.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="src/Images/Sully Stark.jpg" className="d-block w-150" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Sully Stark</h5>
                <p>He loves his flowers.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="src/Images/Wifey😍.jpg" className="d-block w-150" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Majirel</h5>
                <p>My beautiful wife.</p>
              </div>
            </div>
          </div>
        </div>
      <div>
        <h1>Hobbies</h1>
      </div>
        <div className='cardContainer'>
          <div className="card" style={{ width: '18rem'}} >
            <img src="src/Images/SanS.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Basketball</h5>
              <p className="card-text">From watching to playing, I'll always be ready to hoop!
                San Antonio SPURS Super Fan!</p>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }} >
            <img src="src/Images/discgolf.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Disc Golf</h5>
              <p className="card-text">18 holes of pure bliss!</p>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }} >
            <img src="src/Images/kayaking.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Kayaking</h5>
              <p className="card-text">You will find me on Lake Pflugerville</p>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }} >
            <img src="src/Images/hiking.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hiking</h5>
              <p className="card-text">Anytime, Anywhere!</p>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="like-btn">Like My Page? Give it a Like!</label>
          <button type="button" className="btn btn-secondary" id="like-btn" onClick={() => setLikes(count => count + 1)}>{likes} : Likes</button>
        </div>

    </>
  )
}

export default App

