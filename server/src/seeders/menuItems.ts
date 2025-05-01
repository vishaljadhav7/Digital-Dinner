export const mockData = [ 
  {
    "name": "Bruschetta",
    "price": 746.67,
    "category": "Appetizer",
    "description": "Savor the taste of Italy with our classic bruschetta, featuring freshly toasted artisan bread topped with a vibrant mix of ripe diced tomatoes, fragrant basil leaves, minced garlic, and a drizzle of extra virgin olive oil, finished with a pinch of sea salt for the perfect balance of flavors.",
    "ingredients": ["tomatoes", "basil", "garlic", "olive oil", "bread"],
    "tags": ["vegetarian", "Italian"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Mozzarella", "price": 166.0, "maxQuantity": 2 },
      { "name": "Extra Basil", "price": 41.5, "maxQuantity": 3 }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=400"
  },
  {
    "name": "Stuffed Mushrooms",
    "price": 787.67,
    "category": "Appetizer",
    "description": "Indulge in our delectable stuffed mushrooms, where tender mushroom caps are filled with a creamy blend of rich cream cheese, aromatic garlic, and a medley of fresh herbs, baked to golden perfection for a warm, savory bite that melts in your mouth.",
    "ingredients": ["mushrooms", "cream cheese", "garlic", "herbs"],
    "tags": ["vegetarian", "savory"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Add Bacon Bits", "price": 124.5, "maxQuantity": 2 }],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1677006197950-85bca52d09e0?q=80&w=400"
  },
  {
    "name": "Spring Rolls",
    "price": 663.17,
    "category": "Appetizer",
    "description": "Crispy and golden, our spring rolls are hand-rolled with a delightful filling of succulent shrimp, crisp cabbage, shredded carrots, and delicate rice paper, served with a side of tangy dipping sauce to elevate the flavors of this Asian-inspired appetizer.",
    "ingredients": ["shrimp", "cabbage", "carrots", "rice paper"],
    "tags": ["Asian", "crispy"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Sweet Chili Sauce", "price": 62.25, "maxQuantity": 2 },
      { "name": "Extra Shrimp", "price": 166.0, "maxQuantity": 3 }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?q=80&w=400"
  },
  {
    "name": "Garlic Bread",
    "price": 497.17,
    "category": "Appetizer",
    "description": "Our garlic bread is a crowd-pleaser, made with freshly baked bread slathered in a generous layer of house-made garlic butter, sprinkled with finely chopped parsley, and toasted until golden and fragrant, offering a perfect balance of crunch and rich, buttery flavor.",
    "ingredients": ["bread", "butter", "garlic", "parsley"],
    "tags": ["vegetarian", "simple"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Add Cheese", "price": 83.0, "maxQuantity": 2 }],
    "imageUrl": "https://images.unsplash.com/photo-1598785244280-7a428600d053?q=80&w=400"
  },
  {
    "name": "Calamari Fritti",
    "price": 912.17,
    "category": "Appetizer",
    "description": "Dive into our calamari fritti, featuring tender rings of calamari lightly coated in seasoned flour, fried to a crisp golden brown, and served with a robust marinara sauce, delivering a delightful seafood appetizer with a satisfying crunch in every bite.",
    "ingredients": ["calamari", "flour", "oil", "marinara sauce"],
    "tags": ["seafood", "Italian"],
    "availability": { "isAvailable": false },
    "customizations": [{ "name": "Spicy Marinara", "price": 41.5, "maxQuantity": 1 }],
    "imageUrl": "https://images.unsplash.com/photo-1734771219838-61863137b117?q=80&w=400"
  },
  {
    "name": "Mozzarella Sticks",
    "price": 704.67,
    "category": "Appetizer",
    "description": "Enjoy our mozzarella sticks, where gooey, melted mozzarella is encased in a crispy breadcrumb coating, fried to perfection, and paired with a zesty marinara dipping sauce, making for a fun and indulgent appetizer that’s perfect for sharing.",
    "ingredients": ["mozzarella", "breadcrumbs", "marinara sauce"],
    "tags": ["vegetarian", "fried"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Extra Sauce", "price": 62.25, "maxQuantity": 2 }],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1726804917125-0d86aaefad09?q=80&w=400"
  },
  {
    "name": "Hummus Platter",
    "price": 621.67,
    "category": "Appetizer",
    "description": "Our hummus platter is a Mediterranean delight, featuring velvety smooth hummus made from blended chickpeas, tahini, and olive oil, served alongside warm pita bread and a colorful assortment of crisp vegetables, perfect for a light and flavorful start to your meal.",
    "ingredients": ["chickpeas", "tahini", "olive oil", "pita bread"],
    "tags": ["vegan", "Mediterranean"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Olives", "price": 83.0, "maxQuantity": 2 },
      { "name": "Extra Pita", "price": 124.5, "maxQuantity": 3 }
    ],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1664391805862-53daf88e83cd?q=80&w=400"
  },
  {
    "name": "Grilled Salmon",
    "price": 1659.17,
    "category": "Main Course",
    "description": "Relish our grilled salmon, a succulent fillet of fresh salmon expertly grilled and finished with a bright lemon herb sauce, served with a side of seasonal vegetables, offering a healthy yet flavorful main course that highlights the natural richness of the fish.",
    "ingredients": ["salmon", "lemon", "herbs", "olive oil"],
    "tags": ["seafood", "healthy"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Asparagus", "price": 249.0, "maxQuantity": 2 },
      { "name": "Extra Sauce", "price": 83.0, "maxQuantity": 2 }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400"
  },
  {
    "name": "Chicken Parmesan",
    "price": 1410.17,
    "category": "Main Course",
    "description": "Savor the comfort of our chicken parmesan, featuring a juicy breaded chicken breast smothered in a rich house-made marinara sauce, topped with melted mozzarella, and served with a side of al dente spaghetti, delivering a hearty Italian classic that’s sure to satisfy.",
    "ingredients": ["chicken", "mozzarella", "marinara sauce", "breadcrumbs"],
    "tags": ["Italian", "hearty"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Add Pasta", "price": 207.5, "maxQuantity": 1 }],
    "imageUrl": "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=400"
  },
  {
    "name": "Vegetable Stir-Fry",
    "price": 1160.17,
    "category": "Main Course",
    "description": "Our vegetable stir-fry is a vibrant medley of fresh broccoli, carrots, bell peppers, and snap peas, wok-tossed in a savory soy-ginger sauce, served over steamed jasmine rice, offering a wholesome and flavorful vegan dish with a delightful crunch in every bite.",
    "ingredients": ["broccoli", "carrots", "soy sauce", "ginger"],
    "tags": ["vegan", "Asian"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Tofu", "price": 166.0, "maxQuantity": 2 },
      { "name": "Extra Sauce", "price": 41.5, "maxQuantity": 2 }
    ],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1664472637341-3ec829d1f4df?q=80&w=400"
  },
  {
    "name": "Beef Tenderloin",
    "price": 2074.17,
    "category": "Main Course",
    "description": "Indulge in our premium beef tenderloin, a perfectly grilled cut of tender beef drizzled with a luxurious red wine reduction infused with rosemary and garlic, served with roasted vegetables, offering a sophisticated and flavorful dining experience for meat lovers.",
    "ingredients": ["beef", "red wine", "rosemary", "garlic"],
    "tags": ["steak", "premium"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Mashed Potatoes", "price": 249.0, "maxQuantity": 1 },
      { "name": "Blue Cheese Crust", "price": 166.0, "maxQuantity": 1 }
    ],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1722686492028-1b44b218fdde?q=80&w=400"
  },
  {
    "name": "Spaghetti Carbonara",
    "price": 1244.17,
    "category": "Main Course",
    "description": "Experience the authentic taste of Italy with our spaghetti carbonara, featuring al dente spaghetti tossed in a creamy egg-based sauce with crispy pancetta and a generous sprinkle of parmesan cheese, delivering a rich and comforting pasta dish that’s a true classic.",
    "ingredients": ["spaghetti", "eggs", "pancetta", "parmesan"],
    "tags": ["Italian", "pasta"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Add Mushrooms", "price": 124.5, "maxQuantity": 2 }],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1674511582428-58ce834ce172?q=80&w=400"
  },
  {
    "name": "BBQ Pork Ribs",
    "price": 1576.17,
    "category": "Main Course",
    "description": "Our BBQ pork ribs are slow-cooked to tender perfection, slathered in a tangy, house-made BBQ sauce with a hint of smokiness, served with a side of crispy fries, offering a hearty and flavorful American classic that’s perfect for meat enthusiasts.",
    "ingredients": ["pork ribs", "BBQ sauce", "spices"],
    "tags": ["American", "meaty"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Extra Sauce", "price": 83.0, "maxQuantity": 2 },
      { "name": "Add Coleslaw", "price": 166.0, "maxQuantity": 1 }
    ],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1663012872761-33dd73e292cc?q=80&w=400"
  },
  {
    "name": "Mushroom Risotto",
    "price": 1327.17,
    "category": "Main Course",
    "description": "Delight in our creamy mushroom risotto, made with arborio rice slowly cooked in a savory broth, blended with a variety of wild mushrooms, finished with a generous grating of parmesan and a splash of white wine, offering a luxurious vegetarian dish with deep, earthy flavors.",
    "ingredients": ["arborio rice", "mushrooms", "parmesan", "white wine"],
    "tags": ["vegetarian", "Italian"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Add Truffle Oil", "price": 207.5, "maxQuantity": 1 }],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1695030934293-e8c889c3bbd8?q=80&w=400"
  },
  {
    "name": "Chocolate Lava Cake",
    "price": 663.17,
    "category": "Dessert",
    "description": "Indulge in our decadent chocolate lava cake, a warm, rich chocolate cake with a gooey molten center that oozes out with every bite, served with a dusting of powdered sugar, perfect for chocolate lovers seeking a truly indulgent dessert experience.",
    "ingredients": ["chocolate", "flour", "eggs", "sugar"],
    "tags": ["chocolate", "indulgent"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Vanilla Ice Cream", "price": 166.0, "maxQuantity": 2 },
      { "name": "Extra Chocolate Sauce", "price": 62.25, "maxQuantity": 2 }
    ],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1723867233123-76f9c3e357ee?q=80&w=400"
  },
  {
    "name": "Tiramisu",
    "price": 580.17,
    "category": "Dessert",
    "description": "Our tiramisu is a heavenly Italian dessert, featuring layers of coffee-soaked ladyfingers, creamy mascarpone cheese, and a dusting of cocoa powder, offering a perfect balance of rich coffee flavor and velvety texture for a sophisticated sweet treat.",
    "ingredients": ["mascarpone", "coffee", "ladyfingers", "cocoa"],
    "tags": ["Italian", "coffee"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Add Whipped Cream", "price": 83.0, "maxQuantity": 2 }],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1695028378225-97fbe39df62a?q=80&w=400"
  },
  {
    "name": "Cheesecake",
    "price": 538.67,
    "category": "Dessert",
    "description": "Savor our classic cheesecake, with a silky smooth cream cheese filling atop a buttery graham cracker crust, baked to perfection for a creamy, rich dessert that’s both timeless and irresistible, perfect for any sweet occasion.",
    "ingredients": ["cream cheese", "graham crackers", "sugar", "eggs"],
    "tags": ["classic", "creamy"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Strawberry Topping", "price": 124.5, "maxQuantity": 2 },
      { "name": "Caramel Drizzle", "price": 83.0, "maxQuantity": 2 }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=400"
  },
  {
    "name": "Apple Pie",
    "price": 497.17,
    "category": "Dessert",
    "description": "Our warm apple pie is a comforting classic, featuring tender, spiced apples encased in a flaky, golden crust, baked until bubbly and fragrant, served with a scoop of whipped cream for a nostalgic dessert that warms the heart.",
    "ingredients": ["apples", "flour", "sugar", "cinnamon"],
    "tags": ["American", "fruity"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Add Ice Cream", "price": 166.0, "maxQuantity": 2 }],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1666353535270-71a38d00cd93?q=80&w=400"
  },
  {
    "name": "Creme Brulee",
    "price": 621.67,
    "category": "Dessert",
    "description": "Experience elegance with our creme brulee, a rich vanilla custard base topped with a perfectly caramelized sugar crust that cracks with every spoonful, offering a delightful contrast of creamy and crunchy textures for a refined dessert.",
    "ingredients": ["cream", "sugar", "eggs", "vanilla"],
    "tags": ["French", "elegant"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Add Berries", "price": 124.5, "maxQuantity": 2 }],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1713840471854-8bb5563fa694?q=80&w=400"
  },
  {
    "name": "Panna Cotta",
    "price": 580.17,
    "category": "Dessert",
    "description": "Our panna cotta is a silky, vanilla-infused cream dessert, set to perfection and served with a vibrant berry compote, offering a light and refreshing end to your meal with a delicate balance of sweetness and tartness.",
    "ingredients": ["cream", "sugar", "gelatin", "berries"],
    "tags": ["Italian", "light"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Extra Compote", "price": 83.0, "maxQuantity": 2 }],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1713719214426-5ad92cf8dc9d?q=80&w=400"
  },
  {
    "name": "Lemon Tart",
    "price": 538.67,
    "category": "Dessert",
    "description": "Brighten your palate with our lemon tart, featuring a zesty lemon curd filling nestled in a buttery, crisp tart shell, finished with a dusting of powdered sugar, offering a refreshing and tangy dessert that’s both vibrant and satisfying.",
    "ingredients": ["lemon", "flour", "sugar", "butter"],
    "tags": ["citrus", "refreshing"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Add Whipped Cream", "price": 83.0, "maxQuantity": 2 }],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1714942934723-118f2b4dd6dc?q=80&w=400"
  },
  {
    "name": "Espresso",
    "price": 331.17,
    "category": "Drink",
    "description": "Kickstart your day with our espresso, a bold and rich single shot crafted from premium coffee beans, brewed to perfection with a smooth crema, delivering an intense and aromatic coffee experience in every sip.",
    "ingredients": ["coffee beans", "water"],
    "tags": ["coffee", "hot"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Shot", "price": 124.5, "maxQuantity": 2 },
      { "name": "Add Sugar", "price": 0.0, "maxQuantity": 3 }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=400"
  },
  {
    "name": "Iced Latte",
    "price": 414.17,
    "category": "Drink",
    "description": "Cool off with our iced latte, a refreshing blend of chilled espresso and creamy milk poured over ice, offering a smooth and balanced coffee flavor that’s perfect for a warm day or a quick pick-me-up.",
    "ingredients": ["coffee", "milk", "ice"],
    "tags": ["coffee", "cold"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Flavor Syrup", "price": 62.25, "maxQuantity": 2 },
      { "name": "Extra Milk", "price": 41.5, "maxQuantity": 2 }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=400"
  },
  {
    "name": "Mango Smoothie",
    "price": 455.67,
    "category": "Drink",
    "description": "Our mango smoothie is a tropical delight, blending sweet, ripe mangoes with creamy yogurt and a touch of ice for a thick, refreshing drink that bursts with fruity flavor, perfect for a healthy and delicious treat.",
    "ingredients": ["mango", "yogurt", "ice"],
    "tags": ["fruit", "cold"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Banana", "price": 83.0, "maxQuantity": 2 },
      { "name": "Extra Yogurt", "price": 62.25, "maxQuantity": 2 }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1619898804188-e7bad4bd2127?q=80&w=400"
  },
  {
    "name": "Green Tea",
    "price": 289.67,
    "category": "Drink",
    "description": "Refresh with our green tea, available hot or iced, brewed from high-quality leaves for a light, earthy flavor with subtle grassy notes, offering a healthy and calming beverage that’s perfect any time of day.",
    "ingredients": ["green tea", "water"],
    "tags": ["tea", "healthy"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Honey", "price": 41.5, "maxQuantity": 2 },
      { "name": "Make Iced", "price": 0.0, "maxQuantity": 1 }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1606377695906-236fdfcef767?q=80&w=400"
  },
  {
    "name": "Lemonade",
    "price": 331.17,
    "category": "Drink",
    "description": "Our freshly squeezed lemonade is a crisp and invigorating drink, made with ripe lemons, a touch of sugar, and a hint of fresh mint, served over ice for a zesty and refreshing beverage that’s perfect for cooling off.",
    "ingredients": ["lemon", "sugar", "water", "mint"],
    "tags": ["citrus", "cold"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Strawberry", "price": 83.0, "maxQuantity": 2 },
      { "name": "Extra Mint", "price": 41.5, "maxQuantity": 2 }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1507281549113-b03992dcddfd?q=80&w=400"
  },
  {
    "name": "Craft Soda",
    "price": 372.67,
    "category": "Drink",
    "description": "Enjoy our craft soda, a locally made artisanal beverage with natural flavors and just the right amount of fizz, served chilled for a refreshing and unique drink that’s a delightful alternative to traditional sodas.",
    "ingredients": ["carbonated water", "sugar", "natural flavors"],
    "tags": ["soda", "refreshing"],
    "availability": { "isAvailable": true },
    "customizations": [{ "name": "Add Ice", "price": 0.0, "maxQuantity": 1 }],
    "imageUrl": "https://plus.unsplash.com/premium_photo-1681487655849-f25f861ff78b?q=80&w=400"
  },
  {
    "name": "Hot Chocolate",
    "price": 356.07,
    "category": "Drink",
    "description": "Warm up with our rich hot chocolate, made with premium cocoa, steamed milk, and a touch of sugar, topped with a generous dollop of whipped cream, offering a cozy and indulgent drink that’s perfect for chilly days.",
    "ingredients": ["cocoa", "milk", "sugar"],
    "tags": ["chocolate", "hot"],
    "availability": { "isAvailable": true },
    "customizations": [
      { "name": "Add Marshmallows", "price": 41.5, "maxQuantity": 2 },
      { "name": "Extra Whipped Cream", "price": 62.25, "maxQuantity": 2 }
    ],
    "imageUrl": "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=400"
  }
]