import {Component} from 'react'

class FaqList extends Component {
  state = {isColorChange: false}

  changeColor = () => {
    const {isColorChange} = this.state
    this.setState(prevState => ({isColorChange: !prevState.isColorChange}))
  }

  render() {
    const {eachItem} = this.props
    const {id, questionText} = eachItem
    const {isColorChange} = this.state
    const imageUrl = isColorChange
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imageText = isColorChange ? 'Plus' : 'Minus'
    const paraText = isColorChange ? eachItem.answerText : ''
    return (
      <li id={id}>
        <h1>{questionText}</h1>
        <button type="button" onClick={this.changeColor}>
          <img src={imageUrl} alt={imageText} />
        </button>
        <p>{paraText}</p>
      </li>
    )
  }
}

export default FaqList
