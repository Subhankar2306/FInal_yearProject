import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deleteVehicle } from "../../../store/car/carController";
import { toast } from "react-toastify";

import { resetCarState } from "../../../store/car/carSlice";

function VehicleDetails({vehicle , onRemove = ''}) {

    const dispatch = useDispatch()
    const { car , selectCar , status , loading , message } = useSelector((state) => state.car)
 
    const handleRemoveVehicle = (id)=>{
        
        dispatch(deleteVehicle({id}))
    }

    useEffect(()=>{
        if(status.deleteVehicle === 'success'){
            toast.success(message)
            dispatch(resetCarState())
            if(onRemove){
                onRemove(vehicle.id)
            }
        } else if(status.deleteVehicle === 'rejected'){
            toast.error(message)
        }


    } , [status])
    

  return (
    <div
      className="flex items-center my-2 border rounded-full bg-gray-200 p-2 px-3 text-black"
    >
      <p className="mr-2">{`${vehicle?.name} - ${vehicle?.modelNumber}`}</p>
      <button
        type="button"
        onClick={() => handleRemoveVehicle(vehicle.id)}
        className="text-red-500 hover:underline"
      >
        <IoClose />
      </button>
    </div>
  );
}

export default VehicleDetails;
