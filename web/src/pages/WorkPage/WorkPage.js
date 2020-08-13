import { Link } from '@redwoodjs/router'

const WorkPage = () => {
  return (
    <>
      <h1>WorkPage</h1>
      <p>Find me in &quot;./web/src/pages/WorkPage/WorkPage.js&ldquo;</p>
      <p>
        My default route is named &quot;work&ldquo;, link to me with `
        <Link to="work">routes.work()</Link>`
      </p>
    </>
  )
}

export default WorkPage
