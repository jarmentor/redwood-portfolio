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
      alert('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  return (
    <PageLayout
      header="Contact"
      subhead="Start a new project or just drop me a line!"
    >
      <Form
        className={contactFormStyles}
        validation={{ mode: 'onBlur' }}
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
      >
        <label
          className={labelStyles}
          htmlFor="name"
          errorClassName={errorStyles}
        >
          Name
        </label>
        <TextField
          className="input"
          name="name"
          errorClassName={errorStyles}
          validation={{ required: true }}
        />
        <FieldError name="name" className={errorStyles} />

        <label
          className={labelStyles}
          htmlFor="email"
          errorClassName={errorStyles}
        >
          E-Mail
        </label>
        <TextField
          className="input"
          name="email"
          errorClassName={errorStyles}
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
            },
            message: 'Please enter a valid e-mail address.',
          }}
        />
        <FieldError name="email" className={errorStyles} />

        <label
          className={labelStyles}
          htmlFor="message"
          errorClassName={errorStyles}
        >
          Message
        </label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true, message: 'please enter a message' }}
        />
        <FieldError name="message" className={errorStyles} />

        <Submit disabled={loading} className={submitStyles}>
          Submit
        </Submit>
      </Form>
    </PageLayout>
  )
}

const contactFormStyles = css`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    border-radius: 5px;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
    color: var(--midnight-green);
    font-size: 1.125rem;
    max-width: 25em;
    padding: 0.625rem;
    transition: ease-in-out 150ms;
    will-change: box-shadow;
    :focus {
      outline: 0;
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
    }
  }
`
const labelStyles = css`
  margin-top: 4rem;
  margin-bottom: 1rem;
  &:after {
    display: inline;
    content: ':';
  }
`

const errorStyles = css`
  border: var(--bittersweet);
  color: var(--bittersweet);
  font-size: 0.8rem;
  margin-top: 1rem;
`
const submitStyles = css`
  background: var(--black);
  border-radius: 0.125em;
  border: 0;
  box-shadow: 0px;
  color: var(--off-white);
  letter-spacing: 0.125em;
  margin-top: 2em;
  max-width: 10em;
  padding: 1em 0.75em;
  text-transform: uppercase;
`
export default ContactPage
