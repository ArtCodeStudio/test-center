import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { appConfig, theme } from './config/config';
import { ThemeModule } from '@ribajs/nest-theme';
import { PrismaService } from './prisma.service';
import { PatientService } from './api/patient/patient.service';
import { PatientController } from './api/patient/patient.controller';
import { TestService } from './api/test/test.service';
import { TestController } from './api/test/test.controller';
import { UserService } from './api/user/user.service';
import { UserController } from './api/user/user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    ThemeModule.forRoot(theme),
  ],
  controllers: [PatientController, TestController, UserController],
  providers: [ConfigService, PrismaService, PatientService, TestService, UserService],
})
export class AppModule {
  /**/
}
