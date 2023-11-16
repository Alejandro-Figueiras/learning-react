export default ({children, isSelected, updateBoard, index}) => {
  const handleClick = (e) => {
    updateBoard(index)
  }
  
  return (
    <div onClick={handleClick} className={`square ${isSelected?'is-selected':''}`}>
      {children}
    </div>
  )
}