import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'move',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {},
  },
});

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      // console.log(state.length)
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

console.log(store.getState());

// console.log(songsSlice.actions.addSong('Ambitionz Az a Ridah - 2Pac'));

// @ Debugging Store

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

/* @ manually creating an action object
store.dispatch({
  type: 'song/addSong',
  payload: 'Poppin Bottles - T.I, Drake',
});
*/

// dispatch an action object
// store.dispatch(songsSlice.actions.addSong('Congratulations - Post Malone'));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie } = moviesSlice.actions;
