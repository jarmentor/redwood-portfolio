import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  useMutation,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import PageLayout from '@layouts/PageLayout'
import { css } from 'linaria'

const contactFormStyles = css`
  & {
    display: flex;
    flex-direction: column;
  }
  & input,
  & textarea {
    border: 1px solid #c4c4c4;
    max-width: 25em;
    padding: 0.625em;
    transition: ease-in-out 150ms;
    will-change: border-color border-width;
  }
  & input:focus,
  & textarea:focus {
    border-bottom-width: 3px;
    outline: 0;
    border-bottom-color: var(--medium-turquoise);
  }

  & label {
    margin-top: 4em;
    margin-bottom: 1em;
  }

  & label:after {
    display: inline;
    content: ':';
  }

  & span.error {
    border: var(--bittersweet);
    color: var(--bittersweet);
    font-size: 0.8em;
    margin-top: 1em;
  }
`
const submitStyles = css`
  background: var(--medium-turquoise);
  border-radius: 0.125em;
  border: 0;
  box-shadow: 0px;
  color: white;
  letter-spacing: 0.125em;
  margin-top: 2em;
  max-width: 10em;
  padding: 1em 0.75em;
  text-transform: uppercase;
`
const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactFormInput!) {
    createContactForm(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      // TODO: Change success options.
      alert('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  return (
    <PageLayout>
      <h1>Contact</h1>
      <h2 className="subhead">Start a new project or just drop me a line!</h2>
      <Form
        className={contactFormStyles}
        validation={{ mode: 'onBlur' }}
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
      >
        <label htmlFor="name" errorClassName="error">
          Name
        </label>
        <TextField
          className="input"
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error" />

        <label htmlFor="email" errorClassName="error">
          E-Mail
        </label>
        <TextField
          className="input"
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
            },
            message: 'Please enter a valid e-mail address.',
          }}
        />
        <FieldError name="email" className="error" />

        <label htmlFor="message" errorClassName="error">
          Message
        </label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true, message: 'please enter a message' }}
        />
        <FieldError name="message" className="error" />

        <Submit disabled={loading} className={submitStyles}>
          Submit
        </Submit>
      </Form>
    </PageLayout>
  )
}

export default ContactPage
