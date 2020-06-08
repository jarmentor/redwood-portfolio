const Title = ({ level, ...props }) => {
  const TitleTag = `h${level}`
  return (
  <TitleTag style={{ lineHeight: 1 }} {...props}>
      {props.children}
    </TitleTag>
  )
}

export default Title
