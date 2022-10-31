import React from "react";
import Footer from '../../components/footer/footer'
import Header from "../../components/header/header";
import {Outlet} from 'react-router-dom';

class Layout extends React.Component{
  render(){
    return(
      <div className="divBody">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    )
  }
}

export default Layout;