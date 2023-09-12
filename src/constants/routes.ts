export enum SOURCE_ROUTES {
  HOME = "",
}

export const PATHS = {
  home: SOURCE_ROUTES.HOME,
  category(categoryId: string) {
    return `${this.home}/${categoryId}`;
  },
  item(categoryId: string, productId: string) {
    return `${this.home}/${categoryId}/${productId}`;
  },
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
];
