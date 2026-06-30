export const siteInfo = {
  name: "Collier Creek Cabins & Wedding Barn",
  shortName: "Collier Creek",
  eyebrow: "Creekside cabins in Norman, Arkansas",
  location: "Norman, Arkansas near Caddo Gap",
  address: "1199 Liberty Road, Norman, AR, USA",
  phone: "318-393-2552",
  secondaryPhone: "318-393-2551",
  email: "sspmcguire@aol.com",
  hours: "9am - 5pm",
  facebookProof: "Recommended by guests for peaceful creek stays, family trips, and relaxing weekends.",
  minimumStay: "2 night minimum. 3 night minimum on holidays.",
  heroTitle: "A peaceful creekside place to stay, gather, and slow down.",
  heroText:
    "Three cabins, a wedding barn, and five private acres beside clear Collier Creek. Guests come for the water, the porches, the shade trees, the privacy, and the easy feeling of being tucked away near Norman and Caddo Gap.",
  highlightLine:
    "Three creekside cabins, clear water, covered porches, private outdoor space, and a wedding barn in one quiet Arkansas setting.",
  weddingNote: "Weddings book all three cabins inclusive.",
};

export const navLinks = [
  { label: "Cabins", href: "#cabins" },
  { label: "Creek", href: "#creek" },
  { label: "Weddings", href: "#weddings" },
  { label: "Photos", href: "#photos" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const images = {
  hero: "/images/professional/collier-creek-detail.jpg",
  creekHero: "/images/hero/cabin-hero.png",

  collier: "/images/cabins/collier-creek-cabin.png",
  collierTwo: "/images/cabins/collier-creek-cabin-2.png",

  liberty: "/images/cabins/liberty-cabin.png",
  libertyTwo: "/images/cabins/liberty-cabin-2.png",

  caddo: "/images/cabins/caddo-cabin.png",
  caddoTwo: "/images/cabins/caddo-cabin-2.png",

  creek: "/images/gallery/creek-1.jpg",
  grill: "/images/gallery/grill-1.jpg",
  signs: "/images/gallery/signs.jpg",
  sign: "/images/gallery/collier-creek-sign.jpg",

  weddingBarn: "/images/weddings/wedding-barn.jpg",
};

export const propertyStats = [
  "Clear creek access",
  "Covered porches",
  "Dog friendly",
  "Wedding barn",
  "Private acreage",
];

export const cabins = [
  {
    name: "Collier Cabin",
    label: "Master bedroom with loft",
    size: "1276 square feet including the loft",
    sleeps: "Sleeps 7",
    description:
      "Collier Cabin gives guests room to settle in with a master bedroom, loft, full kitchen, living room, dining area, covered deck, and space for seven guests.",
    details: [
      "Master bedroom with loft",
      "Full kitchen",
      "Living and dining area",
      "Covered deck",
      "Sleeps 7",
    ],
    image: images.collier,
    imageTwo: images.collierTwo,
    bookUrl: "https://abnb.me/WptVShUqO8",
  },
  {
    name: "Liberty Cabin",
    label: "Studio cabin with full kitchen",
    size: "650 square feet",
    sleeps: "Sleeps five comfortably",
    description:
      "Liberty Cabin is a comfortable studio cabin with a full kitchen, bathroom with shower, covered deck, picnic table, grills, and an easy walk to the creek.",
    details: [
      "Studio layout",
      "Full kitchen",
      "Bathroom with shower",
      "Picnic table and grills",
      "Sleeps five comfortably",
    ],
    image: images.liberty,
    imageTwo: images.libertyTwo,
    bookUrl: "https://abnb.me/M36FF00qO8",
  },
  {
    name: "Caddo Cabin",
    label: "Studio cabin near the creek",
    size: "675 square feet",
    sleeps: "Sleeps five comfortably",
    description:
      "Caddo Cabin keeps the stay simple and relaxed with a studio layout, full kitchen, bathroom with shower, covered deck, and a peaceful creekside setting.",
    details: [
      "Studio layout",
      "Full kitchen",
      "Bathroom with shower",
      "Covered deck",
      "Creekside setting",
    ],
    image: images.caddo,
    imageTwo: images.caddoTwo,
    bookUrl: "https://abnb.me/wbVX6Lq8Ifb",
  },
];


export const videos = [
  {
    title: "Around Collier Creek Cabins",
    text: "A closer look at the cabins, trees, decks, creek, and outdoor space around the property.",
    src: "/videos/collier-creek-video-1.mp4",
    poster: images.creekHero,
  },
  {
    title: "Clear Creek and Grounds",
    text: "See the creek, the wooded setting, and the kind of outdoor space guests come here to enjoy.",
    src: "/videos/collier-creek-video-2.mp4",
    poster: images.creek,
  },
  {
    title: "Wedding Barn and Events",
    text: "A look at the wedding barn, cabins, and outdoor gathering space for special events.",
    src: "/videos/collier-creek-video-3.mp4",
    poster: images.weddingBarn,
  },
];

export const creekFeatures = [
  "Swim, snorkel, or soak",
  "Fish and explore",
  "Sit under the trees",
  "Walk in the creek",
  "Watch wildlife",
  "Look for quartz crystals",
];

export const amenities = [
  "Full kitchens",
  "Private bathrooms with showers",
  "Covered decks",
  "Personal picnic tables",
  "Grills",
  "Fire pit space",
  "Horseshoe",
  "WiFi calling or landline",
  "Free long distance",
  "HBO with DirecTV",
  "Dog friendly",
  "Cots available",
];

export const nearbyNotes = [
  "Norman, Arkansas",
  "Caddo Gap area",
  "Caddo River Beach nearby",
  "Natural mineral springs",
  "Diamond and crystal digging nearby",
  "Quiet wooded creek setting",
];

export const galleryImages = [
  {
    src: images.hero,
    title: "A warm welcome",
    text: "Professional photos show the sunlight, textures, and easy outdoor feel around Collier Creek.",
  },
  {
    src: images.creekHero,
    title: "Cabins by the creek",
    text: "Three cabins sit close to porches, grills, shade trees, and the water.",
  },
  {
    src: images.collier,
    title: "Collier Cabin",
    text: "The largest cabin, with a master bedroom, loft, full kitchen, and space for seven.",
  },
  {
    src: images.liberty,
    title: "Liberty Cabin",
    text: "A comfortable studio cabin with a full kitchen, covered deck, picnic table, and grills.",
  },
  {
    src: images.caddo,
    title: "Caddo Cabin",
    text: "A relaxed studio cabin close to the quiet creek setting.",
  },
  {
    src: images.creek,
    title: "Clear Collier Creek",
    text: "Guests can swim, snorkel, soak, fish, explore, or simply sit by the water.",
  },
  {
    src: images.grill,
    title: "Outdoor meals",
    text: "Covered porches, picnic tables, grills, and room to gather outside.",
  },
  {
    src: images.weddingBarn,
    title: "Wedding barn",
    text: "A rustic event space paired with cabins and creekside scenery.",
  },
];

export const photoBreaks = [
  {
    src: images.creekHero,
    eyebrow: "The property",
    title: "Cabins, porches, trees, and creek water all in one place.",
    text: "Collier Creek is set up for slow mornings, outdoor meals, creek time, and quiet evenings with the cabins close together on the same private property.",
  },
  {
    src: images.creek,
    eyebrow: "Collier Creek",
    title: "Clear water for swimming, soaking, fishing, and exploring.",
    text: "Walk down to the creek, look for fish under the slate rock banks, bring water shoes, and enjoy the kind of setting guests remember after they leave.",
  },
  {
    src: images.weddingBarn,
    eyebrow: "Wedding Barn",
    title: "A rustic event setting with cabins close by.",
    text: "For weddings and special events, guests can enjoy the barn, the cabins, the creek, and the outdoor gathering space without needing to leave the property.",
  },
];

export const reviews = [
  {
    name: "Amanda Allbritton",
    text: "This place is the perfect vacation spot for all ages. We had an amazing time and can’t wait to go back.",
  },
  {
    name: "Candace Mendoza",
    text: "Our checklist included dog friendly, a covered outdoor sitting area, no more than 20 minutes from town, and as close to the water as possible. The porch is beautiful, large, covered, and has a gate.",
    note: "Spacious rooms • Thoughtful amenities",
  },
  {
    name: "John Gregory Basco",
    text: "We are having the best time. The creek is so fun, very exciting for kids, and you can find quartz crystals all over the place. I highly recommend.",
  },
  {
    name: "Jean Pinson",
    text: "The cabin was great and the grounds are beautiful. Such a nice place to stay. Scott and Sharon are great hosts!",
  },
  {
    name: "Kim Tuminello",
    text: "Our cabin was just right. Everything was neat and clean. A great place to relax.",
  },
  {
    name: "Laurie Richardson McCullough",
    text: "I love this place! The kids are loving it, too. It’s just beautiful and peaceful here.",
  },
  {
    name: "Carla O'Bier",
    text: "It’s a wonderful and very relaxing place to stay! We will definitely visit again!",
  },
  {
    name: "Cynthia Malone",
    text: "My husband and I just spent 3 days here. It is so quiet and peaceful. We walked in the creek and did some reading sitting under the trees. So relaxing!",
  },
  {
    name: "Shirley Price Daley",
    text: "A quiet getaway. It was so relaxing and peaceful sitting on the back deck and listening to the flow of the water in the creek below.",
  },
  {
    name: "Bailey Sharp",
    text: "Beautiful view! Lots of privacy! Perfect for vacations! 5 stars.",
  },
  {
    name: "George-Antionette Fauber",
    text: "What a great place to get away from the city! Convenient location, great facility, lots of nature and plenty of scenery. Fun exploring the creek. Cool, clear water!",
  },
];
