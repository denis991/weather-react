require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const upload = require('./middlewares/middlewares');
const { user, post } = require('./db/models');
const Bcrypt = require('./utils/bcrypt');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));

const sessionConfig = {
  name: 'cook',
  secret: process.env.SECRET || 'thisisnotsecure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

// settimout for response
// app.use((req, res, next) => {
//   req.setTimeout(20000, () => {
//     // call back function is called when request timed out.
//   });
//   next();
// });

app.get('/auth', async (req, res) => {
  try {
    const result = await user.findByPk(req.session.userId);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('cook');
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.get('/post', async (req, res) => {
  const result = await post.findAll();
  res.json(result);
});

app.post('/post', async (req, res) => {
  const { title, body } = req.body;
  const { userId } = req.session;

  const result = await post.create({ title, body, user_id: userId });
  res.json(result);
});

app.delete('/post/:id', async (req, res) => {
  const { id } = req.params;

  await post.destroy({ where: { id } });
  res.sendStatus(200);
});

app.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const result = await user.create({ email, password: await Bcrypt.hash(password), name });
    if (result.id) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await user.findOne({ where: { email } });
    if (await Bcrypt.compare(password, result.password)) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
