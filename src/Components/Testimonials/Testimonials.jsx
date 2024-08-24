import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonials() {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Emily Thompson</h3>
                            <span>Austin, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of 
                        the best decisions I've ever made. The supportive
                        community, state-of-the-art facilities, and commitment
                        to academic excellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Toronto, Canada</span>
                        </div>
                    </div>
                    <p>Enrolling at Edusity has been a transformative experience for me. 
                        The innovative curriculum, dedicated faculty, and vibrant campus life 
                        have provided me with everything I need to succeed.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Sophia Martinez</h3>
                            <span>London, UK</span>
                        </div>
                    </div>
                    <p>Attending Edusity has been an incredible journey. The inspiring instructors, diverse learning opportunities, 
                        and focus on practical skills have more than prepared me for my future career.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Michael Rivera</h3>
                            <span>Brisbane, Australia</span>
                        </div>
                    </div>
                    <p>Joining Edusity was a decision I'll always be proud of. The hands-on approach to learning, excellent resources, 
                        and nurturing environment have significantly shaped both my personal and professional growth.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
