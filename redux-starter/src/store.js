import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
    reducer: {
      bugs: reducer, // Assuming your reducer handles a "bugs" slice of the state
    },
});
  
export default store;
