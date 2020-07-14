import { Link } from '@redwoodjs/router'

const WorkPage = () => {
  return (
    <>
      <h1>WorkPage</h1>
      <p>Find me in "./web/src/pages/WorkPage/WorkPage.js"</p>
      <p>
        My default route is named "work", link to me with `
        <Link to="work">routes.work()</Link>`
      </p>
    </>
  )
}

export default WorkPage
