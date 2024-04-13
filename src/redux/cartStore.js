import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slice'

export default configureStore({
    // Reducer
    reducer: {
        counter: counterReducer,
    },
});