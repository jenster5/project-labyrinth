import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    history: [],
    moves: '',
    coordinates: '',
    description: ''
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload
    },
    setMoves: (store, action) => {
      store.moves = action.payload
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload
      store.history.push(store.coordinates)
    }
  }
});

// a thunk to handle the API request
// two API requests one for the startLabyrinth and one for all the rest
export const startLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.username })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json.description));
        dispatch(labyrinth.actions.setMoves(json.actions));
        dispatch(labyrinth.actions.setCoordinates(json.coordinates))
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  };
};

export const labyrinthProgress = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    const optionsProgress = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.username, type, direction })
    };

    fetch('https://labyrinth.technigo.io/action', optionsProgress)
      .then((response) => response.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json.description));
        dispatch(labyrinth.actions.setMoves(json.actions));
        dispatch(labyrinth.actions.setCoordinates(json.coordinates))
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  };
}