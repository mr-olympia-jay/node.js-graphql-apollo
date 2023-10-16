const commentModel = require('./comments.model');

module.exports = {
  Query: {
    comments: () => {
      return commentModel.getAllComments();
    },
    commentsByLikes: (parents, args) => {
      return commentModel.getCommentsByLikes(args.minLikes);
    },
  },
  Mutation: {
    addNewComment: (parents, args) => {
      return commentModel.addNewComment(args.id, args.text);
    },
  },
};
