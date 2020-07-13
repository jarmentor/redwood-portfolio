import { default as Headline } from './Headline'
import { default as MailTo } from './Mailto'
import { default as Paragraph } from './Paragraph'
import { default as Social } from './SocialLink'

function Typography() {}
Typography.Title = Headline
Typography.Headline = Headline
Typography.Link = { MailTo, Social }
Typography.Paragraph = Paragraph

export default Typography
