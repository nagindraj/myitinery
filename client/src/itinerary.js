import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import Activities from './activities';


const Itinerary = (props) => {
    const hashes = props.hashtags.map(function(hashtag){
        return (
            <span className="hash">{hashtag}</span>
        )
    });

    let show = false;

    show = props.activities.length > 0 && 
        props.activities[0].userId === props.userId
    return (
        <>
            <div>
                
            </div>
            <div className="card cardBackgroundColor">
                <div className="card-body">
                    <h5 className="card-title title">{props.title}</h5>
                    <div className="card-main">
                        <div className="card-img-left">
                            <i className="fas fa-3x fa-user"></i>
                            {props.name}
                        </div>
                        <div className="card-body">
                            <div className="cardLikes">
                                <span>Likes: {props.rating}</span>
                                <span>{props.duration} hours</span>
                                <span>{props.price}</span>
                            </div>
                            <div className="hashes">
                                {hashes}  
                            </div>
                        </div>
                    </div>
                    <div className="ViewAllLink card-body">
                        <button onClick={() => props.getActivities(props.userId)}>View All</button> 
                    </div>
                    {
                        show && <Activities activities={props.activities}/> 
                    }
                      
                </div>
            </div>
        </>
    )
};

export default Itinerary;