import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../App";


export const createDriverProfile = createAsyncThunk(
    'driver/createDriverProfile',

    async ({ address, typeOfCar, phone, isOwnCar, totalExprence, car ='' }, { rejectWithValue }) => {
        let body = {}
        try {
            if(car){
              body = { address, typeOfCar, phone, isOwnCar, totalExprence, car}
            } else{
             body = { address, typeOfCar, phone, isOwnCar, totalExprence}

            }
            const { data } = await axios.post(
                `${baseUrl}/driver`, body ,
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
            console.error('error', error)
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue('An unexpected error occurred');
        }
    }
)