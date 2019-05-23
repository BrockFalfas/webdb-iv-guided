
exports.seed = function(knex, Promise) {
      return knex('tracks').insert([
        { name: 'WEB'},
        { name: 'ANDROID'},
        { name: 'IOS'}
      ]);
};
