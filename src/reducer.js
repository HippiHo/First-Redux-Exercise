const initialState = {
  title: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "TYPE_TEXT":
      return {
        ...state,
        title: text
      };
    default:
      return state;
  }
}
