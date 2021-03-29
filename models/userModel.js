'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_user');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getUser = async (id) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_user WHERE user_id = ?', [id]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const addUser = async (body) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('INSERT INTO wop_user (name, email, password) VALUES ?', [body.name, body.email, body.passwd]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '1234',
  },
  {
    id: '2',
    name: 'Jane Doez',
    email: 'jane@metropolia.fi',
    password: 'qwer',
  },
];

module.exports = {
  users,
  getAllUsers,
  getUser,
  addUser
};
