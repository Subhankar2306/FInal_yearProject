// carController.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../App";

export const createNewCar = createAsyncThunk(
    'car/createNewCar',
    async ({ fromData }, { rejectWithValue }) => {
        
        try {
            const { data } = await axios.post(
                `${baseUrl}/car`, 
                fromData ,
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
