'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'products',
      [
        // {
        //   name: 'John Doe',
        //   isBetaMember: false,
        // },
        {
          name: 'Helpmeet',
          description: 'Helpmeet system for odimarket',
          code: 'ODI-HMT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id: 'a1af5523-9ed0-460f-a8d3-6d1b1b77447c',
          name: 'Odimarket',
          description: 'Main system for odimarket',
          code: 'ODI-MKT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
