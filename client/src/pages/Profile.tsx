import { useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import axios from "axios";
import { IMenuItem } from "../features/types";

interface IOrder {
  id : string;
  userId : string;
  items : IMenuItem[]
}

const Profile = () => {
  const user = useAppSelector((store) => store.user.userInfo);
  const [orders, setOrders] = useState<IOrder[]>([]);

  const fetchOrders = async () => {
    try {
      const allOrders = await axios.get(`${import.meta.env.VITE_PUBLIC_API}/order`, {
        withCredentials: true,
      });
      setOrders(allOrders.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);



  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-6 sm:p-8">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 border-b border-gray-200 pb-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{user?.name}</h1>
            <p className="text-sm text-gray-500">User Profile</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm font-medium">Email:</span>
            <p className="text-gray-900">{user?.email}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm font-medium">Phone:</span>
            <p className="text-gray-900">{user?.phoneNum}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-sm font-medium">ID:</span>
            <p className="text-gray-900 text-sm">{user?.id}</p>
          </div>
        </div>

        {/* Orders Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Orders</h2>
          {orders.length === 0 ? (
            <p className="text-gray-500 text-center">No orders found.</p>
          ) : (
            <div className="overflow-x-auto scrollbar-hidden">
              <div className="flex space-x-4 pb-4">
                {orders.map((order) => (
                  <div
                    key={order.id }
                    className="min-w-[280px] bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm font-medium text-gray-800">
                        Order #{order.id.slice(0, 8)}
                      </h3>
                      <span className="text-xs text-gray-500">
                        User: {order.userId.slice(0, 8)}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 cursor-pointer"
                         
                        >
                          
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                            <p className="text-xs text-gray-600">{item.price.toFixed(2)}/-</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;