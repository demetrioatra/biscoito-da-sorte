import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor (props) {

    super(props)
    this.state = {
      txt: ''
    }

    this.showMessage = this.showMessage.bind(this)

    this.phrases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]
  }

  showMessage () {
    let state = this.state
    let number = Math.floor(Math.random() * this.phrases.length)
    state.txt = this.phrases[number]
    this.setState(state)
  }

  render () {
    return (
      <div className = 'container'>
        <img className = 'img' src = { require('./imgs/cookie.png') } />
        <Btn nm = 'Open' act = { this.showMessage } />
        <h3 className = 'text'>{ this.state.txt }</h3>
      </div>
    )
  }
}

class Btn extends Component {
  render () {
    return (
      <div>
        <button onClick = { this.props.act }>{ this.props.nm }</button>
      </div>
    )
  }
}

export default App
