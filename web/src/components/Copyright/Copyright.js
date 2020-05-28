const Copyright = ({ year, children, ...props }) => (
  <small {...props}>
    &copy; Copyright {year} {children}
  </small>
)

Copyright.defaultProps = {
  year: new Date().getFullYear(),
}

export default Copyright
