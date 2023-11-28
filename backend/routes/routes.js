const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../model/users');
const Comment = require('../model/comment');
const jwt = require('jsonwebtoken');
const commentController = require('../controllers/commentController');
const cors = require('cors');

// Configuración básica de CORS
const corsOptions = {
    origin: 'http://localhost:4200', // Reemplaza con tu URL de cliente
    credentials: true,
};
router.use(cors(corsOptions));

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send({
                message: 'User not found'
            });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            return res.status(400).send({
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign({ _id: user._id }, "secret");

        // Configuración de la cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === 'production' ? true : false,
            sameSite: 'Lax', // Necesario si se envía la cookie entre dominios
        });

        res.send({ message: 'success', token: token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/user', async (req, res) => {
    try {
        const cookie = req.headers.authorization;
        if (!cookie) {
            return res.status(401).send({
                message: 'unauthentication cookie'
            });
        }

        const claims = jwt.verify(cookie, 'secret');

        if (!claims || !claims._id) {
            return res.status(401).send({
                message: 'unauthentication claims'
            });
        }

        const user = await User.findOne({ _id: claims._id });

        if (!user) {
            return res.status(401).send({
                message: 'unauthentication'
            });
        }

        const { password, ...data } = await user.toJSON();

        res.send({user: user});
    } catch (e) {
        return res.status(401).send({
            message: 'unauthentication'
        });
    }
});

router.post('/logout', (req, res) => {
    // Limpiar la cookie al hacer logout
    res.cookie('jwt', '', { maxAge: 0, sameSite: 'Lax' });

    res.send({
        message: 'success'
    });
});

router.options('/register', cors());

router.post('/reviews/:reviewId/comments', commentController.addCommentToReview);
router.get('/reviews/:reviewId/comments', commentController.getCommentsByReviewId);

module.exports = router;
