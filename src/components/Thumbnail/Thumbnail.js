import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Thumbnail.css'

const content = [
    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png"
    }
  ];

const Thumbnail = () => {
  return (
    <div className="slider-wrapper">
    {content.map((item, index) => (
      <div
        key={index}
        className="slider-content"
      >
        <div className="inner">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button>{item.button}</button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Thumbnail