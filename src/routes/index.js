import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/home/Home';
import NotFound from '../pages/notFound';
import Layout from './../layouts/index';

export const ListMessageContext = React.createContext();

const initialState = {
  listMessage: JSON.parse(localStorage.getItem('chat')) || []
};

const actions = {
  ADD_MESSAGE: "ADD_MESSAGE",
};

//Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MESSAGE:
      return {
        listMessage: [
          ...state.listMessage,
          action.value,
        ]
      };

    default:
      return state;
  }
};

const Navigation = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    listMessage: state.listMessage,
    addListMessage: (value) => {
      dispatch({ type: actions.ADD_MESSAGE, value });
    }

  };

  const authenticated = true;
  return (
    <main>
      <ListMessageContext.Provider value={value}>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              name="home"
              element={<Home />}
            />
          </Route>
          <Route path="*" name="notFound" element={<Navigate to='/' />} />
        </Routes></ListMessageContext.Provider>
    </main>
  );
};

export default Navigation;
