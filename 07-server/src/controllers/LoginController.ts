import { Request, Response } from 'express';
import { get, controller, use, bodyValidator, post } from './decorators';

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

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'password') {
      // mark this person as logged in
      req.session = { loggedIn: true };

      // redirect them to the root route
      res.redirect('/');
    } else {
      res.send('please provide email address');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
