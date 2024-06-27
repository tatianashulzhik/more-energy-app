import { IsEmail, Length } from 'class-validator';

export class ChangePasswordDto {
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly oldPassword: string;

  @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly newPassword: string;
}
