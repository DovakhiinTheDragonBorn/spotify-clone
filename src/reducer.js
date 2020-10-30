export const initialState = {
   user: null,
   playlists: [],
   playing: false,
   item: null,
   token:
      "BQBbmujLAToPOv5U3Tc9j0FITJJslJPQeQzdGN2WXZ83xNaTwE2kCPQ53DFRsW_gDvdCpWOgVSGczwIxILTTzdvIE546iECJFJY4bpntZhpCzaYw8z30iEikrZv8-KKFqwMxiCzgSdzncEu8iCZejSXc2EwbjBAxgZjkbbwBn5jGNian",
};

const reducer = (state, action) => {
   console.log(action);
   switch (action.type) {
      case "SET_USER":
         return {
            ...state,
            user: action.user,
         };
      case "SET_TOKEN":
         return {
            ...state,
            token: action.token,
         };
      case "SET_PLAYLISTS":
         return {
            ...state,
            playlists: action.playlists,
         };
      default:
         console.log("in default");
         return state;
   }
};

export default reducer;
