import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../App";


export const createOwnerProfile = createAsyncThunk(
    'owner/createOwnerProfile',
    async ({ businessName, address, phone, email, ownerName, registrationNumber }, { rejectWithValue }) => {
        let body = {};
        try {
            body = { businessName, address, phone, email, ownerName, registrationNumber };

            const { data } = await axios.post(
                `${baseUrl}/owner`,
                body,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );
            console.log(data);
            return data;
        } catch (error) {
            console.error('error', error);
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue('An unexpected error occurred');
        }
    }
);


export const fetchAllAvailableVehical = createAsyncThunk(
    'owner/available-vehicle',
    async ({ businessName, address, phone, email, ownerName, registrationNumber }, { rejectWithValue }) => {
        let body = {};
        try {
            body = { businessName, address, phone, email, ownerName, registrationNumber };

            const { data } = await axios.post(
                `${baseUrl}/owner`,
                body,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );
            console.log(data);
            return data;
        } catch (error) {
            console.error('error', error);
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue('An unexpected error occurred');
        }
    }
);
