const postModel = require('./posts.model');

module.exports = {
  Query: {
    posts: () => {
      return postModel.getAllPosts();
    },
    post: (parent, args) => {
      return postModel.getPostById(args.id);
    },
  },
  Mutation: {
    addNewPost: (parent, args) => {
      return postModel.addNewPost(args.id, args.title, args.description);
    },
  },
};
