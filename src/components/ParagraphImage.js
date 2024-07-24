import React from 'react'
import pic1 from '../images/1.png' 

export default function ParagraphImage() {

    return (
        <div className="first-par">
            <div className="the-par">
            <pre style={{color:"#505f98"}}>
            <h1 style={{color:"#091133"}}>Introduce Your Product <br />
             Quickly & Effectively</h1>
             Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean <br />
            ligula eget dolor. Cum SOCiiS natoque <br />
            penatibus et magnis dis parturient mantes, nascetur ridiculus <br />
            mUS. quam felis, ultricies nec. pellentesque eu, pretium quis, <br />
            sem, Nulla consequat massa quis enim.
            </pre>
                <br />
                <br />
            <div className="two-buttons">
                <button style={{marginRight:"25px"}} className='first-button'>Purechase UI Kit</button>
                <button className='second-button'>Learn More</button>
            </div>


            </div>
            <div className="the-image">
                <img src={pic1} alt="" />
            </div>

        </div>
    );

}

