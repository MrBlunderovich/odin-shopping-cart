export type User = {
  user: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  cart: CartItem[];
};

export type Product = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};

export type Credentials = {
  username: string;
  password: string;
};

export type CartItem = {
  id: string;
  quantity: number;
};
