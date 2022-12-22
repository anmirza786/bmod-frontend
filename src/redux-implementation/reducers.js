import * as actions from "./actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  error: null,
  user: null,
  loading: false,
  group: {},
  groupsList: [],
  account: {},
  accountsList: [],
  wheatPurchase: {},
  wheatSale: {},
  cottonPurchase: {},
  cottonSale: {},
  product: {},
  generalVoucher: {},
  balanceSheet: [],
  ideas: [],
  idea: {},
};

export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.AUTHENTICATED_START:
      return {
        error: null,
        loading: true,
      };

    case actions.GET_IDEA_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        ideas: null,
      };

    case actions.GET_IDEA_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        ideas: payload.data,
      };

    case actions.ADDED_IDEA_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case actions.ADDED_IDEA_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };

    case actions.GET_SINGLE_IDEA_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        idea: null,
      };

    case actions.GET_SINGLE_IDEA_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        idea: payload,
      };
    case actions.EDITED_PROFILE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case actions.EDITED_IDEA_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };

    case actions.DELETE_IDEA_SUCCESS:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case actions.DELETE_IDEA_FAIL:
      return {
        ...state,
        error: null,
        loading: false,
        idea: payload,
      };

    case actions.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case actions.AUTHENTICATED_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.error,
      };
    case actions.LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      // localStorage.setItem("refresh", payload.refresh_token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
        user: payload.user,
        token: payload.token,
        // refresh: payload.refresh,
      };
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case actions.USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case actions.USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };
    case actions.SIGNUP_FAIL:
    case actions.LOGIN_FAIL:
    case actions.LOGOUT:
      return {
        ...state,
        loading: false,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.error,
      };

    default:
      return state;
  }
}
