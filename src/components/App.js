import React, { Component } from 'react'
import Header from './Header';
import '../scss/App.scss';
import ListOfAllItems from './ListOfAllItems';


export default class App extends Component {

  state = {
    items: []
  }

  getData = data => {
    let newState = [...this.state.items, data]
    this.setState({
      items: newState
    })
  }

  render() {

    // console.log(this.state.items);

    return (
      <div className="App">
        <Header getData={this.getData} />
        <ListOfAllItems data={this.state.items} />
      </div>
    )
  }
}
