export const initialState = {
   user: null,
   playlists: [],
   playing: false,
   item: null,
   token:
      "BQCE8F5kjYAYHJfBzakhIZ8-xna5YzmGRWs43He5r2Of0ti5x4nRF97egB1QVqI1pwtY_aMN2ZBkLYOF9a6N_he2x1_aS62XZjZDTm2JwK3WiMGTFk8k6wInJjil7pj-FHx-m8juv-u_1VRsG1qYm-MDDMrRHXKe7I1bVgyEJWiUuGSW",
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
      default:
         console.log("in default");
         return state;
   }
};

export default reducer;
