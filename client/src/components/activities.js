import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Activities = (props) => {
    const handleOnDragStart = e => e.preventDefault();
    const ActivityList = props.activities.map(function(item){
        return (
            <img src={item.image} alt="" onDragStart={handleOnDragStart} className="imageClass" />
        )
    });


    return <AliceCarousel handleOnDragStart>{ActivityList}</AliceCarousel>;
};

export default Activities;