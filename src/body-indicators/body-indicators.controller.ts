import { Controller, Post, Body, Res, Req, Get } from '@nestjs/common';
import { BodyIndicatorsService } from './body-indicators.service';
import { Roles } from 'src/auth/roles-auth.decorator';
import { CreateBodyIndicatorDto } from './dto/create-body-indicator.dto';
import jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';

@Controller('body-indicators')
export class BodyIndicatorsController {
  constructor(
    private readonly bodyIndicatorsService: BodyIndicatorsService,
    private jwtService: JwtService,
  ) {}

  @Roles('ADMIN')
  @Post()
  create(@Body() bodyIndicatorDto: CreateBodyIndicatorDto, @Req() req) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    const decoded = this.jwtService.verify(token);
    const userId = decoded.roles[0].UserRoles.userId;
    return this.bodyIndicatorsService.create(bodyIndicatorDto, +userId);
  }

  @Roles('ADMIN')
  @Get()
  findAll( @Req() req) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    const decoded = this.jwtService.verify(token);
    const userId = decoded.roles[0].UserRoles.userId;
    return this.bodyIndicatorsService.findAll( +userId);
  }
}
