import { createSlice } from "@reduxjs/toolkit"
import { createCustomerProfile } from "./customerController";


const initialState = {
    customer: {},
    status: {
        createCustomerProfile: ''
    },
    loading: {
        createCustomerProfileLoading: false
    },
    message: '',
    error: null,
}

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        resetCustomerState: (state) => {
            state.message = '';
            state.error = null;
            state.status.createCustomerProfile = '';
        }
    },

    extraReducers: (builder) => {
        builder.addCase(createCustomerProfile.pending, (state) => {
            state.loading.createCustomerProfileLoading = true;
            state.status.createCustomerProfile = 'pending';
        });

        builder.addCase(createCustomerProfile.fulfilled, (state, action) => {
            const { message, customer } = action.payload;
            state.customer = customer;
            state.message = message;
            state.loading.createCustomerProfileLoading = false;
            state.status.createCustomerProfile = 'success';
        });

        builder.addCase(createCustomerProfile.rejected, (state, action) => {
            const { message } = action.payload;
            state.message = message;
            state.error = message;
            state.loading.createCustomerProfileLoading = false;
            state.status.createCustomerProfile = 'rejected';
        });
    }
});

export const { resetCustomerState } = customerSlice.actions;
export default customerSlice.reducer;
