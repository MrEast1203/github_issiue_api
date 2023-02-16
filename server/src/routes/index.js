import getAccessTokenRoute from "./getAccessTokenRoute";
import getUserRoute from "./getUserRoute";
import getIssueRoute from "./getIssueRoute";

//https://gist.github.com/Hiswe/fe83c97d1c7c8eee9557939d1b9bc086
const wrap =
  (fn) =>
  (...args) =>
    fn(...args).catch(args[2]);

function main(app) {
  app.get("/getAccessToken", wrap(getAccessTokenRoute.GetAccessToken));
  app.get("/getUserData", wrap(getUserRoute.GetUserData));
  app.get("/getIssue", wrap(getIssueRoute.GetIssue));
}
export default main;