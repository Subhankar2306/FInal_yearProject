// carSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {  createNewCar } from "./carController";

const initialState = {
    car: [],
    selectedCar :{},
    status: {
        createNewCar: ''
    },
    loading: {
        createNewCarLoading: false
    },
    message: '',
    error: null,
};

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        resetCarState: (state) => {
            state.message = '';
            state.error = null;
            state.status.createNewCar = '';
        }
    },
    extraReducers: (builder) => {
        
        builder.addCase(createNewCar.pending, (state) => {
            state.loading.createNewCarLoading = true;
            state.status.createNewCar = 'pending';
        });
        builder.addCase(createNewCar.fulfilled, (state, action) => {
            const { message, data } = action.payload;
            state.selectedCar = data;
            state.message = message;
            state.loading.createNewCarLoading = false;
            state.status.createNewCar = 'success';
        });
        builder.addCase(createNewCar.rejected, (state, action) => {
            const { message } = action.payload;
            state.message = message;
            state.error = message;
            state.loading.createNewCarLoading = false;
            state.status.createNewCar = 'rejected';
        });
    }
});

export const { resetCarState } = carSlice.actions;
export default carSlice.reducer;
