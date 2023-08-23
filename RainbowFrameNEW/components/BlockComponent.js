import React from 'react';
import RainBowFrame from './RainBowFrame';

const BlockComponent = () => {
  let colors = ['red', 'orange', 'yellow', 'green', '#00BFF', 'blue', 'purple'];
  return <RainBowFrame colors={colors}>hello!</RainBowFrame>;
};

export default BlockComponent;
