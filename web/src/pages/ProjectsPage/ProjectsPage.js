import { styled } from 'linaria/react'

import { PageLayout } from '@layouts'
import { Project, Repeater } from '@components'

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 3vw;
`

const ProjectPage = () => (
  <PageLayout>
    <h1>Projects</h1>
    <p>selected work coming soon</p>
    <ProjectContainer>
      <Repeater quantity={25} Child={Project} />
    </ProjectContainer>
  </PageLayout>
)

export default ProjectPage
