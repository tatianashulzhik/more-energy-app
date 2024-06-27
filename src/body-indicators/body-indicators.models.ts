import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.models';
@Table({ tableName: 'body-indicators' })
export class BodyIndicator extends Model<BodyIndicator> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  weight: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  bloodFatPercentage: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  visceralFat: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  skeletalMuscleMass: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  bloodPressure: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  heartRate: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  waistCircumference: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  hipCircumference: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  AGRatio: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  cholesterol: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  bloodSugarRatio: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
