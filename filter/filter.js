let Filter = React.createClass({
    displayName: "Filter",
  
    getInitialState: function () {
      return {
        dataBase: this.props.dataBase,
        inputValue: "",
        isChecked: false,
      };
    },
  
    filter: function () {
      let newDataBase = this.props.dataBase.slice();
      if (this.state.inputValue) {
        newDataBase = [];
        this.props.dataBase.forEach((el) => {
          if (el.match(this.state.inputValue)) {
            newDataBase.push(el);
          }
        });
      }
      if (this.state.isChecked) {
        newDataBase = newDataBase.sort();
      }
      this.setState({
        dataBase: newDataBase,
      });
    },
  
    refreash: function () {
      this.setState(
        {
          dataBase: this.props.dataBase,
          inputValue: "",
          isChecked: false,
        },
        this.filter
      );
    },
  
    checkOnOf: function (e) {
      this.setState(
        {
          isChecked: e.target.checked,
        },
        this.filter
      );
    },
  
    inputChange: function (e) {
      this.setState(
        {
          inputValue: e.target.value,
        },
        this.filter
      );
    },
  
    render: function () {
      return React.DOM.div(
        {
          className: "Filter",
        },
  
        React.DOM.input({
          type: "checkbox",
          checked: this.state.isChecked,
          onChange: this.checkOnOf,
        }),
        React.DOM.input({
          type: "text",
          value: this.state.inputValue,
          onChange: this.inputChange,
        }),
  
        React.DOM.input({
          type: "button",
          value: "сброс",
          onClick: this.refreash,
        }),
        React.DOM.div(
          {
            className: "textView",
          },
          this.state.dataBase.join("\n")
        )
      );
    },
  });