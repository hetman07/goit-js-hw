'use strict';

//task-2
const users = [{
    name: 'Mango',
    active: true
  },
  {
    name: 'Poly',
    active: false
  },
  {
    name: 'Ajax',
    active: true
  },
  {
    name: 'Lux',
    active: false
  },
];

const toggleUserState = (allUsers, userName, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? {
          ...user,
          active: !user.active
        } : user,
      );
      resolve(updatedUsers);
    }, 2000);
  });


  //callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
//toggleUserState(users, 'Mango', logger);
//toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Ajax').then(logger);
toggleUserState(users, 'Lux').then(logger);