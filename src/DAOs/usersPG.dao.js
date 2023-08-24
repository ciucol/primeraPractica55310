const Users = require('../models/user.model')

class UsersPGDao {
  async findAll() {
    return await 
  }

  async insertOne(newUserInfo) {
    const newUser = await 
    return newUser._id
  }
}

module.exports = UsersPGDao
