import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../App";


export const createCustomerProfile = createAsyncThunk(
    'customer/createCustomerProfile',
    async ({ address, phone, email, fullName, preferredContactMethod }, { rejectWithValue }) => {
        let body = {};
        try {
            body = { address, phone, email, fullName, preferredContactMethod };

            const { data } = await axios.post(
                `${baseUrl}/customer`, 
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
