import React, { Component } from "react";
import Jumbotron from "./pages/jumbotron/jumbotron";
import Header from './pages/header/header';
import CardsContainer from './pages/CardsContainer/CardsContainer';
import imageUtil from '../Util/ImageRandomizer';

class PageContainer extends Component{
    state={
      score: 0,
      topScore: 0,
      images: []
    };

    setScore = (value)=>{
      //call method and set flag corresponding to image as true
      for(let i of imageUtil.imageClickedTracker){
        if(Object.keys(i)[0] === value){
          if(!i[value]){
            i[value] = true;
            let newScore = this.state.score + 1;
            this.setState({score: newScore});
          }
          else{
            let calcTopScore = Math.max(this.state.topScore,this.state.score);
            this.setState({topScore: calcTopScore});
            this.setState({score: 0});
            imageUtil.resetImageClickTracker();
            //this.setState({images:imageUtil.getImage()});
          }
        }
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
            <Header score={this.state.score} topScore={this.state.topScore}></Header>
            <Jumbotron></Jumbotron>
            <CardsContainer setScore={this.setScore} images={this.state.images} shuffleImages={this.shuffleImages}></CardsContainer>          
          </div>
        );
      }

}

export default PageContainer;