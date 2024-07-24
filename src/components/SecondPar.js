import React from 'react'
import pic2 from '../images/2.png'
import pic3 from '../images/3.png'


function titleGo(){
    
    return (
        <div>
            <img src={pic3} alt="" />
            
            <pre style={{color:"#505f98"}}>
            <h1 style={{color:"#091133"}}>Title Goes Here</h1><br />   
            Lorem ipsum dolor sit amet, consectetuer <br />
            adipiscing elit. Aenean commodo ligula eget <br />
            dolor. <br />
            </pre>
            
            

        </div>
    );
}


export default function SecondPar() {
    return (
        <div className='second-par'>
            
            <div className="the-par">
            <pre style={{color:"#505f98"}}>
            <h1 style={{color:"#091133"}}>Light, Fast & Powerful
            </h1>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br />
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis <br />
            dis parturient montes, nascetur ridiculus <br />
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. <br />
            Nulla consequat massa quis enim. <br />
            </pre>
            <br />
            <br />
            <div style={{display:"flex"}}>
            {titleGo()}
            {titleGo()}
            </div>
           

            </div>



            <img src={pic2} alt="" style={{height:"540px", width:"524px"}}/>
        </div>
    );
}