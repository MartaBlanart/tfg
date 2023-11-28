// commentController.js
const Comment = require('../model/comment');
const User = require('../model/users');

async function addCommentToReview(req, res) {
    try {
        
        console.log(req.params);
        const username = req.body.username;
        console.log(username + '-------------')
        // Crear el comentario
        const comment = new Comment({
            reviewId: req.params.reviewId,
            username: username,
            content: req.body.content,
        });

        // Guardar el comentario en la base de datos
        const savedComment = await comment.save();

        res.status(201).json(savedComment);
    } catch (error) {
        console.error('Error adding comment to review:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    addCommentToReview,
};
