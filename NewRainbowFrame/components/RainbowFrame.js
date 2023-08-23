import React from 'react';
import PropTypes from 'prop-types';
import Block from './VotesBlock';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  

render() {
  /*
    var n=this.props.colors.length
    var divArr=[]     
    var elem=this.props.children
    for (var i=1;i<=n;i++){                 
        elem=<div style={{border:"solid 4px "+this.props.colors[i],padding:"10px",  width:40*i, marginLeft:"6px"}}  key={i} children={elem}></div>           

    }
    divArr.push(elem)


    return(  
    divArr     
        )    
      }
      */
if (this.props.colors.length==0){
  return this.props.children
}
else {
  return (<div style={{border:"solid 4px "+this.props.colors[0],padding:"10px",  width:"100%", marginLeft:"6px"}}>
    <RainbowFrame colors={this.props.colors.slice(1)}>{this.props.children}</RainbowFrame>
  </div>)
}

    }    
}
export default RainbowFrame;
