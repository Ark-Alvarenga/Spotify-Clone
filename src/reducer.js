export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER FINISHING DEVELOPMENT
    //token: "BQAgx2oZgsuGBvzOXY_d3YXMBNlt706MMy9ZMm1A3Um5-luN4w2rI6knNxF-IWPHHRrZnLrh4Atml1ZPRLnphjgcfucgCsBPiBpiev2wXTAjYgPkthI7TfwifR0tbnCcmsuahrwLx7WdAhBET9ML45JUt38Y3mtDj0TEBMGidDUqnooT"
};

const reducer = (state, action) => {
console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        
       default:
           return state;
    }
}

export default reducer;