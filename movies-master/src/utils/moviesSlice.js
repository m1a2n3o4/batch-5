import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayongMovies : null
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayongMovies = action.payload
        }
    }

});

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;