import React, { Component } from "react";
import "./App.css";

// components
import { connect } from 'react-redux'
import SmurfList from './SmurfList'
import SmurfForm from "./SmurfForm";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf React App</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}




const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(
  mapStateToProps,
  {}
)(App)
