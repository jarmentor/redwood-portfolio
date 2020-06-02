import { styled } from 'linaria/react'
import { Link, routes } from '@redwoodjs/router'

const ProjectContainer = styled.div`
  background: var(--white);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
  display: flex;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  position: relative;
  transition: 300ms ease-in-out;
  will-change: box-shadow;

  &:hover {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.16), 0 5px 5px rgba(0, 0, 0, 0.23);
  }

  img {
    max-width: 100%;
  }
  a {
    background-color: var(--midnight-green);
    border: 0;
    box-shadow: 0;
    color: var(--white);
    display: inline-block;
    font-weight: 700;
    padding: 1em 2em;
    text-decoration: none;
  }
`

const Project = ({ number }) => {
  return (
    <ProjectContainer>
      <img src="https://placehold.it/400x400" alt="project_placeholder" />
      <h2>Project Number {number}</h2>
      <p>
        Elit cupidatat quis occaecat deserunt elit cupidatat duis est
        reprehenderit non cupidatat. Duis anim ipsum quis eiusmod elit veniam.
        Magna esse exercitation magna eu amet in aute.
      </p>
      <Link to={routes.project({ id: number })}>View Project</Link>
    </ProjectContainer>
  )
}

export default Project
