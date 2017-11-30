//publish the collections that we use
Meteor.publish("recipes", function() {
  //only publish recipes of the author who is logged in so that they can only see their own recipes
  return Recipes.find({author: this.userId})
});
