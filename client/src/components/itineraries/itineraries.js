import React from 'react';
import { getItineraries, getActivities } from '../../actions/itineraryActions';
import {connect} from 'react-redux';
import ItineraryList from './itineraryList';
import '../main/main.css'
import { Link } from 'react-router-dom';


class Itineraries extends React.Component{
    render() {
        console.log(this.props);
        return (
            <>
                <div className="lableMyItineraries">Avalilable My Itineraries
                </div>
                    <ItineraryList 
                        itineraries={this.props.itineraries} 
                        getActivities={this.props.getActivities}
                        activities={this.props.activities}
                    />
               <div className="ChooseCity">
                    <Link to="/" > Choose another City </Link>
               </div>
               
            </>
        )
    }
    componentDidMount = () => {
        this.props.getItineraries(this.props.match.params.city);
    }
  
}

const mapStateToProps = state => ({
    itineraries: state.itineraries.itineraries,
    activities: state.itineraries.activities
})


export default connect(mapStateToProps, {getItineraries, getActivities})(Itineraries);