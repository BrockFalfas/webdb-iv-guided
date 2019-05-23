
exports.up = function(knex, Promise) {
  return knex.schema.createTable("tracks", table => {
    table.increments();
    table.string("name").notNullable().unique();
  }).createTable("cohorts", table => {
    table.string("name").notNullable().unique();
    table.integer("track_id")
    .unsigned()
    .references("id")
    .inTable("tracks")
    .onDelete("CASCADE")
    .onUpdate("CASCADE")
  }).createTable("students", table => {
    table.increments();
    table.string("name", 128).notNullable();
  }).createTable("cohorts_students", table => {
    table.increments();
    table.integer("cohort_id")
    .unsigned()
    .references("id")
    .inTable("cohorts")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
    table.integer("student_id")
    .unsigned()
    .references("id")
    .inTable("students")
    .onDelete("RESTRICT")
    .onUpdate("CASCADE")
    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExist("cohorts_students")
  .dropTableIfExist("students")
  .dropTableIfExist("cohorts")
  .dropTableIfExist("tracks")
};
