const db = require("../dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}

function find() {
  return db("tracks")
}

function findById(id) {
  return db("tracks").where({ id }).first()
}

function add(track) {
  return db("tracks").insert(track)
}

function update(id, changes) {
  return db("tracks").where({ id }).update(changes)
}

function remove(id) {
  return db("tracks").where({ id }).del()
}