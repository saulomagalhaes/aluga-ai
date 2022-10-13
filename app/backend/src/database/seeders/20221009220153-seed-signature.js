module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'signatures',
      [
        {
          user_id: 1,
          product_id: 4,
          img_url: 'http://localhost:3001/images/arquivo_1665431393295.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          product_id: 3,
          img_url: 'http://localhost:3001/images/arquivo_1665431389248.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          product_id: 1,
          img_url: 'http://localhost:3001/images/arquivo_1665431374708.png',
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
