const SocialLogo = ({ url, Logo, ...props }) => (
  <a rel="noopener noreferrer" target="_blank" href={url}>
    <Logo {...props} />
  </a>
)

export default SocialLogo
