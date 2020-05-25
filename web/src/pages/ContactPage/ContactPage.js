import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/web'
import './ContactPage.css'
import PageLayout from '@layouts/PageLayout'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <PageLayout>
      <h1>Contact</h1>
      <h2 className="subhead">
        Proident eiusmod exercitation esse irure Lorem.
      </h2>
      <Form
        className="contactForm"
        validation={{ mode: 'onBlur' }}
        onSubmit={onSubmit}
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

        <Submit className="submit">Submit</Submit>
      </Form>
    </PageLayout>
  )
}

export default ContactPage
