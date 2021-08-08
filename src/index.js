import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";


class App extends React.Component {

    state ={lat:null, errorMesssage:""}

    componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
           
            position =>
            { 
                 this.setState({lat : position.coords.latitude})
             },
             
            err => 
             {

                this.setState({ errorMesssage : err.message})

             } 
        );

    }

    render () {

        if(this.state.lat && !this.state.errorMesssage){
          return   <SeasonsDisplay lat={this.state.lat}/>
        }

        if(!this.state.lat && this.state.errorMesssage){
         return    <div>Error : {this.state.errorMesssage}</div>
        }

        return <div>Loading...</div>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);