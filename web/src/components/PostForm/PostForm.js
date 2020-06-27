import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const PostForm = (props) => {
  const { currentUser } = useAuth()
  const [value, setValue] = useState(props.post?.body || '')

  const onSubmit = (data) => {
    data.author = currentUser.email
    data.body = value
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>
        <ReactQuill
          theme="snow"
          name="body"
          style={{ height: '30vh', paddingBottom: '2rem', background: 'white' }}
          value={value}
          onChange={setValue}
        />
        <FieldError name="body" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
