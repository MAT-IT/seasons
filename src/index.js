import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {

    constructor(props) {
        super (props) ;
         this.state = {lat:null , errorMesssage:''} ;

        
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
          return   <div>Latitude : { this.state.lat}</div>
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