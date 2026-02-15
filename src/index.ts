import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Welcome to Node.js API',
        status: 'running',
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
