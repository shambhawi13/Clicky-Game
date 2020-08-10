import React, { Component } from "react";
import Jumbotron from "./pages/jumbotron/jumbotron";
import Header from './pages/header/header';
import Lists from './pages/lists/lists'

class PageContainer extends Component{
    state={

    };

    render() {
        return (
          <div>
            <Header></Header>
            <Jumbotron></Jumbotron>
            <Lists></Lists>            
          </div>
        );
      }

}

export default PageContainer;