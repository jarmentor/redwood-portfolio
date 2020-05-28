import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  useMutation,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import { css } from 'linaria'

import { PageLayout } from '@layouts'

const contactFormStyles = css`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
    max-width: 25em;
    font-size: 1.125rem;
    padding: 0.625rem;
    color: var(--midnight-green);
    transition: ease-in-out 150ms;
    will-change: box-shadow;
    border-radius: 5px;
    :focus {
      outline: 0;
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
    }
  }
  label {
    margin-top: 4rem;
    margin-bottom: 1rem;
    :after {
      display: inline;
      content: ':';
    }
  }

  .error {
    border: var(--bittersweet);
    color: var(--bittersweet);
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`
const submitStyles = css`
  background: var(--midnight-green);
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
