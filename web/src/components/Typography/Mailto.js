const MailTo = ({ address, children, ...props }) => (
  <a href={`mailto:${address}`} {...props}>
    {children || address}
  </a>
)

export default MailTo
