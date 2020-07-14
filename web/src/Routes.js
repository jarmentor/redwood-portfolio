import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => (
  <Router>
    <Route path="/work" page={WorkPage} name="work" />
    <Private unauthenticated="home">
      <Route path="/admin" page={AdminDashboardPage} name="adminDashboard" />

      <Route path="/admin/posts/new" page={NewPostPage} name="adminNewPost" />

      <Route
        path="/admin/posts/{id:Int}/edit"
        page={EditPostPage}
        name="adminEditPost"
      />
      <Route path="/admin/posts/{id:Int}" page={PostPage} name="adminPost" />
      <Route path="/admin/posts" page={PostsPage} name="adminPosts" />
    </Private>
    <Route path="/post/{id:Int}" page={ViewPostPage} name="viewPost" />
    <Route path="/about" page={AboutPage} name="about" />
    <Route path="/contact" page={ContactPage} name="contact" />
    <Route path="/welcome" page={WelcomePage} name="welcome" />
    <Route path="/" page={HomePage} name="home" />
    <Route notfound page={NotFoundPage} />
  </Router>
)

export default Routes
