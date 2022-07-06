import { Component } from 'react'
import './App.css'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }

    this.phrases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]

    this.showMessage = this.showMessage.bind(this)
  }

  showMessage() {
    let state = this.state
    let number = Math.floor(Math.random() * this.phrases.length)
    state.text = this.phrases[number]
    this.setState(state)
  }

  render () {
    return (
      <div className='container'>
        <img className='img' src={ require('./imgs/cookie.png') }/>
        <Button name="Open" action={ this.showMessage }/>
        <h3 className='text'>{ this.showMessage }</h3>
      </div>
    )
  }
}

class Button extends Component {
  render() {
    return (
      <div>
        <button>{ this.props.name }</button>
      </div>
    )
  }
}

export default App;
