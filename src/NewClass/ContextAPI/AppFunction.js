export const AppFunction = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };

    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case "EDIT_USER":
      const editing = action.payload;
      const editingUser = state.users.map((user) => {
        if (user.id === editing.id) {
          return editing;
        } else {
          return user;
        }
      });
      return {
        users: editingUser,
      };

    default:
      return state;
  }
};
