import {configureStore} from '@reduxjs/toolkit'
import UserLoginSlice from './UserLoginSlice'
export const store=configureStore({
    reducer:{
        userLogin:UserLoginSlice,
    }
}
)