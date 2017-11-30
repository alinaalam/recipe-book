FlowRouter.route("/", {
  name: "home",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("HomeLayout");
  }
});

FlowRouter.route("/recipe-book", {
  name: "recipe-book",
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("MainLayout", {main: "Recipes"});
  }
});

var userRoutes = FlowRouter.group({
  prefix: "/user",
  name: "homepage",
  // calls just before the action
  triggersEnter: [function(context, redirect) {
    //check whether the user is logged in or not
    //check whether the user has the token or not and whether they are allowed to access this page
    // console.log(this.userId);
    // if(!this.userId) {
    //   redirect('/login');
    // }
  }]
});

userRoutes.route('/recipe-book', {
  action() {
    GAnalytics.pageview();
    BlazeLayout.render("MainLayout", {main: "Recipes"});
  }
});
