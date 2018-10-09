const createRoutes = require("next-routes");

const routes = createRoutes()
  .add("/", "index")
  .add("/story/:storyId", "story")
  .add("/user/:userId", "user")
  .add("/news/:page?", "news");

export default routes;

export const Link = routes.Link;
