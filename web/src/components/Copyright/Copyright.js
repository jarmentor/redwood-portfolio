function getCurrentYear() {
  const year = new Date().getFullYear()
  return year
}
const Copyright = ({ year, holder, ...props }) => {
  const copyrightYear = year || getCurrentYear()
  const copyrightHolder = holder || props.children

  return (
    <p {...props}>
      <small>
        &copy; Copyright {copyrightYear} {copyrightHolder}
      </small>
    </p>
  )
}

export default Copyright
