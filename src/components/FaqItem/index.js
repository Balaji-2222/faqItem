const FaqList = props => {
  const {eachItem, changeColor, para, imageUrl, alterText} = props
  const {id, questionText} = eachItem
  const changeButton = () => {
    changeColor(id)
  }

  return (
    <li id={id}>
      <h1>{questionText}</h1>
      <button onClick={changeButton} type="button">
        <img src={imageUrl} alt={alterText} />
      </button>
      <p>{para}</p>
    </li>
  )
}

export default FaqList
