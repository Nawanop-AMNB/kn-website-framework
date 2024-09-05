import express, { Request, Response } from 'express';
import next from 'next';
 
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
    const server = express();

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
  
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  });