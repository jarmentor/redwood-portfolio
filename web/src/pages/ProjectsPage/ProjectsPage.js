import PageLayout from '@layouts/PageLayout'
import Project from '@components/Project'
import { css } from 'linaria'

const projectContainerStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2em;
  grid-template-rows: auto;
`

const ProjectPage = () => {
  return (
    <PageLayout>
      <h1>Projects</h1>
      <p>selected work coming soon</p>
      <div className={projectContainerStyles}>
        <Project number="1" />
        <Project number="2" />
        <Project number="3" />
        <Project number="4" />
        <Project number="5" />
        <Project number="6" />
        <Project number="7" />
      </div>
    </PageLayout>
  )
}
export default ProjectPage
