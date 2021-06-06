import { Model } from 'sequelize';

export interface ExampleAttributes {
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ExampleInstance extends Model<ExampleAttributes>, ExampleAttributes {}
