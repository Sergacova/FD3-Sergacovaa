import React from 'react';


function withRainbowFrame (colors){
  


return function(Component) {
  return function (props) {
  var elem=<Component {...props}/>
  colors.forEach ((i,v)=>{                 
      elem=<div style={{border:"solid 4px "+i, padding:"10px",  width:270+40*v, marginLeft:"6px"}}  key={v} children={elem}></div> 
         
  })
 
  return  elem
  
  }
};
}

export  {withRainbowFrame};
