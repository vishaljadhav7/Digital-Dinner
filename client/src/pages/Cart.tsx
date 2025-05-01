import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { Trash2 } from 'lucide-react';
import { IMenuItem } from '../features/types';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { addItems, removeItems, decrementItem, emptyCart } from '../features/cart';
import { toast } from 'sonner';
import axios from 'axios';

const Cart: React.FC = () => {
  const items = useAppSelector((store) => store.cart.items) as IMenuItem[];
  const user = useAppSelector((store) => store.user)
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading]  = useState<boolean>(false)
  
  const increment = (item: IMenuItem) => {
    dispatch(addItems(item))
  };

  const decrement = (item: IMenuItem) => {
    dispatch( decrementItem(item))
  };

  const remove = (item: IMenuItem) => {
    dispatch( removeItems(item))
  };

  const clearCart = () => { 
    dispatch(emptyCart())
  };

  const handleOrder = async () => {
    setIsLoading(true)
    if(!user.isAuthenticated ){
      toast.error("please sign in to make an order!", {
        style: {
          background: 'red',
          color: 'white',
        },
      });
      return;
    } 
     
     try {
       await axios.post(`${import.meta.env.VITE_PUBLIC_API}/api/v1/order`, {
        userId: user.userInfo?.id,
        items: JSON.stringify(items)
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',

        }
      });

      toast.success("Order created!", {
        style: {
          background: 'green',
          color: 'white',
        },
      });

     dispatch(emptyCart());

     } catch (error) {
      console.error(error)
      toast.error("could not create the order server error!", {
        style: {
          background: 'red',
          color: 'white',
        },
      });
     } finally {
      setIsLoading(false)
     }
  }



  return (
    <div className="min-h-screen bg-beige-50 font-inter py-12 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-playfair font-bold text-olive-800">
            Your Cart
          </h1>
          <p className="text-base text-gray-600 mt-2">
            Review your selected items and proceed to checkout.
          </p>
        </div>

        {/* Cart Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {items.length === 0 ? (
            <div className="text-center py-12 animate-fade-in">
              <h2 className="text-2xl font-playfair font-semibold text-gray-700 mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-gray-600 mb-6">
                Explore our menu to add delicious items to your cart!
              </p>
              <Link
                to="/menu"
                className="inline-block px-6 py-3 bg-olive-700 text-white rounded-lg hover:bg-olive-800 transition-colors font-semibold"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div
                    key={item._id}
                    className="flex items-center bg-beige-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                        sizes="96px"
                        loading="lazy"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold text-olive-800">{item.name}</h3>
                      <p className="text-base font-semibold text-gray-700">
                        {(item.price * item?.cartQuantity)?.toFixed(2)}/-
                      </p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.cartQuantity}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => decrement(item)}
                        className="w-8 h-8 bg-olive-700 text-white rounded-full bg-orange-300 transition-colors flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                      <Minus />
                      </button>
                      <span className="text-base font-semibold text-olive-800">
                        {item.cartQuantity}
                      </span>
                      <button
                        onClick={() => increment(item)}
                        className="w-8 h-8 bg-olive-700 text-white rounded-full bg-orange-300   transition-colors flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                    <Plus />
                      </button>
                      <button
                        onClick={() => remove(item)}
                        className="w-8 h-8 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors flex items-center justify-center"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear Cart Button */}
              <div className="mt-8 flex gap-3 justify-end">
                <button
                onClick={handleOrder}
                disabled={isLoading}
                className={`px-6 py-3 ${isLoading ? "bg-slate-400 text-white" : "bg-green-600 text-white"} rounded-lg hover:bg-bg-green-700 transition-colors font-semibold`}
                >
                 { isLoading ?  "Loading..." : "Order" }
                </button>
                <button
                  onClick={clearCart}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;