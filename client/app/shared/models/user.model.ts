export class User {
  _id?: string;
  username?: string;
  email?: string;
  role?: string;
  tip_data?: TipNumbers[];
  total: number;
}

export class TipNumbers {
  total: number;
  year: number;
}
