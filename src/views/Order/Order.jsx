import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../App';
import { MdMyLocation } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import touristSpots from '../../assets/data/touristSpotsData';
import axios from 'axios';
import { getToken } from '../../utils/getToken';
import Cookies from 'js-cookie';

function Order() {
  const [coordinets, setCoordinets] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setCurrentState] = useState('');
  const [district, setDistrict] = useState('');
  const [cuntry, setCuntry] = useState('');
  const [pincode, setPincode] = useState('');
  const [isCurrent, setIsCurrent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [totalAmmount, setTotalAmmount] = useState(0);
  const [delivaryFees, setDelivaryFees] = useState(0);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentType, setPaymentType] = useState('online');
  const [isAddLoc, setIsAddLoc] = useState(false);

  const product = [];
  const {  user , token } = useSelector((state) => state.user);

   const { id } = useParams();
    const spot = touristSpots.find((s) => s.id === parseInt(id));
    
  

  const navigate = useNavigate();

  useEffect(() => {
    setTotalAmmount(200);
    if (product.totalAmmount < 500) {
      setDelivaryFees(49);
      setTotalAmmount((prev) => prev + 49);
    }
  }, [productList]);

  const getCurrentLocation = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
 
    try {
      setIsLoading(true);
      const formData = {
        spot : spot ,
      };

      const {data} =await axios.post(`${baseUrl}/booking` , formData , {
        headers : {
          "Content-Type": "application/json"
        } ,
        withCredentials :true
      }
    ,

    )

   
    console.log("data " , data , token);
    


        const options = {
          key: data.key,
          amount: data.order?.amount || totalAmmount * 100,
          currency: 'INR',
          name: 'Vramon Sathi',
          description: 'Explore our modern transport services tailored for your needs.',
          image: 'https://res.cloudinary.com/dab0ekhmy/image/upload/v1750171467/upload1/l2tfb3gkr9fbbulh8lsk.png',
          order_id: data.order?.id,
          callback_url: `${baseUrl}/booking/pay/${data?.data?._id}?token=${token}`,
          prefill: {
            name:  'Sombhu das',
            email: 'sombhudas93@gmail.com',
            contact: phone || '7047808326',
          },
          notes: {
            address: 'Razorpay Corporate Office',
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      if (paymentType === 'offline') {
        navigate('/profile');
      }
    }
  };

  useEffect(()=>{
    handleSubmit();
  } , [id])

  return (
    <div className="w-full min-h-screen flex flex-col gap-6 justify-center items-center bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold text-gray-700">Order Your Products</h2>

      {!isAddLoc ? (
        <div className="w-full max-w-md flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              maxLength={10}
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex flex-row gap-4">
              <input
                type="text"
                name="city"
                placeholder="City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="state"
                placeholder="State Name"
                value={state}
                onChange={(e) => setCurrentState(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-row gap-4">
              <input
                type="text"
                name="district"
                placeholder="District Name"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="country"
                placeholder="Country Name"
                value={cuntry}
                onChange={(e) => setCuntry(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-row gap-4">
              <input
                type="text"
                name="pincode"
                placeholder="Pin Code"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="online">Online Payment</option>
                <option value="offline">Cash On Delivery</option>
              </select>
            </div>

            <div className="flex justify-end mt-5">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 transition duration-300"
              >
                {isLoading ? 'Loading...' : 'Add Location'}
              </button>
            </div>

            {/* Uncommented Current Location Button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={getCurrentLocation}
                disabled={isLoading}
                className="px-4 py-2 border border-red-500 bg-red-50 text-gray-700 rounded-md hover:bg-red-100 disabled:bg-gray-200 disabled:cursor-not-allowed flex items-center gap-2 transition duration-200"
              >
                <MdMyLocation className="h-5 w-5 text-red-500" />
                {isLoading ? 'Loading...' : 'Use Current Location'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => setIsAddLoc(!isAddLoc)}
        >
          {isAddLoc ? 'Hide Form' : 'Add Location'}
        </button>
      )}
    </div>
  );
}

export default Order;