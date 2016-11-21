import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapComponent from './map-component/map-component.js'

export default class GoogleMap extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(<div>
			<GoogleMapComponent/>
		This is map
		</div>)
	}
}
