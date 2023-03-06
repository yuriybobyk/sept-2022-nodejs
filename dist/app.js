"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const users = [
    {
        name: 'Oleh',
        age: 19,
        gender: 'male'
    },
    {
        name: 'Anton',
        age: 22,
        gender: 'female'
    },
    {
        name: 'Anya',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Ielizavetta',
        age: 35,
        gender: 'female'
    },
    {
        name: 'Cocos',
        age: 70,
        gender: 'mixed'
    }
];
app.get('/users', (req, res) => {
    res.json(users);
});
app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const user = users[+userId];
    res.json(user);
});
app.post('/users', (req, res) => {
    const body = req.body;
    users.push(body);
    res.status(201).json({
        message: 'User created!'
    });
});
app.put('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const updatedUser = req.body;
    users[+userId] = updatedUser;
    res.status(200).json({
        message: 'User updated',
        data: users[+userId]
    });
});
app.delete('/users/:userId', (req, res) => {
    const { userId } = req.params;
    users.splice(+userId, 1);
    res.status(200).json({
        message: 'User deleted',
    });
});
app.get('/welcome', (req, res) => {
    res.send('WELCOME');
});
const PORT = 5100;
app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});
