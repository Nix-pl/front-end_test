export class AuthService {

  userIsLogIn = false;
  userName = '';

  checkLogIn() {
    return new Promise((resolve, reject) => {
      resolve(this.userIsLogIn);
    });
  }

  logIn(userName: string) {
    this.userIsLogIn = true;
    this.userName = userName;
  }

  logOut() {
    this.userIsLogIn = false;
    this.userName = '';
  }

}
