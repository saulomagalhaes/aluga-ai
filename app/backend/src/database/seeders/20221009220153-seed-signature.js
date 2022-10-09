module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'signatures',
      [
        {
          user_id: 1,
          product_id: 4,
        },
        {
          user_id: 2,
          product_id: 3,
        },
        {
          user_id: 3,
          product_id: 1,
        },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('signatures', null, {})
  },
}
