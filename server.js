const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// CREATE user
app.post('/users', (req, res) => {
    const user = {
        id: Date.now(),
        ...req.body
    };
    users.push(user);
    res.status(201).json(user);
});

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// UPDATE user
app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    users = users.map(user =>
        user.id === id ? { ...user, ...req.body } : user
    );

    res.json({ message: 'updated from test branch' });
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    users = users.filter(user => user.id !== id);

    res.json({ message: 'User deleted' });
});

// START server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});