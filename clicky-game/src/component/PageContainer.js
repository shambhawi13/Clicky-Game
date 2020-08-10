import React, { Component } from "react";
import Jumbotron from "./pages/jumbotron/jumbotron";
import Header from './pages/header/header';
import CardsContainer from './pages/CardsContainer/CardsContainer';
import imageUtil from '../Util/ImageRandomizer';

class PageContainer extends Component{
    state={

    };

    componentDidMount(){
      //console.log(imageUtil.getImage());
    }

    render() {
        return (
          <div>
            <Header></Header>
            <Jumbotron></Jumbotron>
            <CardsContainer images={imageUtil.getImage()}></CardsContainer>          
          </div>
        );
      }

}

export default PageContainer;