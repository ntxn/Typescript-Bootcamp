import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 20 });
const root1 = document.getElementById('root1');
if (root1) {
  const userEdit = new UserEdit(root1, user);
  userEdit.render();
} else {
  throw new Error('Root element not found');
}

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root2 = document.getElementById('root2');
  if (root2) {
    new UserList(root2, users).render();
  }
});

users.fetch();
