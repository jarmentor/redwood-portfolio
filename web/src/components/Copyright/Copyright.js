const Copyright = ({ year, children, ...props }) => (
  <small {...props}>
    &copy; Copyright {year || new Date().getFullYear()} {children}
  </small>
)

export default Copyright
