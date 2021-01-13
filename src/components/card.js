import React from 'react';
import circle from '../images/circle.jpg';
import cross from '../images/cross.jpg';
import df from '../images/logo.svg'
const Card = ({input}) =>{
    if(input !== "") {
        return (
            <div>
                {input==='circle' ? <img src={circle} alt="circle" height="300px" width="270px"/> : <img src={cross} alt="cross" height="300px" width="270px"/>}
            </div>
        )
    }else{
        return (
            <div>
                <img src={df} alt="default" height="300px" width="270px"/>
            </div>
        )
    }
    
}

export default Card;