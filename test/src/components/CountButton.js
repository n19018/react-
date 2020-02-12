import React from "react";

class CountButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
    }

    handleClick = () => {
       this.setState(state => ({ count: state.count + 1 }));
    };

    render() {
      return <button onClick={this.handleClick}>{this.state.count}</button>;
    }
  }

  export default CountButton;