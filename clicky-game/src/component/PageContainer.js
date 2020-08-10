import React, { Component } from "react";
import Jumbotron from "./pages/jumbotron/jumbotron";
import Header from './pages/header/header';
import CardsContainer from './pages/CardsContainer/CardsContainer';
import ImageRandomizer from '../Util/ImageRandomizer';

class PageContainer extends Component{
    state={

    };

    componentDidMount(){
      ImageRandomizer();
    }

    render() {
        return (
          <div>
            <Header></Header>
            <Jumbotron></Jumbotron>
            <CardsContainer images={ImageRandomizer()}></CardsContainer>          
          </div>
        );
      }

}

export default PageContainer;