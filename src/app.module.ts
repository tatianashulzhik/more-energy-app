import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.models';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.models';
import { UserRoles } from './roles/user-roles.model';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { BodyIndicatorsModule } from './body-indicators/body-indicators.module';
import { BodyIndicator } from './body-indicators/body-indicators.models';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, BodyIndicator],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    BodyIndicatorsModule,
  ],
})
export class AppModule {}
