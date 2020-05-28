import { css } from 'linaria'
import { styled } from 'linaria/react'
import { Link, routes } from '@redwoodjs/router'

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  padding: 2em 4em;
`
const ProjectImage = styled.img`
  width: 400px;
  height: 400px;
`

const ProjectLink = css`
  background-color: var(--bittersweet);
  border: 0;
  box-shadow: 0;
  color: var(--white);
  display: inline-block;
  font-weight: 700;
  padding: 1em 2em;
  text-decoration: none;
`

const Project = ({ number }) => {
  return (
    <ProjectContainer>
      <ProjectImage
        src="https://placehold.it/400x400"
        alt="project_placeholder"
      />
      <h2>Project Number {number}</h2>
      <p>
        Elit cupidatat quis occaecat deserunt elit cupidatat duis est
        reprehenderit non cupidatat. Duis anim ipsum quis eiusmod elit veniam.
        Magna esse exercitation magna eu amet in aute.
      </p>
      <Link className={ProjectLink} to={routes.project({ id: number })}>
        View Project
      </Link>
    </ProjectContainer>
  )
}

export default Project
