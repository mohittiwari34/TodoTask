import {configureStore} from '@reduxjs/toolkit'
import todoreducer from "../feature/storeSlice"


export const store=configureStore({
    reducer:{
        todos:todoreducer
    }
})