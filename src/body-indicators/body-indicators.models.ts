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
  
  @Column({ type: DataType.STRING, allowNull: true })
  weight: string;

  @Column({ type: DataType.STRING, allowNull: true })
  bloodFatPercentage: string;

  @Column({ type: DataType.STRING, allowNull: true })
  visceralFat: string;

  @Column({ type: DataType.STRING, allowNull: true })
  skeletalMuscleMass: string;

  @Column({ type: DataType.STRING, allowNull: true })
  bloodPressure: string;

  @Column({ type: DataType.STRING, allowNull: true })
  heartRate: string;

  @Column({ type: DataType.STRING, allowNull: true })
  waistCircumference: string;

  @Column({ type: DataType.STRING, allowNull: true })
  hipCircumference: string;

  @Column({ type: DataType.STRING, allowNull: true })
  AGRatio: string;

  @Column({ type: DataType.STRING, allowNull: true })
  cholesterol: string;

  @Column({ type: DataType.STRING, allowNull: true })
  bloodSugarRatio: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
