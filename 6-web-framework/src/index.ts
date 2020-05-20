import { User } from './models/User';

// const user = User.buildUser({ id: 1 });
// user.on('change', () => console.log(user));
// user.fetch();

const user = User.buildUser({ name: 'User 2', age: 20 });
user.on('save', () => console.log(user));

user.save();
