import { Module, forwardRef } from '@nestjs/common';
import { BodyIndicatorsService } from './body-indicators.service';
import { BodyIndicatorsController } from './body-indicators.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.models';
import { Role } from 'src/roles/roles.models';
import { UserRoles } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { BodyIndicator } from './body-indicators.models';

@Module({
  controllers: [BodyIndicatorsController],
  providers: [BodyIndicatorsService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, BodyIndicator]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [BodyIndicatorsService],
})
export class BodyIndicatorsModule {}
