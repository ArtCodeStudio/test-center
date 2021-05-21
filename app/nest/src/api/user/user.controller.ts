import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  User as UserModel,
} from '@test-center/prisma';

@Controller()
export class UserController {
  constructor(
    private readonly user: UserService,
  ) {
    /**/
  }


  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string; password: string; },
  ): Promise<UserModel> {
    return this.user.create(userData);
  }

}
