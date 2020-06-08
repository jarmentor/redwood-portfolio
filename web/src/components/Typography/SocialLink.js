const SocialLink = ({ service, url }) => (
  <a rel="noopener noreferrer" target="_blank" href={url}>
    {service}
  </a>
)

export default SocialLink
