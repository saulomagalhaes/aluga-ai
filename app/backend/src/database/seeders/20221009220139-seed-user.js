module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Saulo Alves',
          email: 'saulo@hotmail.com',
          password: '123456789',
        },
        {
          name: 'Iran Ferreira',
          email: 'iran@hotmail.com',
          password: '123456789',
        },
        {
          name: 'Silvio Santos',
          email: 'silvio@hotmail.com',
          password: '123456789',
        },
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {})
  },
}
