import './Project.css'
const Project = ({ number }) => {
  return (
    <div className="project">
      <img src="https://placehold.it/400x400" alt="project_placeholder" />
      <h2>Project Name {number}</h2>
      <p>
        Elit cupidatat quis occaecat deserunt elit cupidatat duis est
        reprehenderit non cupidatat. Duis anim ipsum quis eiusmod elit veniam.
        Magna esse exercitation magna eu amet in aute.
      </p>
      <input
        type="button"
        className="projectLink"
        onClick={() => alert('project clicked')}
        value="visit"
      />
    </div>
  )
}

export default Project
