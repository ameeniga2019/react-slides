import React, {useState} from 'react';

function Slides({ slides }) {
    const  [curr, setCurr] = useState(0)
   
    var length = slides.length;
    function gotoNext() {
     setCurr(curr === length-1 ? 0: curr+1)
       
    }
function gotoPrev(){
    setCurr(curr ===0 ? length-1: curr-1)
  }
 function   refresh(){
     setCurr(0)
    }
    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }
   return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={refresh}>Restart</button>
                <button data-testid="button-prev" className="small"  onClick={gotoPrev}   >Prev</button>
                <button data-testid="button-next" className="small"   onClick={gotoNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
               <h1 data-testid="title">{slides[curr].title}</h1>
               <p data-testid="text">{slides[curr].text}</p>
            </div>
        </div>
    );

}

export default Slides;
