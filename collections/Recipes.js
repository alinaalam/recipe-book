import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection("recipes");

Recipes.allow({
  //rules for who is allowed to insert the recipes
  insert: function(userId, doc) {
    return !!userId; //only allowed to insert if this comes true and this comes true only if user id exists
  }
});

const Ingredient = new SimpleSchema({
  name: {
    type: String
  },
  amount: {
    type: String
  }
});

const RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  ingredients: {
    type: Array,
  },
  'ingredients.$': {
    type: Ingredient
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Date",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

Recipes.attachSchema(RecipeSchema);
