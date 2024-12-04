import express from 'express';
import globalErrorHandler from './middlewares/globalError.js';
import userRouter from './user/userRouter.js';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Application is working fine....' });
});

// -------------- All Routes should Start   here ------------

app.use('/api/users', userRouter);

// -------------- All Routes should End here ----------------


// Global Error Handler should be the last middleware
app.use(globalErrorHandler);

export default app;
