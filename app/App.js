import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {index: -1}
  }
  render () {
    const fibo = function * () {
      var [prev, curr] = [1, 1]
      while (true) {
        [prev, curr] = [curr, prev + curr]
        console.log('yield: ' + curr)
        yield curr
      }
    }

    const _setState = (newState) => {
      this.setState(newState)
    }

    const gen = fibo()

    let a = 0

    return (<div>
              <input type="button" value="Fibonacci" onClick={() => {
                a = gen.next().value}} />
              <div>
              Game index: {a}
              </div>
            </div>)
  }
}
