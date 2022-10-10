module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'signatures',
      [
        {
          user_id: 1,
          product_id: 4,
          img_url: 'https://i.imgur.com/1ZQZQ0x.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          product_id: 3,
          img_url: 'https://i.imgur.com/1ZQZQ0x.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          product_id: 1,
          img_url: 'https://i.imgur.com/1ZQZQ0x.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('signatures', null, {})
  },
}
