import { v4 as uuidv4 } from 'uuid';

let users = [];

const findUser = (id) => {
  const user = users.find((user) => user.id === id);
  if (user != null) {
    return user;
  } else {
    return false;
  }
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added to the database.`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const user = findUser(id);
  if (user) {
    res.send(user);
  } else {
    res.send(`The user with id ${id} does not exist in the database.`);
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  if (findUser(id)) {
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
  } else {
    res.send(`The user with id ${id} does not exist in the database.`);
  }
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const user = findUser(id);
  if (user) {
    const { firstName, lastName, age } = req.body;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(`The user with id ${id} has been updated.`);
  } else {
    res.send(`The user with id ${id} does not exist in the database.`);
  }
};
