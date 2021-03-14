import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
// import App from './App';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import About from './components/about-section/About-us';
import Inventory from './components/inventory-section/Inventory';
import Contact from './components/contact-section/Contact';
import Footer from './components/footer/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navigation />
    <Header />
    <About />
    <div id="hr">
        <hr class="container" />
      </div>
    <Contact/>
    <Inventory />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
