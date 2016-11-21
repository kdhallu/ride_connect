import _ from "lodash";
import React,{Component} from 'React'
import Helmet from "react-helmet";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GoogleMapTemplate = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={10}
        defaultCenter={{lat: -25.363882, lng: 131.044922}}
        onClick={props.onMapClick}
    >
    {props.markers.map(marker => (
        <Marker
        {...marker}
            onRightClick={() => props.onMarkerRightClick(marker)}
        />
    ))}
    </GoogleMap>
));

export default class GoogleMapComponent extends Component {

    state = {
        markers: [{
            position: {
                lat: -25.363882,
                lng: 131.044922
            },
            key: `Taiwan`,
            defaultAnimation: 2
        }]
    };

    handleMapLoad = this.handleMapLoad.bind(this);
    handleMapClick = this.handleMapClick.bind(this);
    handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

    handleMapLoad(map) {
        this._mapComponent = map;
        if (map) {
            console.log(map.getZoom());
        }
    }

    /*
     * This is called when you click on the map.
     * Go and try click now.
     */
    handleMapClick(event) {
        const nextMarkers = [
            ...this.state.markers,
            {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now() // Add a key property for: http://fb.me/react-warning-keys
            }
        ];
        this.setState({
            markers: nextMarkers
        });

        if (nextMarkers.length === 3) {
            this.props.toast(
                `Right click on the marker to remove it`,
                `Also check the code!`
            );
        }
    }

    handleMarkerRightClick(targetMarker) {
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        this.setState({
            markers: nextMarkers
        });
    }

    render() {
        return (

            <GoogleMapTemplate
                containerElement={
                    <div className="container-element" style={{position: ''}} />
                    }
                mapElement={
                    <div className="map-element" style={{position: 'inherit'}}/>
                    }
                onMapLoad={this.handleMapLoad}
                onMapClick={this.handleMapClick}
                markers={this.state.markers}
                onMarkerRightClick={this.handleMarkerRightClick}
            />

        );
    }
}