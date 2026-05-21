/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  subCategory?: string;
  isVeg?: boolean;
  image?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // Chef'S Special
  { id: 'cs1', name: 'Paneer Shabnami [750 Ml]', description: 'Chef\'s special rich paneer preparation.', price: '₹599', category: 'Chef\'S Special', isVeg: true },
  { id: 'cs2', name: 'Paneer Dilruba [750 Ml]', description: 'Exquisite paneer in a signature gravy.', price: '₹635', category: 'Chef\'S Special', isVeg: true },
  { id: 'cs3', name: 'Mushroom Dilruba [750 Ml]', description: 'Fresh mushrooms in a cosmic special blend.', price: '₹659', category: 'Chef\'S Special', isVeg: true },
  { id: 'cs4', name: 'Paneer Pasanda [750 Ml]', description: 'Stuffed paneer in a rich, creamy sauce.', price: '₹659', category: 'Chef\'S Special', isVeg: true },
  { id: 'cs5', name: 'Chicken Changezi [4 Pieces]', description: 'Authentic Mughlai style chicken.', price: '₹599', category: 'Chef\'S Special', isVeg: false },
  { id: 'cs6', name: 'Chicken Shahjahani [4 Pieces]', description: 'Royal chicken preparation with rich spices.', price: '₹599', category: 'Chef\'S Special', isVeg: false },
  { id: 'cs7', name: 'Chicken Bhuna [4 Pieces]', description: 'Slow-cooked chicken in thick aromatic gravy.', price: '₹719', category: 'Chef\'S Special', isVeg: false },
  { id: 'cs8', name: 'Murgh Musallam Chicken [8 Pieces]', description: 'Whole chicken roasted with spices and stuffed.', price: '₹959', category: 'Chef\'S Special', isVeg: false },

  // Starters - Veg
  { id: 'sv1', name: 'Crispy Baby Corn Chilli [500 Ml]', description: 'Tender baby corn deep fried and tossed in spices.', price: '₹323', category: 'Starters', subCategory: 'Veg Starters', isVeg: true },
  { id: 'sv2', name: 'Mushroom Chilli Dry [500 Ml]', description: 'Crispy mushroom tossed with chillies.', price: '₹323', category: 'Starters', subCategory: 'Veg Starters', isVeg: true },
  { id: 'sv3', name: 'Paneer Chilli Dry [8 Pieces]', description: 'Classic paneer chilli dry version.', price: '₹323', category: 'Starters', subCategory: 'Veg Starters', isVeg: true },
  { id: 'sv4', name: 'Veg Crispy [500 Ml]', description: 'Assorted vegetables fried until golden.', price: '₹227', category: 'Starters', subCategory: 'Veg Starters', isVeg: true },
  { id: 'sv5', name: 'Paneer 65 [12 Pieces]', description: 'Spicy, deep-fried paneer cubes.', price: '₹359', category: 'Starters', subCategory: 'Veg Starters', isVeg: true },
  { id: 'sv6', name: 'American Corn [500 Ml]', description: 'Stir-fried sweet corn with herbs.', price: '₹239', category: 'Starters', subCategory: 'Veg Starters', isVeg: true },

  // Starters - Non Veg
  { id: 'sn1', name: 'Crispy Anda [500 Ml]', description: 'Crispy fried egg starter.', price: '₹239', category: 'Starters', subCategory: 'Non Veg Starters', isVeg: false },
  { id: 'sn2', name: 'Chicken Chilli Dry [8 Pieces]', description: 'Succulent chicken in spicy chilli sauce.', price: '₹359', category: 'Starters', subCategory: 'Non Veg Starters', isVeg: false },
  { id: 'sn3', name: 'Chicken 65 [8 Pieces]', description: 'Deep-fried spicy chicken cubes.', price: '₹347', category: 'Starters', subCategory: 'Non Veg Starters', isVeg: false },
  { id: 'sn4', name: 'Chicken Lollipop [8 Pieces]', description: 'Traditional chicken wings starter.', price: '₹479', category: 'Starters', subCategory: 'Non Veg Starters', isVeg: false },

  // Tandoori Starters
  { id: 'st1', name: 'Paneer Tikka [8 Pieces]', description: 'Clay oven roasted paneer cubes.', price: '₹419', category: 'Starters', subCategory: 'Tandoori Starters', isVeg: true },
  { id: 'st2', name: 'Tandoori Chicken', description: 'Whole chicken roasted in tandoor.', price: '₹399', category: 'Starters', subCategory: 'Tandoori Starters', isVeg: false },
  { id: 'st3', name: 'Chicken Malai Tikka Kebab [8 Pieces]', description: 'Creamy chicken kebab roasted to perfection.', price: '₹479', category: 'Starters', subCategory: 'Tandoori Starters', isVeg: false },

  // Main Course - Veg
  { id: 'mv1', name: 'Dal Tadka [500 Ml]', description: 'Yellow lentils tempered with ghee and spices.', price: '₹263', category: 'Main Course', subCategory: 'Veg Main Course', isVeg: true },
  { id: 'mv2', name: 'Shahi Paneer [750 Ml]', description: 'Rich and creamy paneer in white gravy.', price: '₹539', category: 'Main Course', subCategory: 'Veg Main Course', isVeg: true },
  { id: 'mv3', name: 'Paneer Butter Masala [750 Ml]', description: 'Classic paneer butter masala.', price: '₹395', category: 'Main Course', subCategory: 'Veg Main Course', isVeg: true },
  { id: 'mv4', name: 'Paneer Lababdar [750 Ml]', description: 'Creamy paneer in tangy tomato gravy.', price: '₹419', category: 'Main Course', subCategory: 'Veg Main Course', isVeg: true },
  { id: 'mv5', name: 'Mushroom Masala [750 Ml]', description: 'Mushrooms in aromatic indian spices.', price: '₹455', category: 'Main Course', subCategory: 'Veg Main Course', isVeg: true },

  // Main Course - Non Veg
  { id: 'mn1', name: 'Anda Curry [4 Eggs]', description: 'Traditional egg curry.', price: '₹395', category: 'Main Course', subCategory: 'Non Veg Main Course', isVeg: false },
  { id: 'mn2', name: 'Chicken Masala [750 Ml, 4 Pieces]', description: 'Classic chicken masala preparation.', price: '₹551', category: 'Main Course', subCategory: 'Non Veg Main Course', isVeg: false },
  { id: 'mn3', name: 'Chicken Butter Masala [750 Ml, 4 Pieces]', description: 'Creamy tomato-based chicken curry.', price: '₹539', category: 'Main Course', subCategory: 'Non Veg Main Course', isVeg: false },
  { id: 'mn4', name: 'Chicken Dehati', description: 'Village-style rustic chicken curry.', price: '₹443', category: 'Main Course', subCategory: 'Non Veg Main Course', isVeg: false },

  // Biryani & Rice
  { id: 'rb1', name: 'Chicken Dum Biryani [750 Ml]', description: 'Classic slow-cooked chicken biryani.', price: '₹359', category: 'Rice and Biryani', subCategory: 'Biryani', isVeg: false },
  { id: 'rb2', name: 'Veg Pulao [500 Ml]', description: 'Fragrant rice with mixed vegetables.', price: '₹239', category: 'Rice and Biryani', subCategory: 'Rice', isVeg: true },
  { id: 'rb3', name: 'Jeera Rice [500 Ml]', description: 'Cumin flavored Basmati rice.', price: '₹215', category: 'Rice and Biryani', subCategory: 'Rice', isVeg: true },

  // Pizza & Pasta
  { id: 'pp1', name: 'Veggie Delight Pizza [7 Inches]', description: 'Loaded with fresh garden vegetables.', price: '₹263', category: 'Pizza and Pasta', subCategory: 'Pizza', isVeg: true },
  { id: 'pp2', name: 'Chicken Overload Pizza [7 Inches]', description: 'Generous chicken toppings with extra cheese.', price: '₹299', category: 'Pizza and Pasta', subCategory: 'Pizza', isVeg: false },
  { id: 'pp3', name: 'White Sauce Pasta [500 Ml]', description: 'Creamy Alfredo style pasta.', price: '₹299', category: 'Pizza and Pasta', subCategory: 'Pasta', isVeg: true },

  // Beverages & Shakes
  { id: 'bv1', name: 'KitKat Crumble Shake', description: 'Blended KitKat with chocolate syrup.', price: '₹287', category: 'Shakes', isVeg: true },
  { id: 'bv2', name: 'Mint Virgin Mojito', description: 'Refreshing lime and mint blend.', price: '₹203', category: 'Mojito', isVeg: true },
  { id: 'bv3', name: 'Cold Coffee Shake', description: 'Perfectly blended cold brew.', price: '₹299', category: 'Shakes', isVeg: true },
  
  // Breads
  { id: 'br1', name: 'Butter Naan', description: 'Soft leavened bread with butter.', price: '₹54', category: 'Breads', isVeg: true },
  { id: 'br2', name: 'Garlic Naan', description: 'Naan topped with minced garlic and herbs.', price: '₹72', category: 'Breads', isVeg: true },
  { id: 'br3', name: 'Laccha Paratha', description: 'Multi-layered flaky bread.', price: '₹60', category: 'Breads', isVeg: true },
  { id: 'br4', name: 'Tandoori Plain Roti', description: 'Whole wheat bread baked in tandoor.', price: '₹36', category: 'Breads', isVeg: true },

  // Snacks
  { id: 'sk1', name: 'Peri Peri French Fries', description: 'Spicy seasoned golden fries.', price: '₹155', category: 'Snacks', isVeg: true },
  { id: 'sk2', name: 'Crispy Soya Popcorn [25 Pieces]', description: 'Bite-sized crispy soya chunks.', price: '₹203', category: 'Snacks', isVeg: true },
  { id: 'sk3', name: 'Chicken Pakoda [8 Pieces]', description: 'Spicy chicken fritters.', price: '₹299', category: 'Snacks', isVeg: false },
  { id: 'sk4', name: 'Crispy Chicken Strips [500 Ml]', description: 'Succulent fried chicken strips.', price: '₹203', category: 'Snacks', isVeg: false },

  // Pizza (More)
  { id: 'pp4', name: 'Mushroom Pizza [7 Inches]', description: 'Topped with fresh mushrooms and herbs.', price: '₹263', category: 'Pizza and Pasta', subCategory: 'Pizza', isVeg: true },
  { id: 'pp5', name: 'Paneer Peri Peri Pizza [7 Inches]', description: 'Spicy peri peri paneer toppings.', price: '₹263', category: 'Pizza and Pasta', subCategory: 'Pizza', isVeg: true },
  { id: 'pp6', name: 'Chicken Sausage Pizza [7 Inches]', description: 'Classic chicken sausage and cheese.', price: '₹311', category: 'Pizza and Pasta', subCategory: 'Pizza', isVeg: false },

  // Sandwiches
  { id: 'sw1', name: 'Veg Grilled Cheese Sandwich [4 Slices]', description: 'Cheesy vegetable filling grilled to perfection.', price: '₹155', category: 'Sandwiches', isVeg: true },
  { id: 'sw2', name: 'Paneer Tikka Sandwich [4 Slices]', description: 'Stuffed with spicy paneer tikka.', price: '₹227', category: 'Sandwiches', isVeg: true },
  { id: 'sw3', name: 'Chicken Tikka Sandwich [4 Slices]', description: 'Classic chicken tikka filling.', price: '₹263', category: 'Sandwiches', isVeg: false },

  // Momos
  { id: 'mo1', name: 'Veg Steamed Momos [6 Pieces]', description: 'Authentic steamed vegetable momos.', price: '₹131', category: 'Momos', isVeg: true },
  { id: 'mo2', name: 'Paneer Steamed Momos [6 Pieces]', description: 'Steamed momos with paneer filling.', price: '₹143', category: 'Momos', isVeg: true },
  { id: 'mo3', name: 'Chicken Crispy Momos [6 Pieces]', description: 'Crunchy deep-fried chicken momos.', price: '₹227', category: 'Momos', isVeg: false }
];

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  size: 'small' | 'medium' | 'large';
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    url: "./images/the-lounge.webp",
    size: "large",
    title: "The Lounge"
  },
  {
    id: 'g2',
    url: "./images/gourmet-plating.webp",
    size: "small",
    title: "Gourmet plating"
  },
  {
    id: 'g3',
    url: "./images/sunset-vibes.webp",
    size: "small",
    title: "Sunset Vibes"
  },
  {
    id: 'g4',
    url: "./images/premium-coffee.jpg",
    size: "medium",
    title: "Premium Coffee"
  },
  {
    id: 'g5',
    url: "./images/night-life.webp",
    size: "large",
    title: "Night Life"
  },
  {
    id: 'g6',
    url: "./images/table-for-two.webp",
    size: "small",
    title: "Table for Two"
  }
];

