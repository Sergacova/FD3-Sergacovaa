import React from "react";

class RainbowFrame extends React.Component {
  render() {
    const { colors } = this.props;
    let content = this.props.children;

    colors.forEach((color) => {
      content = (
        <div
          style={{
            border: `2px solid ${color}`,
            padding: "5px",
            textAlign: "center",
          }}
        >
          {content}
        </div>
      );
    });
    return <div>{content}</div>;
  }
}
export default RainbowFrame;
