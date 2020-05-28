import PageLayout from '@layouts/PageLayout'
import Project from '@components/Project'
import { styled } from 'linaria/react'

const ProjectArchive = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProjectPage = () => {
  return (
    <PageLayout>
      <h1>Projects</h1>
      <p>selected work coming soon</p>
      <ProjectArchive>
        <Project number="1" />
        <Project number="2" />
        <Project number="3" />
        <Project number="4" />
        <Project number="5" />
        <Project number="6" />
        <Project number="7" />
        <Project number="8" />
      </ProjectArchive>
    </PageLayout>
  )
}
export default ProjectPage