export const BUSINESS_INFO = {
  name: 'Kosmicko Cafe',
  email: 'kosmickocafe@gmail.com',
  phone: '+91 8102754047',
  address: '2nd floor, D188, opp. Patliputra Park, behind Yamaha showroom, Patliputra Colony, Patna, Bihar 800013',
  hours: '1 PM – 11 PM',
  instagram: 'https://www.instagram.com/kosmickocafe',
  zomato: 'https://www.zomato.com/patna/kosmicko-cafe-restaurant-patliputra-colony/book',
  swiggy: 'https://www.swiggy.com/restaurants/kosmicko-cafe-and-restaurant-patliputra-colony-srikrishnapuri-patna-1025361/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve',
  eazydiner: 'https://www.eazydiner.com/patna/kosmicko-cafe-restaurant-pataliputra-patna-701881',
  googleMaps: 'https://www.google.com/maps/place/Kosmicko+Cafe+%26+Restaurant/@25.6267567,85.0346476,13z/data=!4m10!1m2!2m1!1s2nd+floor,+D188,+opp.+Patliputra+Park,+behind+Yamaha+showroom,+Patliputra+Colony,+Patna,+Bihar+800013!3m6!1s0x39ed5950467b0537:0x8867bdf1de9ea30b!8m2!3d25.6267567!4d85.1108653!15sCmUybmQgZmxvb3IsIEQxODgsIG9wcC4gUGF0bGlwdXRyYSBQYXJrLCBiZWhpbmQgWWFtYWhhIHNob3dyb29tLCBQYXRsaXB1dHJhIENvbG9ueSwgUGF0bmEsIEJpaGFyIDgwMDAxMyIDiAEBWmAiXjJuZCBmbG9vciBkMTg4IG9wcCBwYXRsaXB1dHJhIHBhcmsgYmVoaW5kIHlhbWFoYSBzaG93cm9vbSBwYXRsaXB1dHJhIGNvbG9ueSBwYXRuYSBiaWhhciA4MDAwMTOSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11xkmfq1_5?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D'
};
