import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";


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

    rendercontent(){
        if(this.state.lat && !this.state.errorMesssage){
            return   <SeasonsDisplay lat={this.state.lat}/>
          }
  
          if(!this.state.lat && this.state.errorMesssage){
           return    <div>Error : {this.state.errorMesssage}</div>
          }
  
          return <Spinner message="Please accept location request..."/>

    }
    render () {
        return (

        <div className='border  red'>
            {this.rendercontent()}
        </div>
        )
        
        
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);