import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ThemeModule } from '@ribajs/nest-theme';

import { appConfig, theme, jwt } from './config/config';
import { PrismaService } from './prisma.service';
import { PatientService } from './api/patient/patient.service';
import { PatientController } from './api/patient/patient.controller';
import { TestService } from './api/test/test.service';
import { TestController } from './api/test/test.controller';
import { UserService } from './api/user/user.service';
import { UserController } from './api/user/user.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { LocalStrategy } from './auth/local.strategy';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    PassportModule,
    JwtModule.register(jwt),
    ThemeModule.forRoot(theme),
  ],
  controllers: [
    PatientController,
    TestController,
    UserController,
    AuthController,
  ],
  providers: [
    ConfigService,
    PrismaService,
    PatientService,
    TestService,
    UserService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AppModule {
  /**/
}
