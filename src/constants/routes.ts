export enum SOURCE_ROUTES {
  HOME = "/",
  CART = "/cart",
}

export const PATHS = {
  home: SOURCE_ROUTES.HOME,
  category(categoryId: string) {
    return `${this.home}${categoryId}`;
  },
  item(categoryId: string, productId: string) {
    return `${this.home}${categoryId}/${productId}`;
  },
  cart: `${SOURCE_ROUTES.CART}`
};

export const ROUTES = [
  {
    title: "Trang chủ",
    href: PATHS.home,
  },
  {
    title: "Máy bay nông nghiệp",
    href: PATHS.category(":categoryId"),
  },
  {
    title: "Giỏ hàng",
    href: PATHS.cart,
  },
];
