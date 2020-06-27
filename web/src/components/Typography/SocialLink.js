const linkProps = {
  rel: 'noopener noreferrer',
  target: '_blank',
}

const SocialLink = ({ name, url }) => (
  <a href={url} {...linkProps}>
    {name}
  </a>
)

export default SocialLink
