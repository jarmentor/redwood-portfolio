import { Router, Route, Private } from '@redwoodjs/router'

const AdminRoutes = () => (
  <Private unauthenticated="home">
    <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />

    <Route
      path="/admin/posts/{id:Int}/edit"
      page={EditPostPage}
      name="editPost"
    />
    <Route path="/admin/posts/{id:Int}" page={PostPage} name="post" />
    <Route path="/admin/posts" page={PostsPage} name="posts" />
  </Private>
)

const Routes = () => (
  <Router>
    <Route path="/project" page={ProjectPage} name="project" />
    <Route path="/projects" page={ProjectsPage} name="projects" />
    <Route path="/about" page={AboutPage} name="about" />
    <Route path="/contact" page={ContactPage} name="contact" />
    <Route path="/typography" page={TypographyPage} name="typography" />
    <AdminRoutes />
    <Route path="/" page={HomePage} name="home" />
    <Route notfound page={NotFoundPage} />
  </Router>
)

export default Routes
