const { getAllPosts, getPost, addPost, updatePost, deletePost } = require("../DAL/postDAL")

const AllPosts = async () => {
    const Posts = await getAllPosts();
    return Posts;
}; 
const Post = async () => {
    const Post = await getPost()[0];
    return Post;
};

const insertPost = async (newPostAsObj) => {
    const newPost = await addPost(newPostAsObj);
    return newPost;
};

const chaingePost = async (id, obj) => {
    const chainge = await updatePost(id, obj);
    return chainge
} 

const removePost = async (id) => {
    const removedPost = await deletePost(id)
    return removedPost 
} 

module.exports = { AllPosts, Post, insertPost, chaingePost, removePost};