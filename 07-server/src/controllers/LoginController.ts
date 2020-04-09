import { Request, Response } from 'express';
import { get, controller } from './decorators';

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
