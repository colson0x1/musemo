import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    song: songsSlice.reducer,
  },
});

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
export const { addSong } = songsSlice.actions;
