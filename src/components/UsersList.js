import React from "react";
import axios from "axios";

export default class UsersList extends React.Component {
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10.").then((resp) => {
      console.log(resp.data);
    });
  }
  render() {
    return (
      <ul className='list-group'>
        <li className='list-group-item'>An item</li>
        <li className='list-group-item'>A second item</li>
        <li className='list-group-item'>A third item</li>
        <li className='list-group-item'>A fourth item</li>
        <li className='list-group-item'>And a fifth one</li>
      </ul>
    );
  }
}
