import React from 'react';
import CityList from './citylist';
import { getCities, searchCities } from '../actions/cityActions';
import {connect} from 'react-redux';
import './city.css';


class Cities extends React.Component{
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(event) {
        this.props.searchCities(event.target.value);
    }
   
    render() {
        return (
        <div className="app">
            <div className="Filter-Lable">
                <span>Filter our current cities</span>
                <span>
                   <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Recipient's username" 
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2"
                    onKeyUp={this.handleSearch}
                    />
                </span>
            </div>
            <div className="list-group">
                <CityList cities={this.props.cities}/>
            </div>
        </div>
        )
    }
    componentDidMount = () => {
        this.props.getCities();
    }
  
}

const mapStateToProps = state => ({
    cities: state.cities.cities
})


export default connect(mapStateToProps, {getCities, searchCities})(Cities);