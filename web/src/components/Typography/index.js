import Headline from './Headline'
import MailTo from './MailTo'
import Paragraph from './Paragraph'
import Social from './SocialLink'

function Typography() {}

Typography.Headline = Headline
Typography.Title = Typography.Headline
Typography.Paragraph = Paragraph
Typography.Link = { Social, MailTo }

export default Typography
