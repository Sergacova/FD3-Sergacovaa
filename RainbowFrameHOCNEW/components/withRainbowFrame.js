import React from 'react';

const withRainbowFrame = (colors) => (Component) => {
  return (props) => {
    let content = <Component {...props} />;
    colors.forEach((color) => {
      content = (
        <div
          style={{
            border: `2px solid ${color}`,
            padding: '10px',
            textAlign: 'center',
          }}
        >
          {content}
        </div>
      );
    });
    return content;
  };
};

export { withRainbowFrame };
