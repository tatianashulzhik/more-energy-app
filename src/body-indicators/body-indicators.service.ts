import { Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BodyIndicator } from './body-indicators.models';
import { CreateBodyIndicatorDto } from './dto/create-body-indicator.dto';
import { calculatePercentageOfNorm, norms } from './calculatePercentageOfNorm';

@Injectable()
export class BodyIndicatorsService {
  constructor(
    @InjectModel(BodyIndicator)
    private bodyIndicatorRepository: typeof BodyIndicator,
  ) {}

  async create(bodyIndicatorDto: CreateBodyIndicatorDto, userId: number) {
    const bodyIndicator = bodyIndicatorDto;
    bodyIndicatorDto.userId = userId;
    await this.bodyIndicatorRepository.create(bodyIndicatorDto);
    const calculate = calculatePercentageOfNorm(bodyIndicator, norms);

    return JSON.stringify(calculate);
  }

  async findAll(userId: number) {
    const bodyIndicator = BodyIndicator.findAll({ where: { userId } });
    return bodyIndicator;
  }
}
