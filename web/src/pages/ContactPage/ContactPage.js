import PageLayout from '@layouts/PageLayout'
import InputText from '@components/InputText'
const ContactPage = () => {
  return (
    <PageLayout>
      <h1>Contact</h1>
      <form action="/">
        <InputText name="first-name">First Name</InputText>
        <input
          type="submit"
          value="submit"
          onClick={() => {
            alert('blue')
          }}
        />
      </form>
      <p>Find me in ./web/src/pages/ContactPage/ContactPage.js</p>
    </PageLayout>
  )
}

export default ContactPage
