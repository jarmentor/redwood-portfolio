import { css } from 'linaria'

const projectStyles = css`
  padding: 2em 4em;
  max-width: 30em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
`

const projectLinkStyles = css`
  box-shadow: 0;
  border: 0;
  padding: 1em 2em;
  display: inline-block;
  background-color: var(--bittersweet);
  font-weight: 700;
  color: var(--white);
`

const Project = ({ number }) => {
  return (
    <div className={projectStyles}>
      <img src="https://placehold.it/400x400" alt="project_placeholder" />
      <h2>Project Name {number}</h2>
      <p>
        Elit cupidatat quis occaecat deserunt elit cupidatat duis est
        reprehenderit non cupidatat. Duis anim ipsum quis eiusmod elit veniam.
        Magna esse exercitation magna eu amet in aute.
      </p>
      <input
        type="button"
        className={projectLinkStyles}
        onClick={() => alert('project clicked')}
        value="visit"
      />
    </div>
  )
}

export default Project
