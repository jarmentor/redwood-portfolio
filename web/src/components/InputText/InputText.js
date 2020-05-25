const InputText = ({ name, id = '', children, ...props }) => {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input type="text" name={name} id={id} {...props} />
    </>
  )
}

export default InputText
