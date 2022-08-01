import User from "../../models/User";
import { LOGIN, RESGISTER } from "../actions/autaction";

const initialState = {
  users: [new User("daoanhtien2309@gmail.com", "abc")],
  loginemail: "",
};

export default (state = initialState, action) => {
  const { type, user } = action;
  switch (type) {
    case LOGIN:
      const loginUser = state.users.find(
        (item) => item.email === user.email && item.password === user.password
      );
      return { ...state, loginemail: loginUser ? loginUser.email : "" };
    case RESGISTER:
      return { ...state, users: [state.users, user] };

    default:
      return state;
  }
};
