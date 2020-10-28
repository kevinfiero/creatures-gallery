import React, { Component } from 'react'
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';
import creatures from './data.js';

export default class App extends React.Component {
  state = {
    filter: 'Show All'
  }

  handleChange = e => {
      this.setState({
          filter: e.target.value
      });
  }
  render() {
    return (
      <>
        <Header/>
        <div className='center flex-row'>
          <label id='filter-label'>Keyword: </label>
          <Dropdown handleChange = {this.handleChange}/>
        </div>
        <ImageList creatures={creatures} filter = {this.state.filter}/>
      </>
    );
  }
}
