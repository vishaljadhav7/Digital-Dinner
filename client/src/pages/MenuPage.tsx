import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addItems, decrementItem } from '../features/cart';
import { useAppDispatch } from '../redux/hooks';
import { IMenuItem } from '../features/types';


const MenuPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams<{ itemId: string }>();
  const [item, setItem] = useState<IMenuItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);

  const fetchMenuItem = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/api/v1/menu/item`, {
            params: { itemId },
          });
          console.log(response)
      setItem(response.data.data);
      setLoading(false);
    } catch (err: any) {
      setError('Failed to load menu item. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchMenuItem();
  }, [itemId]);

  const handleAddToCart = () => {
    if(!item)return;

    dispatch(addItems(item ))
    setCartCount(1);

  };

  const handleIncrement = () => {
    if(!item)return;
    dispatch(addItems(item ))
    setCartCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if(!item)return;
    dispatch(decrementItem(item))
    setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // Shimmer effect component
  const ShimmerCard: React.FC = () => (
    <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg animate-pulse min-w-full mx-auto">
      <div className="min-w-full h-80 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer" />
      <div className="p-6 space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto" />
        <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
        <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto" />
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto" />
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-beige-50 flex items-center justify-center ">
        <ShimmerCard />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-beige-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg font-semibold font-inter">{error}</p>
          <button
            onClick={() => { setLoading(true); setError(null); fetchMenuItem(); }}
            className="mt-4 px-6 py-2 bg-olive-700 text-white rounded-lg hover:bg-olive-800 transition-colors font-inter"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-beige-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg font-inter">Menu item not found.</p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-beige-50 font-inter flex items-center justify-center py-12">
      <div className="max-w-3xl w-full mx-auto px-6 sm:px-8 lg:px-12 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-80">
            <img
              src={item?.imageUrl}
              alt={item?.name}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-gold-400 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {item?.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Name and Price */}
            <div className="text-center">
              <h1 className="text-3xl font-playfair font-bold text-olive-800">{item?.name}</h1>
              <p className="text-xl font-semibold text-gray-700 mt-1">
                {item?.price}/-
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">{item?.description}</p>

            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-semibold text-olive-700 mb-2">Ingredients</h3>
              <p className="text-gray-600 bg-beige-100 px-4 py-2 rounded-lg">
                {item?.ingredients && item?.ingredients.join(', ')}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-olive-700 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item?.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-orange-300 text-white text-sm px-3 py-1 rounded-full hover:bg-olive-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-lg font-semibold text-olive-700 mb-2">Availability</h3>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  item?.availability?.isAvailable
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {item?.availability?.isAvailable ? 'Available' : 'Not Available'}
              </span>
            </div>

            {/* Customizations */}
            {/* <div>
              <h3 className="text-lg font-semibold text-olive-700 mb-2">Customizations</h3>
              <ul className="space-y-2">
                {item?.customizations?.map((custom, index) => (
                  <li key={index} className="flex justify-between bg-beige-100 px-4 py-2 rounded-lg">
                    <span>{custom.name}</span>
                    <span>
                      {custom?.price} (Max: {custom?.maxQuantity})
                    </span>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Cart Button/Counter */}
            <div className="flex justify-center ">
              {cartCount === 0 ? (
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-3 bg-olive-700 text-white rounded-lg hover:bg-olive-800 transition-colors font-semibold bg-red-300"
                  disabled={item?.availability && !item?.availability?.isAvailable}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex items-center space-x-4 bg-beige-100 px-4 py-2 rounded-lg bg-slate-400">
                  <button
                    onClick={handleDecrement}
                    className="w-8 h-8 bg-olive-700 text-white rounded-full hover:bg-olive-800 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold text-olive-800">{cartCount}</span>
                  <button
                    onClick={handleIncrement}
                    className="w-8 h-8 bg-olive-700 text-white rounded-full hover:bg-olive-800 transition-colors"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;