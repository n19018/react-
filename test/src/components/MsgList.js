import React from "react";
import axios from "axios";

import ColorfulMsg from "./ColorfulMsg";
 
class MsgList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        msgList: []
    };
  }

  handleClick = () => {
    axios
    .get("https://api.myjson.com/bins/mt9wv")
    .then(res => this.setState({ msgList: res.data.msgList }))
    .catch(err => alert(err));
  };
 
  render() {
    return (
    <>
      <button onClick={this.handleClick}>メッセージ取得</button>
      {this.state.msgList.map(val => (
          <ColorfulMsg key={val.message} color={val.color}>
              {val.message}
          </ColorfulMsg>
      ))}
    </>
    );
  }
}
 
export default MsgList;