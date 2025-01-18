import manali from "../images/longtrip/manali.jpg";
import digha from "../images/longtrip/digha.jpg";
import goa from "../images/longtrip/goa.jpg";
import jaisalmer from "../images/longtrip/jaisalmer.jpg";
import alleppey from "../images/longtrip/alleppey.jpg";
import darjeeling from "../images/longtrip/darjeeling.jpg";
import agra from "../images/longtrip/agra.jpg";
import jaipur from "../images/longtrip/jaipur.jpg";
import gujarat from "../images/longtrip/gujarat.jpg";
import munnar from "../images/longtrip/munnar.jpg";
import andaman from "../images/longtrip/andaman.jpg";
export const touristSpots = [
  {
    id: 1,
    name: "Hill Paradise, Manali",
    shortDescription: "Breathtaking views and serene atmosphere.",
    description:
      "Hill Paradise in Manali offers scenic views of snow-capped mountains, lush valleys, adventure activities, and luxury stays.",
    image: manali,
    price: "₹11,271",
    packages: [
      { name: "Base Pack", details: "3 days, 2 nights", price: "₹11,271" },
      {
        name: "Premium Pack",
        details:
          "5 days, 4 nights with guided treks, adventure sports, and candlelight dinner.",
        price: "₹25,499",
      },
    ],
  },
  {
    id: 2,
    name: "Digha Sea Beach",
    shortDescription: "Golden sands and tranquil waves.",
    description:
      "Digha Sea Beach is a popular destination with stunning coastal views, delicious seafood, and a perfect getaway for relaxation.",
    image: digha, // Replace `bg5` with the actual image variable or path
    price: "₹10,000",
    packages: [
      { name: "Base Pack", details: "2 days, 1 night", price: "₹5,000" },
      {
        name: "Premium Pack",
        details:
          "4 days, 3 nights with beachside resort stays, guided local tours, and bonfire nights.",
        price: "₹10,000",
      },
    ],
  },
  {
    id: 3,
    name: "Beach Retreat, Goa",
    shortDescription: "Relax by the shore with luxurious amenities.",
    description:
      "Experience the serene beaches of Goa with beautiful sunsets, vibrant nightlife, water sports, and premium stays.",
    image: goa,
    price: "₹17,499",
    packages: [
      { name: "Base Pack", details: "2 days, 1 night", price: "₹17,499" },
      {
        name: "Premium Pack",
        details:
          "4 days, 3 nights with snorkeling, spa sessions, and private beach dinners.",
        price: "₹40,499",
      },
    ],
  },
  {
    id: 4,
    name: "Desert Safari, Jaisalmer",
    shortDescription: "Explore the golden sands of Rajasthan.",
    description:
      "Discover the rich culture of Rajasthan with camel rides, desert camps, traditional Rajasthani cuisine, and cultural performances.",
    image: jaisalmer,
    price: "₹16,900",
    packages: [
      { name: "Base Pack", details: "2 days, 1 night", price: "₹16,900" },
      {
        name: "Premium Pack",
        details:
          "4 days, 3 nights with luxury tent accommodations, folk dance shows, and private bonfires.",
        price: "₹35,000",
      },
    ],
  },
  {
    id: 5,
    name: "Backwaters, Alleppey",
    shortDescription: "Houseboat cruises and serene backwaters.",
    description:
      "Enjoy a peaceful retreat on houseboats with scenic backwaters, traditional Kerala cuisine, and village tours.",
    image: alleppey,
    price: "₹10,699",
    packages: [
      { name: "Base Pack", details: "2 days, 1 night", price: "₹10,699" },
      {
        name: "Premium Pack",
        details:
          "4 days, 3 nights with a private houseboat, Ayurvedic massages, and a cooking class.",
        price: "₹32,799",
      },
    ],
  },
  {
    id: 6,
    name: "Tea Gardens, Darjeeling",
    shortDescription: "Sip on premium tea amidst picturesque hills.",
    description:
      "Explore lush tea plantations, colonial charm, and scenic views of the Himalayas in Darjeeling.",
    image: darjeeling,
    price: "₹4,999",
    packages: [
      { name: "Base Pack", details: "2 days, 1 night", price: "₹4,999" },
      {
        name: "Premium Pack",
        details:
          "4 days, 3 nights with tea factory tours, heritage train rides, and spa sessions.",
        price: "₹15,499",
      },
    ],
  },
  {
    id: 7,
    name: "Taj Mahal, Agra",
    shortDescription: "Experience the epitome of love and architecture.",
    description:
      "Visit the iconic Taj Mahal, one of the Seven Wonders of the World, and explore Mughal history and local crafts.",
    image: agra,
    price: "₹2,499",
    packages: [
      { name: "Base Pack", details: "1 day", price: "₹2,499" },
      {
        name: "Premium Pack",
        details:
          "2 days, 1 night with VIP Taj Mahal access, Mughal cuisine dinner, and a visit to Agra Fort.",
        price: "₹8,000",
      },
    ],
  },
  {
    id: 8,
    name: "Royal Jaipur",
    shortDescription: "Discover the rich history of the Pink City.",
    description:
      "Explore palaces, forts, and vibrant bazaars in Jaipur, a UNESCO World Heritage City.",
    image: jaipur,
    price: "₹3,550",
    packages: [
      { name: "Base Pack", details: "2 days, 1 night", price: "₹3,550" },
      {
        name: "Premium Pack",
        details:
          "4 days, 3 nights with guided tours, cultural evenings, and luxury stays at heritage hotels.",
        price: "₹20,000",
      },
    ],
  },
  {
    id: 9,
    name: "Rann of Kutch, Gujarat",
    shortDescription: "Witness the magical white desert.",
    description:
      "Experience the grandeur of the salt desert, enjoy cultural performances, and participate in local festivals.",
    image: gujarat,
    price: "₹7,800",
    packages: [
      { name: "Base Pack", details: "2 days, 1 night", price: "₹7,800" },
      {
        name: "Premium Pack",
        details:
          "4 days, 3 nights with night safaris, folk music evenings, and guided tours.",
        price: "₹18,699",
      },
    ],
  },
  {
    id: 10,
    name: "Munnar, Kerala",
    shortDescription: "Explore lush greenery and misty hills.",
    description:
      "Discover scenic tea estates, waterfalls, wildlife sanctuaries, and cozy stays in Munnar.",
    image: munnar,
    price: "₹8,400",
    packages: [
      { name: "Base Pack", details: "2 days, 1 night", price: "₹8,400" },
      {
        name: "Premium Pack",
        details:
          "4 days, 3 nights with luxury villa stays, tea estate tours, and trekking options.",
        price: "₹22,000",
      },
    ],
  },
  {
    id: 11,
    name: "Andaman Islands",
    shortDescription: "Tropical paradise with crystal-clear waters.",
    description:
      "Enjoy pristine beaches, water sports, and marine life in the Andaman Islands.",
    image: andaman,
    price: "₹12,000",
    packages: [
      { name: "Base Pack", details: "3 days, 2 nights", price: "₹12,000" },
      {
        name: "Premium Pack",
        details:
          "5 days, 4 nights with scuba diving, island hopping, and candlelight beach dinners.",
        price: "₹40,000",
      },
    ],
  },
];

export default touristSpots;
