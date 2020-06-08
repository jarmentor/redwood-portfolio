import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  Label,
  FieldError,
  useMutation,
} from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactFormInput!) {
    createContactForm(input: $input) {
      id
    }
  }
`

const ContactForm = () => {
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
    <StyledContactForm
      validation={{ mode: 'onBlur' }}
      onSubmit={onSubmit}
      error={error}
      formMethods={formMethods}
    >
      <>
        <TextField
          className="input"
          name="name"
          validation={{ required: true }}
        />
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledErrorField name="name" />
      </>

      <>
        <TextField
          className="input"
          name="email"
          validation={{
            required: true,
            pattern: {
              value:
                "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
            },
            message: 'Please enter a valid e-mail address.',
          }}
        />
        <StyledLabel htmlFor="email">E-Mail</StyledLabel>
        <StyledErrorField name="email" />
      </>
      <>
        <TextAreaField
          style={{ resize: 'none' }}
          name="message"
          errorClassName="error"
          rows="5"
          cols="40"
          validation={{ required: true, message: 'please enter a message' }}
        />
        <StyledLabel htmlFor="message">Message</StyledLabel>
        <StyledErrorField name="message" />
      </>
      <StyledSubmit disabled={loading}>Submit</StyledSubmit>
    </StyledContactForm>
  )
}

const StyledContactForm = styled(Form)`
  display: flex;
  flex-direction: column;

  * {
    color: #22261f;
  }

  input,
  textarea {
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
    font-size: 1.125rem;
    max-width: 25em;
    padding: 0.625rem;
    transition: ease-in-out 150ms;
    will-change: box-shadow;
    :focus {
      outline: 0;
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
    }

    :focus + label {
      transform: translateX(-5rem) translateY(-2rem);
    }
  }
`
const StyledLabel = styled(Label)`
  margin-bottom: 4rem;
  margin-top: 0.5rem;
  transition: all cubic-bezier(0.23, 1, 0.32, 1) 200ms;
  user-select: none;
  z-index: -1;
`

const StyledErrorField = styled(FieldError)`
  border: var(--bittersweet);
  color: var(--bittersweet);
  font-size: 0.8rem;
  margin-top: 1rem;
`
const StyledSubmit = styled(Submit)`
  border-radius: 0.125em;
  border: 0;
  box-shadow: 0px;
  background-color: #fff;
  color: #22261f;
  letter-spacing: 0.125em;
  margin-top: 2em;
  max-width: 10em;
  padding: 1em 0.75em;
  text-transform: uppercase;
  border: 2px solid #22261f;
  transition: all cubic-bezier(0.23, 1, 0.32, 1) 300ms;

  :hover {
    background-color: #22261f;
    color: white;
  }
`

export default ContactForm
