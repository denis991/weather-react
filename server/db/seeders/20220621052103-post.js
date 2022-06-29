const { LoremIpsum } = require('lorem-ipsum');

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

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
    const u1 = new Array(150).fill('').map(() => ({
      title: lorem.generateWords(Math.floor(Math.random() + 1 * 3)),
      body: lorem.generateSentences(Math.floor(Math.random() + 1 * 2)),
      user_id: 1,
      updatedAt: new Date(),
      createdAt: new Date(),
    }));
    const u2 = new Array(150).fill('').map(() => ({
      title: lorem.generateWords(Math.floor(Math.random() + 1 * 3)),
      body: lorem.generateSentences(Math.floor(Math.random() + 1 * 2)),
      user_id: 2,
      updatedAt: new Date(),
      createdAt: new Date(),
    }));
    const u3 = new Array(150).fill('').map(() => ({
      title: lorem.generateWords(Math.floor(Math.random() + 1 * 3)),
      body: lorem.generateSentences(Math.floor(Math.random() + 1 * 2)),
      user_id: 3,
      updatedAt: new Date(),
      createdAt: new Date(),
    }));

    await queryInterface.bulkInsert('posts', [...u1, ...u2, ...u3], {});
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
