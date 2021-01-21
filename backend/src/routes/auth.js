const express = requrie('express');
const router = express.Router();
const { default: UserEdit } = require('../../../frontend/src/components/Users/UserEdit');
const auth = require('../controllers/authController');

router.get('/', auth, async (req, res) => {
    try {
        const user = await UserEdit.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})