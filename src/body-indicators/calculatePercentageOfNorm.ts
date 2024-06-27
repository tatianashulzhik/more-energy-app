export interface HealthIndicators {
  weight?: number;
  bloodFatPercentage?: number;
  visceralFat?: number;
  skeletalMuscleMass?: number;
  bloodPressure?: number;
  heartRate?: number;
  waistCircumference?: number;
  hipCircumference?: number;
  AGRatio?: number;
  cholesterol?: number;
  bloodSugarRatio?: number;
  userId?: number;
}

export const norms: HealthIndicators = {
  weight: 175,
  bloodFatPercentage: 25,
  visceralFat: 3,
  skeletalMuscleMass: 45,
  bloodPressure: 120 / 80,
  heartRate: 70,
  waistCircumference: 80,
  hipCircumference: 80,
  AGRatio: 1.5,
  cholesterol: 5.0,
  bloodSugarRatio: 5.0,
};

export function calculatePercentageOfNorm(
  userInput: HealthIndicators,
  norms: HealthIndicators,
): HealthIndicators {
  const percentages: HealthIndicators = {};
  for (const key in norms) {
    if (norms[key] && userInput[key]) {
      percentages[key] = (userInput[key] / norms[key]) * 100;
    }
  }
  return percentages;
}
