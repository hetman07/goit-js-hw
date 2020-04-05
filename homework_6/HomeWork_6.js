'use strict';
import users from "./users.js";
//========================task-01======================
const getUserNames2 = users => users.map(user => user.name);

console.log('2', getUserNames2(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//========================task-02======================
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//========================task-03======================
const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender);

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//========================task-04======================
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//========================task-05======================
const getUserWithEmail = (users, email) =>
  users.find(userEmail => userEmail.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//========================task-06======================
const getUsersWithAge = (users, min, max) => {
  return users.filter(age => {
    return (age.age > min && age.age < max);
  });
};

console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//========================task-07======================
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

//========================task-08======================
const getUsersWithFriend = (users, friendName) => {
  return users.reduce((acc, name) => {
    if (name.friends.includes(friendName) === true) {
      acc.push(name.name);
    }
    return acc;
  }, []);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//========================task-09======================
const getNamesSortedByFriendsCount = users => {
  return [...users] //делаю копию массива так как сорт мутирует исх массив
    .sort((prev, next) => {
      return prev.friends.length - next.friends.length;
    })
    .map(user => user.name);
}
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//========================task-10======================
const getSortedUniqueSkills = users => {
  const arraySkills = users.reduce((acc, skill) => {
    acc.push(...skill.skills);
    return acc;
  }, []);
  const result = [...new Set(arraySkills)].sort();
  return result;
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]