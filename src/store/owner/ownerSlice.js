import { createSlice } from "@reduxjs/toolkit"
import { createOwnerProfile } from "./ownerConroller";


const initialState = {
    owner: {},
    status: {
        createOwnerProfile: ''
    },
    loading: {
        createOwnerProfileLoading: false
    },
    message: '',
    error: null,
}

const ownerSlice = createSlice({
    name: "owner",
    initialState,
    reducers: {
        resetOwnerState: (state) => {
            state.message = '';
            state.error = null;
            state.status.createOwnerProfile = '';
        }
    },

    extraReducers: (builder) => {
        builder.addCase(createOwnerProfile.pending, (state) => {
            state.loading.createOwnerProfileLoading = true;
            state.status.createOwnerProfile = 'pending';
        });

        builder.addCase(createOwnerProfile.fulfilled, (state, action) => {
            const { message, owner } = action.payload;
            state.owner = owner;
            state.message = message;
            state.loading.createOwnerProfileLoading = false;
            state.status.createOwnerProfile = 'success';
        });

        builder.addCase(createOwnerProfile.rejected, (state, action) => {
            const { message } = action.payload;
            state.message = message;
            state.error = message;
            state.loading.createOwnerProfileLoading = false;
            state.status.createOwnerProfile = 'rejected';
        });
    }
});

export const { resetOwnerState } = ownerSlice.actions;
export default ownerSlice.reducer;
