import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'New Name' });
user.set({ age: 21 });

user.save();
