import { Response } from 'express';
import exp from 'constants';

export interface UserInterface {
  id?: number;
  name: string;
  email: string;
  age: number;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TreasureInterface {
  id?: number;
  latitude: number;
  longitude: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MoneyValueInterface {
  id?: number;
  treasureId?: number;
  amount: number;
  isCollected: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  treasure_id?: number;
}

export interface MigrationInterface {
  id?: number;
  uuid?: string;
  title: string;
  description: string;
  runCount?: number;
  lastRun?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TreasureMoneyValueInterface
  extends TreasureInterface,
    MoneyValueInterface {}

export type ResponseType = Response | void;
