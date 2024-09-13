export type TGame = {
  start_time: string;
  game_kind: {
    id: string;
    name: string;
  };
  id: string;
  address: string;
  cost: number;
  registration_records: {
    user_id: string;
    referrals_amount: number;
    nickname: string;
    telegram_id: number;
  }[];
  deletedAt: string | null;
};
