import React from 'react';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

class App extends React.Component{
  render(){
    return(
      <>
      <Header/>
      <Content/>
      <Footer/>
      </>
    )
  }
}

export default App;