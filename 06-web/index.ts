import { UserForm } from './Views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Name', age: 20 });
const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();
