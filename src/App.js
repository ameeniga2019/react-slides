import React from 'react';
import './App.css';
import 'h8k-components';
import Slides from './components/Slides';
const title = "Slideshow App";
const  slides = [
    {
         'title': ' First Slide',
        'text': 'First  text'
        },
        {
            title: ' Second Slide',
           text: 'second  text'
           },{
            title: 'Third Slide',
           text: 'third  text'
        },
        {
            title: ' Forth Slide',
           text: 'Fourth text'
           }
    ]
function App({slides}) {
   
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides slides={slides} />
            </div>
        </div>
    );
}

export default App;
