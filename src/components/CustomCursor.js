
const CustomCursor = ({innerRef, outerRef}) => {
  return (
    <>
      <div className="inner-cursor" ref={innerRef}></div>
      <div className="outer-cursor" ref={outerRef}></div>
    </>
  )
}

export default CustomCursor