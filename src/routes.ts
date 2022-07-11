import { Express, Request, Response} from 'express';

function routes (app: Express){
  app.get('/healthcheck', (req: Request, res: Response)=>res.sendStatus(200));

  //register 
  app.post('/api/users', validate())
}

// Register User 
  // POST /api/user

//Login
  // POST /api/session

// Get the user's sessions
// Get /api/sessions

//Login out 

// DELETE /api/sessions

//GET 


export default routes;