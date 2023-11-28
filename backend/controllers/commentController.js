// commentController.js
const Comment = require('../model/comment');
const User = require('../model/users');

async function addCommentToReview(req, res) {
    try {
        // Obtén el ID y el nombre de usuario del usuario autenticado
        const userId = req.userId; // Utiliza req.userId obtenido del middleware
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(401).send({
                message: 'Unauthenticated'
            });
        }

        const username = user.name;

        // Crear el comentario
        const comment = new Comment({
            reviewId: req.params.reviewId,
            userId: userId,
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
