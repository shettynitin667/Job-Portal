import { combineReducers } from "redux";

const candidates = (state = [], action) => {
  if (action.type === "LOAD") {
    return [...action.payload];
  }
  return [...state];
};

const accepted = (state = [], action) => {
  if (action.type === "ACCEPT") {
    let newList = action.payload.state.filter(
      (e) => e.id === action.payload.userId
    )[0];
    for (let i = 0; i < state.length; i++) {
      if (state[i].id === newList.id) return [...state];
    }
    return [...state, newList];
  } else if (action.type === "REJECT") {
    let newList = state.filter((e) => e.id !== action.payload.userId);
    return [...newList];
  }
  return [...state];
};
const rejected = (state = [], action) => {
  if (action.type === "REJECT") {
    let newList = action.payload.state.filter(
      (e) => e.id === action.payload.userId
    )[0];
    for (let i = 0; i < state.length; i++) {
      if (state[i].id === newList.id) return [...state];
    }
    return [...state, newList];
  } else if (action.type === "ACCEPT") {
    let newList = state.filter((e) => e.id !== action.payload.userId);
    return [...newList];
  }
  return [...state];
};

export default combineReducers({
  candidates,
  accepted,
  rejected,
});
