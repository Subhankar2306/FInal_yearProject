import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./user/userSlice";
import driverSlice from "./driver/driverSlice.js";



const store = configureStore({
    reducer:{
        user : userSlice ,
        driver: driverSlice,
    }
})

export default store