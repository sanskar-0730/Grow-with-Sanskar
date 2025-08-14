import React, { useEffect, useState } from 'react'
import './Home.css'
import my_image from '/my_image.png'

const Home = () => {

  const fullText = " Hi, My Name is Sanskar Gupta";

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }
      else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className='home'>
      
      <div className='container'>
        <div className='my_name'>
          <b>{displayedText}</b>
          <span className="cursor">|</span>
        </div>
        <div className='my_image'>
          <img src={my_image} alt="sanskar" />
        </div>
      </div>

      <div className="section">
        <b>MORE ADDING SOON....</b>
      </div>

    </div>
  )
}

export default Home