import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BarNavDesktop } from './component/BarNavDesktop';
import { SectionHome1 } from './component/SectionHome1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='div-home'>
    <BarNavDesktop />,
    <SectionHome1 />
  </div>

);


