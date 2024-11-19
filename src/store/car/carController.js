// carController.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../App";

export const createNewCar = createAsyncThunk(
    'car/createNewCar',
    async ({ fromData }, { rejectWithValue }) => {
        
        try {
            const { data } = await axios.post(
                `${baseUrl}/vehicle`, 
                fromData ,
                {
                    headers: {
                        'Content-Type': 'multipart/from-data'
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


export const deleteVehicle = createAsyncThunk('car/deleteVehicle' ,
    async ({ id }, { rejectWithValue }) => {
        
        try {
            const { data } = await axios.delete(
                `${baseUrl}/vehicle/${id}`, 
                {
                    headers: {
                        'Content-Type': 'multipart/from-data'
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
)