import React, { useEffect, useState } from 'react';
import { FaUserAlt, FaCar, FaTools } from 'react-icons/fa';
import { toast } from 'react-toastify';

function UserType({onType=()=>{}
  }) {
    const [type , setType] = useState("")
    // const handleSubmit = ()=>{
    //     if(!type) return toast.error("pleace select one")
    //         onType(type);
    // }


    useEffect(()=>{
  
       if(type) onType(type)
        
    },[type])

    console.log(type);
    

    const userTypes = [
        {
          name: 'Rider',
          type:'customer',
          description: 'Find and book rides quickly and easily.',
          icon: <FaUserAlt className="text-blue-500 text-4xl mb-2" />,
          color: 'bg-blue-50',
          hoverColor: 'hover:bg-blue-100 ',
        },
        {
          name: 'Driver',
          type:'driver' ,
          description: 'Offer rides and earn money by driving.',
          icon: <FaCar className="text-green-500 text-4xl mb-2" />,
          color: 'bg-green-50',
          hoverColor: 'hover:bg-green-100',
        },
        {
          name: 'Owner',
          type:'owner',
          description: 'Manage your vehicles and track performance.',
          icon: <FaTools className="text-yellow-500 text-4xl mb-2" />,
          color: 'bg-yellow-50',
          hoverColor: 'hover:bg-yellow-100',
        },
      ];
  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold mb-4">Choose Your Role</h1>
      <div className="flex flex-col gap-4">
        {userTypes.map((user, index) => (
          <div
            key={index}
            className={`${user.color} ${user.hoverColor}  p-4 bg-white shadow rounded-lg hover:shadow-lg transition cursor-pointer flex  items-center flex-wrap gap-2 `}
            onClick={()=>setType(user.type)}
          >
            {user.icon}
            <div className=' flex flex-col flex-nowrap'>
            <h2 className="text-xl font-semibold  mb-1">
              {user.name}
            </h2>

            <p className="text-gray-400">{user.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button type='button' className='submit-btn' onClick={handleSubmit}>Next</button> */}
    </div>
  );
}

export default UserType;
