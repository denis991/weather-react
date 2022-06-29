const Bcrypt = require('../../utils/bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Mark',
        email: 'm@m.mm',
        password: await Bcrypt.hash('123'),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        name: 'Bob',
        email: 'b@b.bb',
        password: await Bcrypt.hash('123'),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        name: 'Will',
        email: 'w@w.ww',
        password: await Bcrypt.hash('123'),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  },
};
