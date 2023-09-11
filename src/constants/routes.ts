import * as Icons from "assets/icons";

export enum SOURCE_ROUTES {
  HOME = "",
}

export const PATHS = {
  home: SOURCE_ROUTES.HOME,
  category(id: string) {
    return `${this.home}/${id}`;
  }
};