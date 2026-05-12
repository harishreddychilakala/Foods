import chickenPickleImage from '../images/Chicken-Pickle.jpg'
import muttonKheemaImage from '../images/Mutton Kheema.png'
import gonguraChickenPickleImage from '../images/Gongura Chicken pickle.png'
import prawnPickleImage from '../images/Prawn pickle.png'
import mangoPickleImage from '../images/Mango Pickle.png'
import tomatoPickleImage from '../images/Tomoto pickle.png'
import rayalaseemaGroundNutPowderImage from '../images/Rayalaseema Ground nut Powder.png'
import flaxseedPowderImage from '../images/Flaxseed Powder.png'

export const products = [
  {
    id: 'chicken-250g',
    name: 'Chicken Pickle',
    size: '250g',
    price: '₹249',
    image: chickenPickleImage,
    description:
      'Experience the bold and authentic taste of Andhra with our traditional Andhra Style Chicken Pickle.',
    details: {
      productInfo:
        'Prepared using juicy, tender chicken pieces and a rich blend of fiery Andhra spices, this pickle delivers that signature spicy kick and deep flavor that Andhra cuisine is famous for. Every batch is made using a time-tested homemade recipe, slow-cooked in oil with fresh garlic, curry leaves, and handpicked masalas to bring out a strong, mouth-watering aroma and taste. Why it is special: Authentic Andhra-style spicy flavor, made with fresh high-quality chicken, loaded with garlic and traditional spices, homemade small batch preparation, and no artificial preservatives.',
      ingredients: [
        'Tender chicken pieces',
        'Cold-pressed gingelly oil',
        'Guntur red chilli, turmeric, and coriander',
        'Garlic, ginger, mustard, and fenugreek',
        'Sea salt and traditional Andhra spice blend'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹249' },
      { size: '500g', price: '₹399' },
      { size: '1kg', price: '₹799' }
    ],
    bonelessPricing: [
      { size: '250g', price: '₹299' },
      { size: '500g', price: '₹479' },
      { size: '1kg', price: '₹949' }
    ]
  },
  {
    id: 'chicken-500g',
    name: 'Chicken Pickle',
    size: '500g',
    price: '₹399',
    image: chickenPickleImage,
    description:
      'Experience the bold and authentic taste of Andhra with our traditional Andhra Style Chicken Pickle.',
    details: {
      productInfo:
        'Prepared using juicy, tender chicken pieces and a rich blend of fiery Andhra spices, this pickle delivers that signature spicy kick and deep flavor that Andhra cuisine is famous for. Every batch is made using a time-tested homemade recipe, slow-cooked in oil with fresh garlic, curry leaves, and handpicked masalas to bring out a strong, mouth-watering aroma and taste. Why it is special: Authentic Andhra-style spicy flavor, made with fresh high-quality chicken, loaded with garlic and traditional spices, homemade small batch preparation, and no artificial preservatives.',
      ingredients: [
        'Premium chicken pieces',
        'Roasted Guntur chilli and coriander masala',
        'Garlic, ginger, curry leaves, and mustard',
        'Cold-pressed oil with natural spice extracts',
        'No artificial colors or flavor boosters'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹249' },
      { size: '500g', price: '₹399' },
      { size: '1kg', price: '₹799' }
    ],
    bonelessPricing: [
      { size: '250g', price: '₹299' },
      { size: '500g', price: '₹479' },
      { size: '1kg', price: '₹949' }
    ]
  },
  {
    id: 'chicken-1kg',
    name: 'Chicken Pickle',
    size: '1kg',
    price: '₹799',
    image: chickenPickleImage,
    description:
      'Experience the bold and authentic taste of Andhra with our traditional Andhra Style Chicken Pickle.',
    details: {
      productInfo:
        'Prepared using juicy, tender chicken pieces and a rich blend of fiery Andhra spices, this pickle delivers that signature spicy kick and deep flavor that Andhra cuisine is famous for. Every batch is made using a time-tested homemade recipe, slow-cooked in oil with fresh garlic, curry leaves, and handpicked masalas to bring out a strong, mouth-watering aroma and taste. Why it is special: Authentic Andhra-style spicy flavor, made with fresh high-quality chicken, loaded with garlic and traditional spices, homemade small batch preparation, and no artificial preservatives.',
      ingredients: [
        'Farm-fresh chicken',
        'Andhra-style Guntur chilli and coriander mix',
        'Fresh garlic, ginger, and curry leaves',
        'Cold-pressed gingelly oil',
        'Homestyle spice tempering with mustard and fenugreek'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹249' },
      { size: '500g', price: '₹399' },
      { size: '1kg', price: '₹799' }
    ],
    bonelessPricing: [
      { size: '250g', price: '₹299' },
      { size: '500g', price: '₹479' },
      { size: '1kg', price: '₹949' }
    ]
  },
  {
    id: 'mutton-kheema-250g',
    name: 'Mutton Kheema',
    size: '250g',
    price: '₹479',
    image: muttonKheemaImage,
    description:
      'Savor the rich, authentic taste of our homemade Andhra-style Mutton Kheema, prepared with premium quality minced mutton and traditional spices.',
    details: {
      productInfo:
        'Our Mutton Kheema is crafted using the finest quality minced mutton, slow-cooked with a perfect blend of aromatic Andhra spices. Each batch is prepared fresh using traditional home-style cooking methods that lock in the natural flavors and juices. The kheema is cooked in cold-pressed oil with fresh ginger-garlic paste, onions, tomatoes, and a signature mix of roasted spices including coriander, cumin, and garam masala. Perfect as a side dish with rice, roti, or paratha. Why it is special: Authentic Andhra home-style preparation, made with premium quality mutton, rich in protein and flavor, slow-cooked for tender texture, no artificial preservatives or additives, ready to heat and eat.',
      ingredients: [
        'Premium quality minced mutton',
        'Cold-pressed gingelly oil',
        'Fresh ginger-garlic paste',
        'Onions, tomatoes, and curry leaves',
        'Andhra spice blend: coriander, cumin, turmeric, red chilli, garam masala',
        'Sea salt and natural herbs'
      ]
    },
    category: 'Ready to Eat',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹479' },
      { size: '500g', price: '₹899' },
      { size: '1kg', price: '₹1799' }
    ]
  },
  {
    id: 'mutton-kheema-500g',
    name: 'Mutton Kheema',
    size: '500g',
    price: '₹899',
    image: muttonKheemaImage,
    description:
      'Savor the rich, authentic taste of our homemade Andhra-style Mutton Kheema, prepared with premium quality minced mutton and traditional spices.',
    details: {
      productInfo:
        'Our Mutton Kheema is crafted using the finest quality minced mutton, slow-cooked with a perfect blend of aromatic Andhra spices. Each batch is prepared fresh using traditional home-style cooking methods that lock in the natural flavors and juices. The kheema is cooked in cold-pressed oil with fresh ginger-garlic paste, onions, tomatoes, and a signature mix of roasted spices including coriander, cumin, and garam masala. Perfect as a side dish with rice, roti, or paratha. Why it is special: Authentic Andhra home-style preparation, made with premium quality mutton, rich in protein and flavor, slow-cooked for tender texture, no artificial preservatives or additives, ready to heat and eat.',
      ingredients: [
        'Premium quality minced mutton',
        'Cold-pressed gingelly oil',
        'Fresh ginger-garlic paste',
        'Onions, tomatoes, and curry leaves',
        'Andhra spice blend: coriander, cumin, turmeric, red chilli, garam masala',
        'Sea salt and natural herbs'
      ]
    },
    category: 'Ready to Eat',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹479' },
      { size: '500g', price: '₹899' },
      { size: '1kg', price: '₹1799' }
    ]
  },
  {
    id: 'mutton-kheema-1kg',
    name: 'Mutton Kheema',
    size: '1kg',
    price: '₹1799',
    image: muttonKheemaImage,
    description:
      'Savor the rich, authentic taste of our homemade Andhra-style Mutton Kheema, prepared with premium quality minced mutton and traditional spices.',
    details: {
      productInfo:
        'Our Mutton Kheema is crafted using the finest quality minced mutton, slow-cooked with a perfect blend of aromatic Andhra spices. Each batch is prepared fresh using traditional home-style cooking methods that lock in the natural flavors and juices. The kheema is cooked in cold-pressed oil with fresh ginger-garlic paste, onions, tomatoes, and a signature mix of roasted spices including coriander, cumin, and garam masala. Perfect as a side dish with rice, roti, or paratha. Why it is special: Authentic Andhra home-style preparation, made with premium quality mutton, rich in protein and flavor, slow-cooked for tender texture, no artificial preservatives or additives, ready to heat and eat.',
      ingredients: [
        'Premium quality minced mutton',
        'Cold-pressed gingelly oil',
        'Fresh ginger-garlic paste',
        'Onions, tomatoes, and curry leaves',
        'Andhra spice blend: coriander, cumin, turmeric, red chilli, garam masala',
        'Sea salt and natural herbs'
      ]
    },
    category: 'Ready to Eat',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹479' },
      { size: '500g', price: '₹899' },
      { size: '1kg', price: '₹1799' }
    ]
  },
  {
    id: 'gongura-chicken-250g',
    name: 'Gongura Boneless Chicken Pickle',
    size: '250g',
    price: '₹329',
    image: gonguraChickenPickleImage,
    description:
      'Savor the tangy and delicious Gongura Boneless Chicken Pickle, a signature Andhra delicacy prepared with boneless chicken and traditional sour leaves.',
    details: {
      productInfo:
        'Our Gongura Boneless Chicken Pickle is crafted using premium boneless chicken pieces infused with tender gongura (sorrel) leaves, creating a unique tangy flavor profile. Prepared using traditional Andhra methods with a perfect blend of spices, mustard, and cold-pressed oil. Every batch is made fresh in small quantities to ensure maximum aroma and authentic taste. The boneless preparation makes it tender and convenient to enjoy. Why it is special: Authentic Andhra gongura flavor, made with premium boneless chicken, tangy and distinctive taste, homemade small batch preparation, no artificial preservatives, convenient boneless format.',
      ingredients: [
        'Premium boneless chicken pieces',
        'Fresh gongura (sorrel) leaves',
        'Cold-pressed gingelly oil',
        'Mustard seeds, fenugreek, and curry leaves',
        'Guntur red chilli and traditional Andhra spices',
        'Sea salt and natural herbs'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹329' },
      { size: '500g', price: '₹599' },
      { size: '1kg', price: '₹1099' }
    ]
  },
  {
    id: 'gongura-chicken-500g',
    name: 'Gongura Boneless Chicken Pickle',
    size: '500g',
    price: '₹599',
    image: gonguraChickenPickleImage,
    description:
      'Savor the tangy and delicious Gongura Boneless Chicken Pickle, a signature Andhra delicacy prepared with boneless chicken and traditional sour leaves.',
    details: {
      productInfo:
        'Our Gongura Boneless Chicken Pickle is crafted using premium boneless chicken pieces infused with tender gongura (sorrel) leaves, creating a unique tangy flavor profile. Prepared using traditional Andhra methods with a perfect blend of spices, mustard, and cold-pressed oil. Every batch is made fresh in small quantities to ensure maximum aroma and authentic taste. The boneless preparation makes it tender and convenient to enjoy. Why it is special: Authentic Andhra gongura flavor, made with premium boneless chicken, tangy and distinctive taste, homemade small batch preparation, no artificial preservatives, convenient boneless format.',
      ingredients: [
        'Premium boneless chicken pieces',
        'Fresh gongura (sorrel) leaves',
        'Cold-pressed gingelly oil',
        'Mustard seeds, fenugreek, and curry leaves',
        'Guntur red chilli and traditional Andhra spices',
        'Sea salt and natural herbs'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹329' },
      { size: '500g', price: '₹599' },
      { size: '1kg', price: '₹1099' }
    ]
  },
  {
    id: 'gongura-chicken-1kg',
    name: 'Gongura Boneless Chicken Pickle',
    size: '1kg',
    price: '₹1099',
    image: gonguraChickenPickleImage,
    description:
      'Savor the tangy and delicious Gongura Boneless Chicken Pickle, a signature Andhra delicacy prepared with boneless chicken and traditional sour leaves.',
    details: {
      productInfo:
        'Our Gongura Boneless Chicken Pickle is crafted using premium boneless chicken pieces infused with tender gongura (sorrel) leaves, creating a unique tangy flavor profile. Prepared using traditional Andhra methods with a perfect blend of spices, mustard, and cold-pressed oil. Every batch is made fresh in small quantities to ensure maximum aroma and authentic taste. The boneless preparation makes it tender and convenient to enjoy. Why it is special: Authentic Andhra gongura flavor, made with premium boneless chicken, tangy and distinctive taste, homemade small batch preparation, no artificial preservatives, convenient boneless format.',
      ingredients: [
        'Premium boneless chicken pieces',
        'Fresh gongura (sorrel) leaves',
        'Cold-pressed gingelly oil',
        'Mustard seeds, fenugreek, and curry leaves',
        'Guntur red chilli and traditional Andhra spices',
        'Sea salt and natural herbs'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹329' },
      { size: '500g', price: '₹599' },
      { size: '1kg', price: '₹1099' }
    ]
  },
  {
    id: 'prawn-250g',
    name: 'Prawn Pickle',
    size: '250g',
    price: '₹489',
    image: prawnPickleImage,
    description:
      'Delight in the exquisite taste of our homemade Prawn Pickle, prepared with premium fresh prawns and traditional Andhra spices.',
    details: {
      productInfo:
        'Our Prawn Pickle is crafted using the finest quality fresh prawns, infused with a rich blend of Andhra spices and cold-pressed oil. Each batch is prepared fresh in small quantities to preserve the authentic flavor and aroma. The prawns are slow-cooked with a perfect balance of spices, mustard seeds, curry leaves, and traditional ingredients to create a unique, mouth-watering delicacy. Perfect as a side dish or appetizer. Why it is special: Premium quality fresh prawns, authentic Andhra spice blend, homemade small batch preparation, tangy and flavorful, no artificial preservatives, convenient portioning.',
      ingredients: [
        'Premium fresh prawns',
        'Cold-pressed gingelly oil',
        'Guntur red chilli and coriander',
        'Mustard seeds, fenugreek, and curry leaves',
        'Fresh ginger, garlic, and onions',
        'Sea salt and traditional Andhra spices'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹489' },
      { size: '500g', price: '₹919' }
    ]
  },
  {
    id: 'prawn-500g',
    name: 'Prawn Pickle',
    size: '500g',
    price: '₹919',
    image: prawnPickleImage,
    description:
      'Delight in the exquisite taste of our homemade Prawn Pickle, prepared with premium fresh prawns and traditional Andhra spices.',
    details: {
      productInfo:
        'Our Prawn Pickle is crafted using the finest quality fresh prawns, infused with a rich blend of Andhra spices and cold-pressed oil. Each batch is prepared fresh in small quantities to preserve the authentic flavor and aroma. The prawns are slow-cooked with a perfect balance of spices, mustard seeds, curry leaves, and traditional ingredients to create a unique, mouth-watering delicacy. Perfect as a side dish or appetizer. Why it is special: Premium quality fresh prawns, authentic Andhra spice blend, homemade small batch preparation, tangy and flavorful, no artificial preservatives, convenient portioning.',
      ingredients: [
        'Premium fresh prawns',
        'Cold-pressed gingelly oil',
        'Guntur red chilli and coriander',
        'Mustard seeds, fenugreek, and curry leaves',
        'Fresh ginger, garlic, and onions',
        'Sea salt and traditional Andhra spices'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹489' },
      { size: '500g', price: '₹919' }
    ]
  },
  {
    id: 'mango-pickle-250g',
    name: 'Mango Pickle',
    size: '250g',
    price: '₹149',
    image: mangoPickleImage,
    description:
      'Enjoy the classic homemade taste of Mango Pickle made with traditional Andhra spices and fresh mango pieces.',
    details: {
      productInfo:
        'Our Mango Pickle is prepared using handpicked raw mango pieces blended with a rich Andhra-style spice mix and cold-pressed oil. The pickle is made in small batches to maintain the authentic homemade flavor, bright aroma, and perfect balance of tanginess and heat. It is a timeless favorite that pairs well with rice, curd rice, and dosa. Why it is special: Traditional homemade recipe, fresh raw mango pieces, balanced tangy and spicy flavor, small batch preparation, no artificial preservatives.',
      ingredients: [
        'Raw mango pieces',
        'Cold-pressed gingelly oil',
        'Guntur red chilli and turmeric',
        'Mustard seeds, fenugreek, and curry leaves',
        'Sea salt and traditional Andhra spice blend'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹149' },
      { size: '500g', price: '₹259' },
      { size: '1kg', price: '₹499' }
    ]
  },
  {
    id: 'mango-pickle-500g',
    name: 'Mango Pickle',
    size: '500g',
    price: '₹259',
    image: mangoPickleImage,
    description:
      'Enjoy the classic homemade taste of Mango Pickle made with traditional Andhra spices and fresh mango pieces.',
    details: {
      productInfo:
        'Our Mango Pickle is prepared using handpicked raw mango pieces blended with a rich Andhra-style spice mix and cold-pressed oil. The pickle is made in small batches to maintain the authentic homemade flavor, bright aroma, and perfect balance of tanginess and heat. It is a timeless favorite that pairs well with rice, curd rice, and dosa. Why it is special: Traditional homemade recipe, fresh raw mango pieces, balanced tangy and spicy flavor, small batch preparation, no artificial preservatives.',
      ingredients: [
        'Raw mango pieces',
        'Cold-pressed gingelly oil',
        'Guntur red chilli and turmeric',
        'Mustard seeds, fenugreek, and curry leaves',
        'Sea salt and traditional Andhra spice blend'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹149' },
      { size: '500g', price: '₹259' },
      { size: '1kg', price: '₹499' }
    ]
  },
  {
    id: 'mango-pickle-1kg',
    name: 'Mango Pickle',
    size: '1kg',
    price: '₹499',
    image: mangoPickleImage,
    description:
      'Enjoy the classic homemade taste of Mango Pickle made with traditional Andhra spices and fresh mango pieces.',
    details: {
      productInfo:
        'Our Mango Pickle is prepared using handpicked raw mango pieces blended with a rich Andhra-style spice mix and cold-pressed oil. The pickle is made in small batches to maintain the authentic homemade flavor, bright aroma, and perfect balance of tanginess and heat. It is a timeless favorite that pairs well with rice, curd rice, and dosa. Why it is special: Traditional homemade recipe, fresh raw mango pieces, balanced tangy and spicy flavor, small batch preparation, no artificial preservatives.',
      ingredients: [
        'Raw mango pieces',
        'Cold-pressed gingelly oil',
        'Guntur red chilli and turmeric',
        'Mustard seeds, fenugreek, and curry leaves',
        'Sea salt and traditional Andhra spice blend'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹149' },
      { size: '500g', price: '₹259' },
      { size: '1kg', price: '₹499' }
    ]
  },
  {
    id: 'tomato-pickle-250g',
    name: 'Tomoto Pickle',
    size: '250g',
    price: '₹149',
    image: tomatoPickleImage,
    description:
      'Taste the rich homemade flavor of Tomoto Pickle made with ripe tomatoes and traditional Andhra spices.',
    details: {
      productInfo:
        'Our Tomoto Pickle is prepared using ripe tomatoes cooked with aromatic Andhra spices and cold-pressed oil. The pickle is made in small batches to keep the flavor fresh, tangy, and perfectly balanced with spice. It is a delicious accompaniment to rice, dosa, and curd rice. Why it is special: Homemade recipe, fresh ripe tomatoes, tangy and spicy taste, small batch preparation, no artificial preservatives.',
      ingredients: [
        'Ripe tomatoes',
        'Cold-pressed gingelly oil',
        'Guntur red chilli and turmeric',
        'Mustard seeds, fenugreek, and curry leaves',
        'Sea salt and traditional Andhra spice blend'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹149' },
      { size: '500g', price: '₹249' },
      { size: '1kg', price: '₹499' }
    ]
  },
  {
    id: 'tomato-pickle-500g',
    name: 'Tomoto Pickle',
    size: '500g',
    price: '₹249',
    image: tomatoPickleImage,
    description:
      'Taste the rich homemade flavor of Tomoto Pickle made with ripe tomatoes and traditional Andhra spices.',
    details: {
      productInfo:
        'Our Tomoto Pickle is prepared using ripe tomatoes cooked with aromatic Andhra spices and cold-pressed oil. The pickle is made in small batches to keep the flavor fresh, tangy, and perfectly balanced with spice. It is a delicious accompaniment to rice, dosa, and curd rice. Why it is special: Homemade recipe, fresh ripe tomatoes, tangy and spicy taste, small batch preparation, no artificial preservatives.',
      ingredients: [
        'Ripe tomatoes',
        'Cold-pressed gingelly oil',
        'Guntur red chilli and turmeric',
        'Mustard seeds, fenugreek, and curry leaves',
        'Sea salt and traditional Andhra spice blend'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹149' },
      { size: '500g', price: '₹249' },
      { size: '1kg', price: '₹499' }
    ]
  },
  {
    id: 'tomato-pickle-1kg',
    name: 'Tomoto Pickle',
    size: '1kg',
    price: '₹499',
    image: tomatoPickleImage,
    description:
      'Taste the rich homemade flavor of Tomoto Pickle made with ripe tomatoes and traditional Andhra spices.',
    details: {
      productInfo:
        'Our Tomoto Pickle is prepared using ripe tomatoes cooked with aromatic Andhra spices and cold-pressed oil. The pickle is made in small batches to keep the flavor fresh, tangy, and perfectly balanced with spice. It is a delicious accompaniment to rice, dosa, and curd rice. Why it is special: Homemade recipe, fresh ripe tomatoes, tangy and spicy taste, small batch preparation, no artificial preservatives.',
      ingredients: [
        'Ripe tomatoes',
        'Cold-pressed gingelly oil',
        'Guntur red chilli and turmeric',
        'Mustard seeds, fenugreek, and curry leaves',
        'Sea salt and traditional Andhra spice blend'
      ]
    },
    category: 'Pickles',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹149' },
      { size: '500g', price: '₹249' },
      { size: '1kg', price: '₹499' }
    ]
  },
  {
    id: 'ground-nut-powder-250g',
    name: 'Rayalaseema Ground Nut Powder',
    size: '250g',
    price: '₹129',
    image: rayalaseemaGroundNutPowderImage,
    description:
      'Enjoy the rich and earthy taste of Rayalaseema Ground Nut Powder, made with roasted peanuts and authentic Andhra spices.',
    details: {
      productInfo:
        'Our Rayalaseema Ground Nut Powder is prepared using carefully roasted ground nuts blended with red chilli, garlic, salt, and a classic Andhra spice profile. It is dry-roasted in small batches to preserve the aroma and natural nutty flavor, making it a perfect side for idli, dosa, rice, and snacks. Why it is special: Traditional Rayalaseema taste, roasted in small batches, rich nutty flavor, no artificial preservatives, versatile accompaniment for meals.',
      ingredients: [
        'Roasted ground nuts',
        'Red chilli',
        'Garlic',
        'Curry leaves',
        'Sea salt',
        'Traditional Andhra spice blend'
      ]
    },
    category: 'Ready to Eat',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹129' },
      { size: '500g', price: '₹249' },
      { size: '1kg', price: '₹489' }
    ]
  },
  {
    id: 'ground-nut-powder-500g',
    name: 'Rayalaseema Ground Nut Powder',
    size: '500g',
    price: '₹249',
    image: rayalaseemaGroundNutPowderImage,
    description:
      'Enjoy the rich and earthy taste of Rayalaseema Ground Nut Powder, made with roasted peanuts and authentic Andhra spices.',
    details: {
      productInfo:
        'Our Rayalaseema Ground Nut Powder is prepared using carefully roasted ground nuts blended with red chilli, garlic, salt, and a classic Andhra spice profile. It is dry-roasted in small batches to preserve the aroma and natural nutty flavor, making it a perfect side for idli, dosa, rice, and snacks. Why it is special: Traditional Rayalaseema taste, roasted in small batches, rich nutty flavor, no artificial preservatives, versatile accompaniment for meals.',
      ingredients: [
        'Roasted ground nuts',
        'Red chilli',
        'Garlic',
        'Curry leaves',
        'Sea salt',
        'Traditional Andhra spice blend'
      ]
    },
    category: 'Ready to Eat',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹129' },
      { size: '500g', price: '₹249' },
      { size: '1kg', price: '₹489' }
    ]
  },
  {
    id: 'ground-nut-powder-1kg',
    name: 'Rayalaseema Ground Nut Powder',
    size: '1kg',
    price: '₹489',
    image: rayalaseemaGroundNutPowderImage,
    description:
      'Enjoy the rich and earthy taste of Rayalaseema Ground Nut Powder, made with roasted peanuts and authentic Andhra spices.',
    details: {
      productInfo:
        'Our Rayalaseema Ground Nut Powder is prepared using carefully roasted ground nuts blended with red chilli, garlic, salt, and a classic Andhra spice profile. It is dry-roasted in small batches to preserve the aroma and natural nutty flavor, making it a perfect side for idli, dosa, rice, and snacks. Why it is special: Traditional Rayalaseema taste, roasted in small batches, rich nutty flavor, no artificial preservatives, versatile accompaniment for meals.',
      ingredients: [
        'Roasted ground nuts',
        'Red chilli',
        'Garlic',
        'Curry leaves',
        'Sea salt',
        'Traditional Andhra spice blend'
      ]
    },
    category: 'Ready to Eat',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹129' },
      { size: '500g', price: '₹249' },
      { size: '1kg', price: '₹489' }
    ]
  },
  {
    id: 'flaxseed-powder-250g',
    name: 'Flaxseed Powder',
    size: '250g',
    price: '₹159',
    image: flaxseedPowderImage,
    description:
      'Add a wholesome and nutritious touch to your meals with our fresh Flaxseed Powder.',
    details: {
      productInfo:
        'Our Flaxseed Powder is made from carefully roasted and ground flaxseeds to preserve its natural nutty flavor and nutritional value. Prepared in small batches, it is a versatile ingredient that can be mixed with rice, chutneys, curd, smoothies, or snacks. Why it is special: Freshly ground, wholesome and nutritious, small batch preparation, rich nutty taste, no artificial preservatives.',
      ingredients: [
        'Roasted flaxseeds'
      ]
    },
    category: 'Ready to Eat',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹159' },
      { size: '500g', price: '₹299' },
      { size: '1kg', price: '₹589' }
    ]
  },
  {
    id: 'flaxseed-powder-500g',
    name: 'Flaxseed Powder',
    size: '500g',
    price: '₹299',
    image: flaxseedPowderImage,
    description:
      'Add a wholesome and nutritious touch to your meals with our fresh Flaxseed Powder.',
    details: {
      productInfo:
        'Our Flaxseed Powder is made from carefully roasted and ground flaxseeds to preserve its natural nutty flavor and nutritional value. Prepared in small batches, it is a versatile ingredient that can be mixed with rice, chutneys, curd, smoothies, or snacks. Why it is special: Freshly ground, wholesome and nutritious, small batch preparation, rich nutty taste, no artificial preservatives.',
      ingredients: [
        'Roasted flaxseeds'
      ]
    },
    category: 'Ready to Eat',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹159' },
      { size: '500g', price: '₹299' },
      { size: '1kg', price: '₹589' }
    ]
  },
  {
    id: 'flaxseed-powder-1kg',
    name: 'Flaxseed Powder',
    size: '1kg',
    price: '₹589',
    image: flaxseedPowderImage,
    description:
      'Add a wholesome and nutritious touch to your meals with our fresh Flaxseed Powder.',
    details: {
      productInfo:
        'Our Flaxseed Powder is made from carefully roasted and ground flaxseeds to preserve its natural nutty flavor and nutritional value. Prepared in small batches, it is a versatile ingredient that can be mixed with rice, chutneys, curd, smoothies, or snacks. Why it is special: Freshly ground, wholesome and nutritious, small batch preparation, rich nutty taste, no artificial preservatives.',
      ingredients: [
        'Roasted flaxseeds'
      ]
    },
    category: 'Ready to Eat',
    stock: 'In Stock',
    pricing: [
      { size: '250g', price: '₹159' },
      { size: '500g', price: '₹299' },
      { size: '1kg', price: '₹589' }
    ]
  }
]
