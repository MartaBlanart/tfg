// commentController.js
const Comment = require('../model/comment');
const User = require('../model/users');

async function addCommentToReview(req, res) {
    try {
    
        const username = req.body.username;

        const comment = new Comment({
            reviewId: req.params.reviewId,
            username: username,
            content: req.body.content,
        });

        const savedComment = await comment.save();

        res.status(201).json(savedComment);
    } catch (error) {
        console.error('Error adding comment to review:', error);
        res.status(500).send('Internal Server Error');
    }
}


async function getCommentsByReviewId(req, res) {
    try {
        const reviewId = req.params.reviewId;
        const comments = await Comment.find({ reviewId: reviewId });

        res.status(200).json(comments);
    } catch (error) {
        console.error('Error getting comments by reviewId:', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    addCommentToReview,
    getCommentsByReviewId,
};
