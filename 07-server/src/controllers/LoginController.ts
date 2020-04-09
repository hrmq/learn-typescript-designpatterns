import { Router, Request, Response, NextFunction } from 'express';
import { get } from './decorators/routes';
import { controller } from './decorators/controller';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
          <form method="POST">
              <div>
                  <lable>Email</lablel>
                  <input name="email" />
              </div>
              <div>
                  <lable>Password</lablel>
                  <input name="password" />
              </div>
              <button>Submit</button>
          </form>
        `);
  }
}
