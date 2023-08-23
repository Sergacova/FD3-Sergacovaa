import React from 'react';
import { withRainbowFrame } from './components/withRainbowFrame';
import DoubleButton from './components/DoubleButton';

const App = () => {
  let colors = ['red', 'orange', 'yellow', 'green', 'grey', 'blue', 'purple'];
  let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);
  return (
    <FramedDoubleButton
      caption1="я из лесу"
      caption2="мороз"
      cbPressed={(num) => alert(num)}
    >
      вышел, был сильный
    </FramedDoubleButton>
  );
};

export default App;
