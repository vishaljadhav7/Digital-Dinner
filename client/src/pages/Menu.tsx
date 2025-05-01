import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuItem {
  _id: { $oid: string };
  name: string;
  imageUrl: string;
  category: string;
}

interface CategorizedItems {
  Appetizer: MenuItem[];
  'Main Course': MenuItem[];
  Dessert: MenuItem[];
  Drink: MenuItem[];
}

const Menu: React.FC = () => {
  const [categorizedItems, setCategorizedItems] = useState<CategorizedItems>({
    Appetizer: [],
    'Main Course': [],
    Dessert: [],
    Drink: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMenuItems = async () => {
    try {
 
      const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API}/api/v1/menu`);
      const items: MenuItem[] = response.data.data;
      

      // Group items by category
      const groupedItems: CategorizedItems = {
        Appetizer: items?.filter((item) => item?.category === 'Appetizer'),
        'Main Course': items?.filter((item) => item?.category === 'Main Course'),
        Dessert: items?.filter((item) => item?.category === 'Dessert'),
        Drink: items?.filter((item) => item?.category === 'Drink'),
      };

      setCategorizedItems(groupedItems);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to load menu items. Please try again later.');
      setLoading(false);
    }
  };
  useEffect(() => {

    fetchMenuItems();
  }, []);

  // Shimmer effect component for loading state
  const ShimmerCard: React.FC = () => (
    <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-md animate-pulse">
      <div className="w-full h-56 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer" />
      <div className="absolute bottom-0 w-full bg-black/40 p-3">
        <div className="h-5 bg-gray-300 rounded w-2/3" />
      </div>
    </div>
  );

  return (
    <div className="min-h-full bg-beige-50 font-inter ">
      <section
        className="relative bg-cover bg-center py-16 text-center text-white rounded-b-3xl"
      >
        <div className="max-w-3xl mx-auto animate-fade-in ">
          <div className="inline-block bg-gold-400  text-sm font-semibold px-4 py-1 rounded-full mb-4 text-black" >
            Culinary Excellence
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-3 text-beige-50 text-black">
            Explore Our Menu
          </h1>
          <p className="text-base md:text-lg  max-w-xl mx-auto text-black">
            Indulge in a symphony of flavors, crafted with passion and the finest ingredients.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {loading ? (
          <div className="text-center">
            <Loader2 className="w-10 h-10 text-olive-700 animate-spin mx-auto mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {Array(6).fill(0).map((_, index) => (
                <ShimmerCard key={index} />
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-500 text-lg font-semibold">{error}</p>
            <button
              onClick={() => { setLoading(true); setError(null); fetchMenuItems(); }}
              className="mt-4 px-6 py-2 bg-olive-700 text-white rounded-lg hover:bg-olive-800 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            {Object.entries(categorizedItems).map(([category, items], sectionIndex) => (
              items?.length > 0 && (
                <section key={category} className="mb-20">
                  <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
                    <h2 className="text-3xl font-playfair font-semibold text-olive-800">
                      {category}
                    </h2>
                    <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map((item: MenuItem, itemIndex : number) => (
                      <Link 
                      key={itemIndex}
                      to={`/menu/${item._id}`}>                      
                      <div
                      
                        className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-beige-200 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${(sectionIndex * 100) + (itemIndex * 50)}ms` }}
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-56 object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                          <h3 className="text-base font-semibold text-white">{item.name}</h3>
                        </div>
                      </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )
            ))}
          </>
        )}
      </main>
    </div>
  );
};

export default Menu;