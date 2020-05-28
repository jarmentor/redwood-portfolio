const Repeater = ({ Child, quantity }) => {
  let Children = []

  for (let i = 1; i < quantity + 1; i++) {
    Children.push(<Child id={i} number={i} />)
  }
  return <>{Children}</>
}

export default Repeater
