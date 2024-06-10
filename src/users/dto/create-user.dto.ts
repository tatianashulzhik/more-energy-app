import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Эл. почта' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  readonly password: string;
}
