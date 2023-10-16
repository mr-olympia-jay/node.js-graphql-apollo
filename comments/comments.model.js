const comments = [
  {
    id: 'comment1',
    text: 'It is a first comment text',
    likes: 1,
  },
  {
    id: 'comment2',
    text: 'It is a second comment text',
    likes: 9,
  },
];

function getAllComments() {
  return comments;
}

function getCommentsByLikes(minLikes) {
  return comments.filter((comment) => {
    return comment.likes >= minLikes;
  });
}

function addNewComment(id, text) {
  const newComment = {
    id,
    text,
    likes: 0,
  };
  comments.push(newComment);
  return newComment;
}

module.exports = { getAllComments, getCommentsByLikes, addNewComment };
