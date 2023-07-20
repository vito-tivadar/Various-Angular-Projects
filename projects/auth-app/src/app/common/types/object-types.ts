export type loginObject = {
  email: any;
  password: any;
};

export type userTokenInfo = {
  id: number;
  username: any;
  isAdmin: boolean;
  expiresAt: number;
};
