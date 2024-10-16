const express = require('express');
const dotenv = require('dotenv').config();

const humorRouter = require('./routes/humorRouter');
const sintomasRouter = require('./routes/sintomasRouter');
const ativ_fisicaRouter = require('./routes/ativ_fisicaRouter');
const tratamentoRouter = require('./routes/tratamentoRouter');
const sonoRouter = require('./routes/sonoRouter');

const cadastroRouter = require('./routes/cadastroRouter');
const loginRouter = require('./routes/loginRouter');

const postsRouter = require('./routes/postsRouter');
const commentRouter = require('./routes/commentsRouter');

const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());

app.use('/api', humorRouter);
app.use('/api', sintomasRouter);
app.use('/api', ativ_fisicaRouter);
app.use('/api', tratamentoRouter);
app.use('/api', sonoRouter);

app.use('/api', cadastroRouter)
app.use('/api', loginRouter);

app.use('/api', postsRouter);
app.use('/api', commentRouter);


module.exports = app;