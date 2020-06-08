import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => (
  <Router>
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
    <Route path="/about" page={AboutPage} name="about" />
    <Route path="/contact" page={ContactPage} name="contact" />
    <Route path="/welcome" page={WelcomePage} name="welcome" />
    <Route path="/" page={HomePage} name="home" />
    <Route notfound page={NotFoundPage} />
  </Router>
)

export default Routes
