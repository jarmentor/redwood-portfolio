import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  useMutation,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import './ContactPage.css'
import PageLayout from '@layouts/PageLayout'

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
        className="contactForm"
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

        <Submit disabled={loading} className="submit">
          Submit
        </Submit>
      </Form>
      ƒ
    </PageLayout>
  )
}

export default ContactPage
