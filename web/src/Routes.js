import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => (
  <Router>
    <Route path="/project" page={ProjectPage} name="project" />
    <Route path="/projects" page={ProjectsPage} name="projects" />
    <Route path="/about" page={AboutPage} name="about" />
    <Route path="/contact" page={ContactPage} name="contact" />
    <Private unauthenticated="home">
      <Route path="/typography" page={TypographyPage} name="typography" />
    </Private>
    <Route path="/" page={HomePage} name="home" />
    <Route notfound page={NotFoundPage} />
  </Router>
)

export default Routes
