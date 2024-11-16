import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./user/userSlice";
import driverSlice from "./driver/driverSlice.js";
import customerSlice from './customer/customerSlice.js'
import ownerSlice from './owner/ownerSlice.js'
import carSlice from './car/carSlice.js'


const store = configureStore({
    reducer:{
        user : userSlice ,
        driver: driverSlice,
        customer: customerSlice ,
        owner : ownerSlice ,
        car : carSlice
    }
})

export default store