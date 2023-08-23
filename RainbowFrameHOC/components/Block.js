import React from 'react';

import DoubleButton from './DoubleButton';
import {withRainbowFrame} from './withRainbowFrame';

let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];


class Block extends React.Component {

  render() {
    
    let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);
  return (

      <div>      
        <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>
        <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>
      </div>
 
    );
  }

}

export default Block;
