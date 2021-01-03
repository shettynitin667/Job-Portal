export const toAccept = (state, userId) => {
  return {
    type: "ACCEPT",
    payload: {
      state,
      userId,
    },
  };
};

export const toReject = (state, userId) => {
  return {
    type: "REJECT",
    payload: {
      state,
      userId,
    },
  };
};

export const loadUsers = (data) => {
  return {
    type: "LOAD",
    payload: data,
  };
};
