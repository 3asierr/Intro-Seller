import React from 'react';
import './App.css';
import JoinNia from './IntroSeller/Components/JoinNia';
import WhereShouldISell from './IntroSeller/Components/WhereShouldISell';
import SimplePowerful from './IntroSeller/Components/SimplePowerful';
import SellerStory from './IntroSeller/Components/SellerStory';
import SellerSupport from './IntroSeller/Components/SellerSupport';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JoinNia/>
        <WhereShouldISell/>
        <SimplePowerful/>
        <SellerStory/>
        <SellerSupport/>
      </header>
    </div>
  );
}
export default App;
