import React from 'react';
import Itinerary from './itinerary';

const ItineraryList = (props) => {
    const Itineraries = props.itineraries.map(function(item){
        return <Itinerary
            userId={item.userId}
            pic={item.profilePic}
            name={item.name}
            title={item.title}
            price={item.price}
            rating={item.rating}
            hashtags={item.hashtag}
            duration={item.duration}
            getActivities={props.getActivities}
            activities={props.activities}
        />
    });

    return Itineraries;
};

export default ItineraryList;