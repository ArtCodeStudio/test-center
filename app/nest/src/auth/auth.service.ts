import { Injectable } from '@nestjs/common';
import { UserService } from '../api/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private user: UserService, private jwt: JwtService) {
    /**/
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.user.get({ email: email });
    // TODO hash password: https://github.com/kelektiv/node.bcrypt.js
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
