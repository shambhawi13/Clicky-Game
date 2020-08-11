import React, { Component } from "react";
import Jumbotron from "./pages/jumbotron/jumbotron";
import Header from './pages/header/header';
import CardsContainer from './pages/CardsContainer/CardsContainer';
import imageUtil from '../Util/ImageRandomizer';

class PageContainer extends Component{
    state={
      score: 0,
      images: []
    };

    setScore = (value)=>{
      if(value == "increment"){
        let newValue = this.state.score + 1;
        this.setState({score:newValue});
      }
      else{
        this.setState({score:0});
      }
    }

    shuffleImages = ()=>{
      this.setState({images:imageUtil.shuffleImages()})
    }

    componentDidMount(){
      this.setState({images:imageUtil.getImage()});
      //console.log(imageUtil.getImage());
    }

    render() {
        return (
          <div>
            <Header></Header>
            <Jumbotron></Jumbotron>
            <CardsContainer setScore={this.setScore} images={this.state.images} shuffleImages={this.shuffleImages}></CardsContainer>          
          </div>
        );
      }

}

export default PageContainer;