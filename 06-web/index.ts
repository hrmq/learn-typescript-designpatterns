import { User } from './models/User';

const user = new User({ id: 1, name: 'new 2' });

user.on('change', () => {
  console.log('User was changed');
});

user.set({ age: 12 });
