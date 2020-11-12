import { Response } from 'express';

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
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MoneyValueInterface {
  id: number;
  treasureId: number;
  amount: number;
  isCollected: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MigrationInterface {
  id: string;
  title: string;
  description: string;
  runCount?: number;
  lastRun?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}


export type ResponseType = Response | void;
