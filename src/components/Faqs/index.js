import {Component} from 'react'

import FaqList from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <ul>
        {faqsList.map(eachItem => (
          <FaqList eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }
}
export default Faqs
