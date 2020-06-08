const Copyright = ({ children, ...props }) => (
  <small {...props}>
    &copy; Copyright {new Date().getFullYear()} {children}
  </small>
)

export default Copyright
