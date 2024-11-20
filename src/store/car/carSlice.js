// carSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {  createNewCar, deleteVehicle } from "./carController";

const initialState = {
    car: [],
    selectedCar :{},
    status: {
        createNewCar: '',
        deleteVehicle: ''
    },
    loading: {
        createNewCarLoading: false,
        deleteVehicleLoading : false ,
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
            state.status.deleteVehicle = '';
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

        builder.addCase(deleteVehicle.pending , (state , action)=>{
            state.loading.deleteVehicleLoading = true;
            state.status.deleteVehicle = 'pending';
        })

        builder.addCase(deleteVehicle.fulfilled, (state, action) => {
            const { message, data } = action.payload;
            state.car = state.car.filter((ele)=> ele._id !== data._id )
            state.selectedCar = data
            state.message = message;
            state.loading.deleteVehicleLoading = false;
            state.status.deleteVehicle = 'success';
        });
        builder.addCase(deleteVehicle.rejected, (state, action) => {
            const { message } = action.payload;
            state.message = message;
            state.error = message;
            state.loading.deleteVehicleLoading = false;
            state.status.deleteVehicle = 'rejected';
        });
    }
});

export const { resetCarState } = carSlice.actions;
export default carSlice.reducer;
