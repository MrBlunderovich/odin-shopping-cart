export type User = {
  user: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  cart: UserCartItem[];
};

export type Product = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
};

export type Credentials = {
  username: string;
  password: string;
};

/* export type CartItem = {
  id: string;
  quantity: number;
};
 */
type UserCartItem = Product & {
  quantity: number;
};
