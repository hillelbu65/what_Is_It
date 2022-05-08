const { getAllComments, getComment, addComment, updateComment, deleteComment } = require("../DAL/commentDAL")

const AllComments = async () => {
    const comments = await getAllComments();
    return comments;
}; 
const Comment = async () => {
    const comment = await getComment()[0];
    return comment;
};

const insertComment = async (newCommentAsObj) => {
    const newComment = await addComment(newCommentAsObj);
    return newComment;
};

const chaingeComment = async (id, obj) => {
    const chainge = await updateComment(id, obj);
    return chainge
} 

const removeConmment = async (id) => {
    const removedComment = await deleteComment(id) 
} 

module.exports = {AllComments, Comment, insertComment, chaingeComment, removeConmment};