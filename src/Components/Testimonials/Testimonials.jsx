import React, { useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slider = useRef();
  const [tx, setTx] = useState(0); // state rakha hai taaki value persist kare

  const slideForward = () => {
    if (tx > -75) { // 4 images = -75% tak jaa sakta hai (0, -25, -50, -75)
      const newTx = tx - 25;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      const newTx = tx + 25;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>  
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>  

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Lucy</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>
                "Edusity has been a game-changer for my learning journey. The interactive courses and supportive community have made studying enjoyable and effective. Highly recommend!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>John</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>
                "Edusity has transformed my learning experience. The platform's user-friendly interface and diverse course offerings have made it easy for me to explore new subjects and enhance my skills."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Kiara</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>
                "Edusity has been a game-changer for my learning journey. The interactive courses and supportive community have made studying enjoyable and effective. Highly recommend!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>James</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>
                "Edusity has been a game-changer for my learning journey. The interactive courses and supportive community have made studying enjoyable and effective. Highly recommend!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
