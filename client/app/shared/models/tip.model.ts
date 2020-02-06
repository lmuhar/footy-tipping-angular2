export class Tip {
  _id?: string;
  ownerId?: string;
  roundId?: string;
  tips?: any[];
  year?: Number;
  user_data?: UserName;
  total?: Number;
}

export interface UserName {
  username: string;
}

export interface GetUserTips {
  userId: string;
  roundId: string;
}
