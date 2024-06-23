import UsersService from './UsersService';

class AuthService {
  static async login(data: any) {
    const users = await UsersService.getUsers();
    if (users.length) {
      const user = users.find((us: any) => us.email == data.email);
      if (user) {
        console.log('user', user);
        if (user.password == data.password) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  static async register() {}

  static logout() {}
}

export default AuthService;
