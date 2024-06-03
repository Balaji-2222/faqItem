import {Component} from 'react'

import FaqList from '../FaqItem'

class Faqs extends Component {
  state = {color: false, updatedId: 0}

  changeColor = id => {
    const {color, updatedId} = this.state
    this.setState(prevState => ({color: !prevState.color}), (updatedId: id))
  }

  render() {
    const {faqsList} = this.props
    const {color, updatedId} = this.state
    const alterText = color ? 'minus' : 'plus'
    const imageUrl = color
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const para = color ? `${faqsList[updatedId]}`.answerText : ''
    console.log(para)
    return (
      <ul>
        {faqsList.map(eachItem => (
          <FaqList
            eachItem={eachItem}
            key={eachItem.id}
            changeColor={this.changeColor}
            alterText={alterText}
            imageUrl={imageUrl}
            para={para}
          />
        ))}
      </ul>
    )
  }
}
export default Faqs
