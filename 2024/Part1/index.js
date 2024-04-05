import express from 'express';
import { getTime } from './middleware/logger.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(getTime);

let students = [
    {
      "id": 0,
      "name": "xyz",
      "scholarID": 213,
    },
    {
      "id": 1,
      "name": "abc",
      "scholarID": 214,
    },
    {
      "id": 2,
      "name": "def",
      "scholarID": 215,
    },
    {
      "id": 3,
      "name": "ghi",
      "scholarID": 216,
    },
    {
      "id": 4,
      "name": "jkl",
      "scholarID": 217,
    },
    {
      "id": 5,
      "name": "mno",
      "scholarID": 218,
    }
  ];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/time', (req, res) => {
    res.send(`The time is ${req.requestedTime}`);
});

app.post('/register', (req, res) => {
    const { name, scholarID } = req.body;
    const todo = { id: students.length, name, scholarID};
    students.push(todo);
    res.json(todo);
});

app.get('/register', (req, res) => {
    res.json(students);
});

app.listen(PORT, () => console.log('Testing on port ' + PORT));
