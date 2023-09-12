import { BranchType } from "services/main/models";

export const branchInitialState = {
  branches: [],
};

export type branchStateType = typeof branchInitialState;
export type branchActionType = {
  type: string;
  payload: BranchType[];
};

export const branchReducer: React.Reducer<branchStateType, branchActionType> = (
  state: branchStateType,
  action: branchActionType
) => {
  switch (action.type) {
    case "SET_BRANCHES":
      return {
        ...state,
        branches: action.payload,
      };

    default: {
    }
  }
};
