import React from 'react';
import './main/main.css';



const Card = (props) => {
    return(
            <>
                <div className="card">
                    <img src="..." className="card-img-top" alt=""/>
                    <div className="card-body">
                        <p className="card-text">{props.text}</p>
                    </div>
                </div>
            </>
    )
   
}

export default Card;