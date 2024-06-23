import ApiDataSource from '../data-sources/api-data-source';

class UsersService {
  static async getUsers() {
    return await ApiDataSource.get('data/users.json');
  }

  static getUserById(id: string) {}

  static createUser(data: string) {}

  static deleteUserById(id: string) {}

  static updateUserById(id: string) {}
}

export default UsersService;
