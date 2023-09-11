export enum SOURCE_ROUTES {
  HOME = "",
}

export const PATHS = {
  home: SOURCE_ROUTES.HOME,
  category(id: string) {
    return `${this.home}/${id}`;
  },
  item(categoryId: string, productId: string) {
    return `${this.home}/${categoryId}/${productId}`;
  },
};
