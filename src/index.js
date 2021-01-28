import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RecoilRoot } from 'recoil'
import { recoilPersist } from 'recoil-persist'


const { RecoilPersist, updateState } = recoilPersist(
  ['investment_user',], // configurate that atoms will be stored (if empty then all atoms will be stored),
  {
    key: "recoil-persist", // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
  }
);

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot initializeState={updateState}>
    <RecoilPersist />
    <App />
   </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);


