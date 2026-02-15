# Deploy and Host Node.js on Railway

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/YDRT1o?referralCode=CREDITS&utm_medium=integration&utm_source=template&utm_campaign=generic)

Node.js is a JavaScript runtime built on Chrome's V8 engine that enables developers to build scalable server-side applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient for real-time applications and APIs. This template uses TypeScript for enhanced type safety and developer experience.

## About Hosting Node.js

Hosting Node.js applications requires a platform that supports JavaScript runtime environments and can handle asynchronous operations efficiently. Your Node.js server needs to listen on a dynamically assigned port, manage dependencies through npm or yarn, and have access to environment variables for configuration. The hosting platform should provide automatic restarts on crashes, log streaming for debugging, and the ability to scale based on traffic demands. Modern hosting solutions detect Node.js projects automatically by reading the `package.json` file and execute the appropriate start command.

## Common Use Cases

- RESTful APIs and microservices for web and mobile applications
- Real-time applications like chat servers, collaboration tools, and live dashboards
- Backend services for static site generators and serverless functions

## Getting Started

### Setup

1. Clone this repository or use the Railway deploy button above
2. Install dependencies:
```bash
npm install
```
3. Build the TypeScript code:
```bash
npm run build
```

### Running Locally

**Development mode** (with hot-reload using tsx):
```bash
npm run dev
```

**Production mode** (requires build first):
```bash
npm run build
npm start
```

The server will start on `http://localhost:3000` (or the port specified in the `PORT` environment variable).

### Testing the API

Once running, test the endpoints:
```bash
# Root endpoint
curl http://localhost:3000/

# Health check
curl http://localhost:3000/health
```

## Dependencies for Node.js Hosting

- Node.js runtime (v18 or higher recommended)
- TypeScript (for development)
- npm or yarn package manager

### Deployment Dependencies

- [Express.js v5](https://expressjs.com/) - Fast, unopinionated web framework
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [tsx](https://github.com/privatenumber/tsx) - TypeScript execution and REPL for Node.js
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)

### Implementation Details

This template includes a minimal Express.js v5 server written in TypeScript with JSON parsing middleware and two endpoints:

```typescript
// Root endpoint with timestamp
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'Welcome to Node.js API',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});
```

The server reads the `PORT` environment variable (automatically set by Railway) and includes development mode with hot-reload using `tsx`. TypeScript files are compiled to the `dist/` directory for production deployment.

## Why Deploy Node.js on Railway?

Railway is a singular platform to deploy your infrastructure stack. Railway will host your infrastructure so you don't have to deal with configuration, while allowing you to vertically and horizontally scale it.

By deploying Node.js on Railway, you are one step closer to supporting a complete full-stack application with minimal burden. Host your servers, databases, AI agents, and more on Railway.
