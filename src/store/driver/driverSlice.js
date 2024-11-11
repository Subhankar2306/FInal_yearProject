import { createSlice } from "@reduxjs/toolkit"
import { createDriverProfile } from "./driverController"

const initialState = {
    driver: {},
    status: {
        createDriverProfile: '' 
    },
    loading: {
        createDriverProfileLoading: false
    },
    message: '',
    error: null,
}

 const driverSlice = createSlice({
    name: "driver",
    initialState,
    reducers: {
        resetDriverState: (state) => {
            state.message = '';
            state.error = null;
            state.status.createDriverProfile = '';
        }
    },

    extraReducers: (builder) => {
        builder.addCase(createDriverProfile.pending, (state) => {
            state.loading.createDriverProfileLoading = true;
            state.status.createDriverProfile = 'pending';
        });

        builder.addCase(createDriverProfile.fulfilled, (state, action) => {
            const { message, driver } = action.payload; // Use action.payload
            state.driver = driver;
            state.message = message;
            state.loading.createDriverProfileLoading = false;
            state.status.createDriverProfile = 'success';
        });

        builder.addCase(createDriverProfile.rejected, (state, action) => {
            const { message } = action.payload; // Use action.payload
            state.message = message;
            state.error = message;
            state.loading.createDriverProfileLoading = false;
            state.status.createDriverProfile = 'rejected';
        });
    }
});

export const { resetDriverState } = driverSlice.actions;
export default driverSlice.reducer;
