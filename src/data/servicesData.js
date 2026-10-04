const SITE_URL = 'https://www.matoshritravelspune.com';

export const categoryBenefits = {
  tempoTraveller: [
    '10–26 Seater Range',
    'Air-Conditioned Comfort',
    'Experienced Local Drivers',
    'Sanitised Before Every Trip',
  ],
  bus: [
    '14–50 Seater Range',
    'AC & Non-AC Options',
    'Well-Maintained Fleet',
    'Transparent Pricing',
  ],
  urbania: [
    '13 & 17 Seater Models',
    'Premium Pushback Seats',
    'Dual-Zone Climate Control',
    'Professional Chauffeurs',
  ],
  airport: [
    'Flight Tracking',
    'Meet & Greet Service',
    'Luggage Assistance',
    'Fixed Transparent Rates',
  ],
  wedding: [
    'Decorated Vehicle Options',
    'Punctual Ceremony Arrivals',
    'Multi-Vehicle Coordination',
    'Polite Uniformed Drivers',
  ],
  corporate: [
    'Dedicated Fleet Allocation',
    'Monthly Billing & Invoices',
    'Priority Support',
    'Background-Verified Drivers',
  ],
  group: [
    'Group-Optimised Vehicles',
    'Customisable Pickup Points',
    'Experienced Group Drivers',
    'Competitive Per-Head Rates',
  ],
  tour: [
    'Handpicked Destinations',
    'AC Vehicle Included',
    'Hotel Stay Assistance',
    'Customisable Itineraries',
  ],
  outstation: [
    'Multi-Day Itineraries',
    'Pan-Maharashtra Coverage',
    'Experienced Driver-Guides',
    'All-India Permits',
  ],
  default: [
    'Comfortable Travel',
    'Professional Service',
    'Well-Maintained Vehicles',
    'Transparent Pricing',
  ],
};

export const categoryVehicleSpecs = {
  bus: {
    image: '/images/isuzu-blue.png',
    vehicleName: 'Isuzu SLM',
    capacity: '22 Seater + Driver',
    vehicleType: 'Mini Bus / Luxury Coach',
    climateControl: 'AC & Non-AC Options Available',
    serviceType: 'Local & Outstation',
    bestFor: 'Weddings, Corporate Events, Tours, Picnics, School Trips',
    vehicleDescription: 'Elegant and efficient vehicle perfect for small group travel and executive transfers.',
    vehicleBenefits: ['Premium Comfort', 'Spacious Interior', 'Powerful Performance', 'Smooth Ride'],
  },
  tempoTraveller: {
    image: '/images/force-traveller.png',
    vehicleName: 'Force Tempo Traveller',
    capacity: '10–26 Seater + Driver',
    vehicleType: 'Force Tempo Traveller',
    climateControl: 'Air Conditioned',
    serviceType: 'Local & Outstation',
    bestFor: 'Family trips, pilgrimages, corporate outings, group tours',
    vehicleDescription: 'Robust and reliable Force Tempo Traveller perfect for large group travel, pilgrimages, and long-distance trips.',
    vehicleBenefits: ['Air Conditioned', 'Pushback Seats', 'Spacious Seating', 'Ample Luggage Space'],
  },
  urbania: {
    image: '/images/white-urbania-angle.png',
    vehicleName: 'Force Urbania',
    capacity: '13 & 17 Seater + Driver',
    vehicleType: 'Force Urbania Luxury Van',
    climateControl: 'Dual-Zone AC',
    serviceType: 'Local & Outstation',
    bestFor: 'Family trips, corporate travel, airport transfers, special events',
    vehicleDescription: 'State-of-the-art luxury van offering supreme comfort, individual AC vents, reclining seats, and smooth ride quality.',
    vehicleBenefits: ['Dual-Zone AC', 'Premium Pushback Seats', 'LED Reading Lights', 'Generous Luggage Space'],
  },
  airport: {
    image: '/images/toyota-innova-crysta-side.png',
    vehicleName: 'Toyota Innova Crysta',
    capacity: '7 Seater + Driver',
    vehicleType: 'Premium Sedan / SUV',
    climateControl: 'Air Conditioned',
    serviceType: 'Point-to-Point Transfer',
    bestFor: 'Pune Airport pickup and drop, flight transfers, executive travel',
    vehicleDescription: 'Premium MPV offering exceptional comfort, punctuality, safety, and luggage capacity for airport transfers.',
    vehicleBenefits: ['Dual-Zone AC', 'Pushback Seats', 'Flight Tracking', 'Punctual Dispatch'],
  },
  wedding: {
    image: '/images/wedding-event.png',
    vehicleName: 'Force Urbania Premium',
    capacity: '13–50 Seater + Driver',
    vehicleType: 'Force Urbania / Luxury Coach',
    climateControl: 'Air Conditioned',
    serviceType: 'Wedding & Event Transportation',
    bestFor: 'Weddings, receptions, sangeet nights, guest shuttles, family gatherings',
    vehicleDescription: 'Premium decorated vehicles and coordinated fleet service designed to transport wedding parties and guests smoothly.',
    vehicleBenefits: ['Decorated Options', 'Plush Pushback Comfort', 'Uniformed Chauffeurs', 'Punctual Timing'],
  },
  corporate: {
    image: '/images/corporate-travel.png',
    vehicleName: 'Toyota Innova Crysta / Urbania',
    capacity: '7–17 Seater + Driver',
    vehicleType: 'Toyota Innova Crysta / Urbania',
    climateControl: 'Dual-Zone AC',
    serviceType: 'Dedicated Corporate Fleet',
    bestFor: 'Employee commutes, client pickups, offsite events, conferences',
    vehicleDescription: 'Corporate-grade transportation tailored for executive commutes, business delegation travel, and company offsites.',
    vehicleBenefits: ['Executive Interiors', 'Dual-Zone AC', 'Mobile Charging Ports', 'GST Invoicing'],
  },
  tour: {
    image: '/images/white-urbania-side.png',
    vehicleName: 'Force Urbania Classic',
    capacity: '13–26 Seater + Driver',
    vehicleType: 'Force Urbania / Tempo Traveller',
    climateControl: 'Air Conditioned',
    serviceType: 'Tour Packages',
    bestFor: 'Family vacations, group tours, pilgrimage tours, weekend getaways',
    vehicleDescription: 'Comfortable and reliable tour vehicle with spacious seating and panoramic views for scenic sightseeing.',
    vehicleBenefits: ['Panoramic Windows', 'Pushback Comfort', 'Spacious Luggage Boot', 'AC Climate Control'],
  },
  outstation: {
    image: '/images/black-urbania-side.png',
    vehicleName: 'Force Urbania 17-Seater',
    capacity: '17 Seater + Driver',
    vehicleType: 'Force Urbania / Tempo Traveller',
    climateControl: 'Air Conditioned',
    serviceType: 'Outstation Travel',
    bestFor: 'Multi-day trips, interstate travel, long-distance journeys',
    vehicleDescription: 'Heavy-duty, comfortable long-distance tourer built for highway stability, mountain ghats, and extended group tours.',
    vehicleBenefits: ['Highway Stability', 'Ergonomic Pushback Seats', 'Large Luggage Boot', 'All-India Permits'],
  },
  group: {
    image: '/images/force-traveller.png',
    vehicleName: 'Force Tempo Traveller',
    capacity: '10–26 Seater + Driver',
    vehicleType: 'Tempo Traveller / Mini Bus',
    climateControl: 'Air Conditioned',
    serviceType: 'Group Transportation',
    bestFor: 'Schools, colleges, community groups, corporate teams, picnics',
    vehicleDescription: 'Spacious group coach ideal for school outings, college excursions, community gatherings, and large family picnics.',
    vehicleBenefits: ['Group-Optimised Space', 'Individual Air Vents', 'Ample Luggage Space', 'High Safety Standards'],
  },
  default: {
    image: '/images/white-urbania-angle.png',
    vehicleName: 'Force Urbania 13-Seater',
    capacity: '13 Seater + Driver',
    vehicleType: 'Force Urbania Luxury Van',
    climateControl: 'Dual-Zone AC',
    serviceType: 'Local & Outstation',
    bestFor: 'Group travel, family trips, corporate outings',
    vehicleDescription: 'Premium comfort with excellent mileage and stylish design for comfortable journeys across Maharashtra.',
    vehicleBenefits: ['Premium Comfort', 'Dual-Zone AC', 'Pushback Seats', 'Ample Luggage Boot'],
  },
};

export const categoryPricing = {
  tempoTraveller: {
    text: 'Tempo Traveller rental starts from ₹3,500/day for local trips. Outstation packages available on request.',
    note: 'Final quotation depends on vehicle type, seating capacity and trip duration.',
  },
  bus: {
    text: 'Bus rental starts from ₹6,000/day for local trips. Outstation and tour packages available on request.',
    note: 'Final quotation depends on vehicle type, seating capacity and trip duration.',
  },
  urbania: {
    text: 'Force Urbania rental starts from ₹4,500/day for local trips. Outstation packages available on request.',
    note: 'Final quotation depends on model (13/17 seater), duration, and distance.',
  },
  airport: {
    text: 'Pune Airport transfer starts from ₹1,200 one-way for sedans. SUV and premium vehicle rates on request.',
    note: 'Fixed rates with no surge pricing. Round-trip discounts available.',
  },
  wedding: {
    text: 'Wedding bus and luxury vehicle packages available on request tailored to your occasion.',
    note: 'Final quotation depends on vehicle type, seating capacity, number of vehicles, and duration.',
  },
  corporate: {
    text: 'Corporate travel packages start with flexible daily and monthly billing options.',
    note: 'Corporate packages include dedicated fleet allocation and GST-compliant invoices.',
  },
  group: {
    text: 'Group travel packages start from ₹150/person for local trips. Custom quotes available for larger groups.',
    note: 'Per-head rates depend on group size, vehicle type, and trip duration.',
  },
  tour: {
    text: 'Tour packages start from ₹8,000/day including AC vehicle and professional driver.',
    note: 'Package rates vary by destination, duration, and optional hotel stay inclusions.',
  },
  outstation: {
    text: 'Outstation travel starts from ₹12/km for AC vehicles. Per-day driver allowance applicable.',
    note: 'Rates depend on vehicle type, distance, and trip duration. Toll and parking itemized clearly.',
  },
  default: {
    text: 'Vehicle rental quotation available on request tailored to your route and group size.',
    note: 'We provide customized quotes with transparent pricing based on your specific requirements.',
  },
};

export const categoryUseCases = {
  tempoTraveller: ['Family Trips', 'Pilgrimage Tours', 'Weekend Getaways', 'Corporate Outings', 'Group Tours', 'Outstation Travel'],
  bus: ['Corporate Events', 'Weddings', 'School Trips', 'Family Tours', 'Picnics', 'Outstation Tours'],
  urbania: ['Family Trips', 'Corporate Travel', 'Weddings', 'Airport Transfers', 'Outstation Trips', 'Group Tours'],
  airport: ['Airport Pickup', 'Airport Drop', 'Flight Transfer', 'Corporate Travel', 'Family Travel', 'VIP Transfers'],
  wedding: ['Wedding Ceremonies', 'Receptions', 'Sangeet Nights', 'Guest Shuttle', 'Family Gatherings', 'Baraat Processions'],
  corporate: ['Employee Commutes', 'Client Pickups', 'Offsite Events', 'Conferences & Summits', 'Airport Transfers', 'Business Delegations'],
  group: ['School Trips', 'College Excursions', 'Community Events', 'Corporate Team Outings', 'Group Tours', 'Family Reunions'],
  tour: ['Family Tours', 'Group Trips', 'Pilgrimage Tours', 'Weekend Getaways', 'Sightseeing Tours', 'Hill Station Holidays'],
  outstation: ['Long-Distance Travel', 'Multi-Day Trips', 'Interstate Travel', 'Pilgrimage Tours', 'Family Vacations', 'Coastal Roadtrips'],
  default: ['Local Travel', 'Outstation Trips', 'Group Events', 'Family Outings', 'Corporate Travel', 'Sightseeing Tours'],
};

export const categoryWhy = {
  tempoTraveller: [
    { title: 'Well-Maintained Fleet', desc: 'Every tempo traveller is serviced regularly and sanitised before every trip.' },
    { title: 'Experienced Drivers', desc: 'Chauffeurs with deep knowledge of Pune and Maharashtra routes.' },
    { title: 'Flexible Booking', desc: 'One-way, round-trip, and multi-day options available.' },
    { title: 'Transparent Pricing', desc: 'Clear per-head or per-day rates with no hidden charges.' },
  ],
  bus: [
    { title: 'Diverse Fleet', desc: 'From 14-seater mini buses to 50-seater luxury coaches.' },
    { title: 'Clean & Comfortable', desc: 'Sanitised interiors with comfortable seating on every bus.' },
    { title: 'Professional Drivers', desc: 'Experienced chauffeurs trained in group travel management.' },
    { title: 'All-Occasion Service', desc: 'Weddings, corporate events, tours, picnics, and more.' },
  ],
  urbania: [
    { title: 'Premium Fleet', desc: '13 and 17-seater Urbania models with modern luxury amenities.' },
    { title: 'Professional Chauffeurs', desc: 'Background-verified drivers trained for premium hospitality.' },
    { title: 'Transparent Pricing', desc: 'Clear upfront quotes with no surge pricing.' },
    { title: 'Flexible Booking', desc: 'One-way, round-trip, and customized multi-day itineraries.' },
  ],
  airport: [
    { title: 'Flight Tracking', desc: 'Real-time monitoring adjusts pickup to your actual arrival time.' },
    { title: 'Meet & Greet', desc: 'Driver meets you at arrivals with a name board and luggage help.' },
    { title: 'Fixed Pricing', desc: 'Pre-negotiated rates with no surge charges at any hour.' },
    { title: 'Clean Vehicles', desc: 'Sanitised interiors and climate control for a pleasant ride.' },
  ],
  wedding: [
    { title: 'Decorated Vehicles', desc: 'Wedding-themed decoration available to match your celebration.' },
    { title: 'Multi-Vehicle Coordination', desc: 'Seamless scheduling for multiple vehicles and guest groups.' },
    { title: 'Punctual Service', desc: 'Drivers trained in event timing to avoid any delays.' },
    { title: 'Event Expertise', desc: 'Familiar with Pune wedding timelines, venues, and guest logistics.' },
  ],
  corporate: [
    { title: 'Dedicated Fleet', desc: 'Vehicles assigned exclusively for consistent corporate availability.' },
    { title: 'Monthly Billing', desc: 'Detailed GST invoices and flexible corporate payment cycles.' },
    { title: 'Verified Drivers', desc: 'Background-checked, uniformed chauffeurs with professional etiquette.' },
    { title: 'Scalable Solutions', desc: 'From executive cars to full fleet deployments for company events.' },
  ],
  group: [
    { title: 'Group-Optimised Vehicles', desc: 'Tempo travellers and buses designed specifically for group comfort.' },
    { title: 'Experienced Drivers', desc: 'Chauffeurs trained in passenger safety and multi-stop logistics.' },
    { title: 'Custom Pickup Points', desc: 'Multiple pickup locations and flexible routing for your group.' },
    { title: 'Competitive Rates', desc: 'Affordable per-head pricing with transparent billing.' },
  ],
  tour: [
    { title: 'Expertly Planned', desc: 'Destinations and routes chosen for maximum comfort and sightseeing.' },
    { title: 'AC Transport Included', desc: 'Well-maintained vehicles with professional drivers.' },
    { title: 'Flexible Customization', desc: 'Modify destinations and pace to match your family or group.' },
    { title: 'Transparent Pricing', desc: 'Clear package rates with no hidden charges.' },
  ],
  outstation: [
    { title: 'Custom Itineraries', desc: 'Tailor-made travel plans for your group\'s interests and pace.' },
    { title: 'Local Driver-Guides', desc: 'Drivers with local route knowledge who enhance your journey.' },
    { title: 'AC Fleet', desc: 'Well-maintained vehicles with climate control for long distances.' },
    { title: 'All-India Permits', desc: 'Valid state and interstate permits for worry-free travel.' },
  ],
  default: [
    { title: 'Diverse Fleet', desc: 'From 14-seater mini buses to 50-seater luxury coaches.' },
    { title: 'Clean & Comfortable', desc: 'Sanitised interiors with comfortable seating on every vehicle.' },
    { title: 'Professional Drivers', desc: 'Experienced chauffeurs trained in safe route management.' },
    { title: 'All-Occasion Service', desc: 'Weddings, corporate events, tours, picnics, and more.' },
  ],
};

export const categoryFaqs = {
  tempoTraveller: [
    { q: 'What is the seating capacity of your tempo travellers?', a: 'Our fleet includes 10-seater, 14-seater, 17-seater, 20-seater, 25-seater, and 26-seater models. All configurations include the driver seat.' },
    { q: 'Are the tempo travellers air-conditioned?', a: 'Yes, all our tempo travellers are equipped with powerful air conditioning for a comfortable journey across all seasons.' },
    { q: 'Is a driver included in the rental?', a: 'Yes, all bookings include a professional, experienced driver. Our chauffeurs are background-verified and familiar with routes across Maharashtra.' },
    { q: 'Can I book a tempo traveller for outstation travel?', a: 'Absolutely. We offer one-way, round-trip, and multi-day outstation packages with transparent per-kilometre billing.' },
    { q: 'How do I book a tempo traveller?', a: 'You can book via WhatsApp, phone, or our online booking form. We recommend booking at least 24–48 hours in advance for guaranteed vehicle availability.' },
    { q: 'What is the pricing structure?', a: 'Pricing depends on the vehicle model, seating capacity, duration, and distance. We provide transparent quotes with no hidden charges.' },
  ],
  bus: [
    { q: 'What bus sizes are available for rent?', a: 'We offer a wide range from 14-seater mini buses to 50-seater luxury coaches, with both AC and non-AC options.' },
    { q: 'Are buses available for outstation travel?', a: 'Yes, our buses are available for both local and outstation travel. We handle all necessary permits and documentation for interstate journeys.' },
    { q: 'Is a driver included?', a: 'Yes, every bus rental includes a professional driver experienced in group travel management and route planning.' },
    { q: 'Can I decorate the bus for a wedding?', a: 'Yes, we offer decorated vehicle options for weddings and special events. Please discuss your requirements when booking.' },
    { q: 'How is pricing calculated?', a: 'Bus rental pricing is based on the vehicle type, duration, and distance. Toll taxes, parking charges, and driver allowances are itemised clearly.' },
    { q: 'Do you provide buses for school trips?', a: 'Yes, we regularly provide buses for school excursions and picnics. Our drivers are experienced in handling student groups safely.' },
  ],
  urbania: [
    { q: 'What is the seating capacity of the Force Urbania?', a: 'We have 13-seater and 17-seater Force Urbania models, both with a driver seat. The vehicles feature premium pushback seats for maximum comfort.' },
    { q: 'Is the Urbania air-conditioned?', a: 'Yes, all our Urbania vehicles come with dual-zone air conditioning, ensuring a comfortable temperature throughout the cabin.' },
    { q: 'Can I book an Urbania for outstation travel?', a: 'Yes, our Urbania service is available for local, outstation, and intercity travel. Popular routes include Pune to Mumbai, Pune to Mahabaleshwar, and Pune to Goa.' },
    { q: 'What amenities are included?', a: 'Our Urbania fleet includes LED reading lights, mobile charging points, a music system, spacious luggage boot, and comfortable pushback seats.' },
    { q: 'How do I book an Urbania?', a: 'You can book instantly via WhatsApp or by calling us. We also accept online booking requests and confirm availability within minutes.' },
    { q: 'Are Urbania vehicles suitable for airport transfers?', a: 'Yes, the Urbania is perfect for airport transfers, especially for groups or families with substantial luggage.' },
  ],
  airport: [
    { q: 'Do you track flights for airport pickups?', a: 'Yes, our drivers monitor your flight status in real time and adjust the pickup time accordingly, so you never have to wait at the airport.' },
    { q: 'Is there a meet-and-greet service?', a: 'Yes, our driver will meet you at the arrivals gate with a name board and assist you with your luggage to the vehicle.' },
    { q: 'What are your airport transfer rates?', a: 'We offer fixed, pre-negotiated rates with no surge pricing. The fare depends on the vehicle type and destination. Contact us for a quote.' },
    { q: 'Which vehicles are used for airport transfers?', a: 'We use premium sedans and spacious SUVs like the Toyota Innova Crysta, all with climate control and sanitised interiors.' },
    { q: 'Can I book a round-trip airport transfer?', a: 'Yes, round-trip bookings are available at discounted rates. We recommend booking in advance to secure your preferred time slot.' },
    { q: 'Is a driver included with the airport transfer?', a: 'Yes, every airport transfer includes a punctual, professional chauffeur.' },
  ],
  wedding: [
    { q: 'Can the vehicles be decorated for a wedding?', a: 'Yes, we offer wedding-themed decoration options to match your celebration. Please discuss your theme and requirements when booking.' },
    { q: 'How many vehicles can you coordinate?', a: 'We can coordinate multiple vehicles for large weddings. Our team works with your planner to create a seamless transport schedule.' },
    { q: 'Are the drivers dressed formally?', a: 'Yes, our chauffeurs are trained in event etiquette and are polite, well-dressed, and always punctual for wedding events.' },
    { q: 'What is the booking lead time?', a: 'We recommend booking wedding transportation at least 2–4 weeks in advance to ensure availability of your preferred vehicles and drivers.' },
    { q: 'Do you provide transportation for guests?', a: 'Yes, we offer shuttle services for wedding guests, ensuring everyone arrives comfortably and on time.' },
    { q: 'What vehicle sizes are available for wedding events?', a: 'We offer 13 to 50-seater vehicles including Force Urbanias, Tempo Travellers, and luxury coaches.' },
  ],
  corporate: [
    { q: 'Do you offer dedicated fleet allocation?', a: 'Yes, we can assign dedicated vehicles exclusively for your business, ensuring consistent availability and priority service.' },
    { q: 'Can you provide monthly billing?', a: 'Yes, we offer detailed monthly invoices with flexible payment cycles to suit your accounting processes.' },
    { q: 'Are drivers background-verified?', a: 'Yes, all our corporate chauffeurs are uniformed, background-verified, and trained in professional etiquette.' },
    { q: 'What areas do you cover?', a: 'We serve Pune\'s major IT parks, industrial zones, and commercial hubs, and also offer outstation corporate travel.' },
    { q: 'Can you scale the fleet for offsite events?', a: 'Yes, we can scale from a single executive car to a full fleet deployment for corporate events and offsites.' },
    { q: 'Are vehicles sanitized before corporate trips?', a: 'Yes, every vehicle is sanitized and mechanically inspected before every dispatch.' },
  ],
  group: [
    { q: 'What is the minimum and maximum group size?', a: 'Our tempo travellers and force travellers accommodate groups of 10 to 50+ passengers, plus the driver.' },
    { q: 'Do you offer custom pickup points?', a: 'Yes, we can arrange multiple pickup locations and flexible routing to suit your group\'s convenience.' },
    { q: 'Is the service suitable for school trips?', a: 'Yes, we regularly transport school groups and ensure extra safety measures, including experienced drivers and sanitised vehicles.' },
    { q: 'How does group pricing work?', a: 'We offer competitive per-head pricing with transparent billing. Custom quotes are available for recurring group travel needs.' },
    { q: 'Can we customise the itinerary?', a: 'Yes, we work with group organisers to plan routes, stops, and schedules that meet the group\'s requirements.' },
    { q: 'Is a driver included with the group rental?', a: 'Yes, professional and route-experienced drivers are included in all rentals.' },
  ],
  tour: [
    { q: 'What destinations do your tour packages cover?', a: 'Our most popular packages cover Mahabaleshwar, Lonavala, Shirdi, Ashtavinayak, and the Konkan coast. Custom destinations can be arranged on request.' },
    { q: 'What is included in the tour package?', a: 'Each package includes a dedicated AC vehicle, a professional driver, and optional hotel booking and sightseeing coordination.' },
    { q: 'Can I customise the itinerary?', a: 'Yes, every package can be customised. Add more stops, change the pace, or combine destinations to create your perfect trip.' },
    { q: 'How do I book a tour package?', a: 'You can book via WhatsApp, phone, or our online form. Our team will confirm availability and provide a detailed quotation.' },
    { q: 'Is accommodation included?', a: 'Optional hotel stay assistance is available. We partner with trusted properties to ensure comfortable accommodation at every destination.' },
    { q: 'Are all toll and parking fees itemised?', a: 'Yes, all toll taxes, parking fees, and driver allowances are clearly detailed in your quote.' },
  ],
  outstation: [
    { q: 'Which outstation destinations do you serve?', a: 'We serve destinations across Maharashtra and beyond, including Mahabaleshwar, Lonavala, Shirdi, Mumbai, Goa, and more.' },
    { q: 'How is outstation pricing calculated?', a: 'You pay for the kilometres you travel and the days you book, with clear per-kilometre and per-day rates. Toll taxes and parking are itemised separately.' },
    { q: 'Is a driver included for outstation trips?', a: 'Yes, all outstation bookings include a professional driver who doubles as your local guide, knowing the best routes and hidden viewpoints.' },
    { q: 'Do you provide all-India permits?', a: 'Yes, our vehicles are equipped with valid state and interstate permits for worry-free travel across India.' },
    { q: 'Can I book a one-way outstation trip?', a: 'Yes, one-way, round-trip, and multi-day options are available. Choose the plan that best fits your schedule.' },
    { q: 'How far in advance should I book outstation trips?', a: 'We recommend booking 24–48 hours in advance, especially during holiday weekends and festive seasons.' },
  ],
  default: [
    { q: 'What bus sizes are available for rent?', a: 'We offer a wide range from 14-seater mini buses to 50-seater luxury coaches, with both AC and non-AC options.' },
    { q: 'Are buses available for outstation travel?', a: 'Yes, our vehicles are available for both local and outstation travel across Maharashtra and India.' },
    { q: 'Is a driver included?', a: 'Yes, every vehicle rental includes a professional, background-verified driver.' },
    { q: 'Can I decorate the vehicle for a wedding?', a: 'Yes, we offer decorated vehicle options for weddings and special events.' },
    { q: 'How is pricing calculated?', a: 'Pricing is based on the vehicle type, duration, and distance with complete transparent itemisation.' },
    { q: 'Do you provide buses for school trips?', a: 'Yes, we regularly provide safe transportation for school excursions and student groups.' },
  ],
};

export function categorizeService(name) {
  const lower = name.toLowerCase();
  if (lower.includes('urbania')) return 'urbania';
  if (lower.includes('tempo traveller') || lower.includes('tempo-traveller')) return 'tempoTraveller';
  if (lower.includes('wedding') || lower.includes('marriage') || (lower.includes('bus') && lower.includes('event'))) return 'wedding';
  if (lower.includes('corporate') || lower.includes('office')) return 'corporate';
  if (lower.includes('airport')) return 'airport';
  if (lower.includes('tour') || lower.includes('package') || lower.includes('mahabaleshwar') || lower.includes('shirdi') || lower.includes('goa') || lower.includes('ashtavinayak')) return 'tour';
  if (lower.includes('outstation')) return 'outstation';
  if (lower.includes('group') || lower.includes('school') || lower.includes('college') || lower.includes('picnic')) return 'group';
  if (lower.includes('bus') || lower.includes('mini bus') || lower.includes('volvo') || lower.includes('seater')) return 'bus';
  return 'bus'; // default to bus category for Pune bus rental fleet
}

export function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function getServiceAboutBody(name, category) {
  switch (category) {
    case 'bus':
      return `Whether you need ${name} for a wedding, corporate event, picnic, or tour group, Matoshri Tours & Travels has the right vehicle for you. Our fleet includes a wide range of AC and non-AC buses, all maintained to the highest standards and driven by experienced chauffeurs across Pune and Maharashtra.`;
    case 'tempoTraveller':
      return `Matoshri Tours & Travels provides reliable ${name} across Pune and Maharashtra. Our fleet of well-maintained tempo travellers is ideal for family trips, group outings, pilgrimages, and corporate events. With air-conditioned comfort, spacious seating, and professional drivers, we make group travel easy and enjoyable.`;
    case 'urbania':
      return `Experience the comfort and style of the Force Urbania with Matoshri Tours & Travels. Our ${name} is perfect for family trips, corporate outings, airport transfers, and special events. With ergonomic pushback seats, dual-zone AC, and modern amenities, every journey feels first-class.`;
    case 'airport':
      return `Matoshri Tours & Travels ${name} ensures you reach Pune Airport on time and get picked up promptly on arrival. Our drivers track your flight in real time and meet you at arrivals with a name board. No surge pricing, no last-minute surprises — just comfortable, reliable transport.`;
    case 'wedding':
      return `Make your special day memorable with Matoshri Tours & Travels ${name}. From ferrying guests to coordinating multiple vehicles for ceremonies, our team handles every detail with precision. Decorated vehicle options and punctual, polite drivers are standard.`;
    case 'corporate':
      return `Matoshri Tours & Travels ${name} is designed for businesses that value punctuality, comfort, and professionalism. From daily employee commutes to client pickups and offsite events, our dedicated fleet and support team ensure smooth, reliable travel.`;
    case 'group':
      return `Travelling in a group should be about shared moments, not logistical stress. Matoshri Tours & Travels ${name} is designed for schools, colleges, community groups, and corporate teams. Our fleet includes tempo travellers and coaches with seating for 10 to 50+ passengers.`;
    case 'tour':
      return `Explore Maharashtra\'s most beautiful destinations with Matoshri Tours & Travels ${name}. Every package includes a comfortable AC vehicle, a professional driver, and optional hotel and sightseeing coordination. We handle the logistics so you can focus on the journey.`;
    case 'outstation':
      return `Discover Maharashtra and beyond with Matoshri Tours & Travels ${name}. From the Western Ghats to the Konkan coast, our experienced driver-guides and well-maintained fleet make every outstation journey comfortable and memorable.`;
    default:
      return `Matoshri Tours & Travels offers professional ${name} across Pune and Maharashtra. Our well-maintained fleet, experienced drivers, and customer-first approach ensure a comfortable and reliable travel experience.`;
  }
}

export function createServiceRecord({ name, slug, categoryOverride, customFields = {} }) {
  const category = categoryOverride || categorizeService(name);
  const specs = categoryVehicleSpecs[category] || categoryVehicleSpecs.default;
  const benefits = categoryBenefits[category] || categoryBenefits.default;
  const pricing = categoryPricing[category] || categoryPricing.default;
  const useCases = categoryUseCases[category] || categoryUseCases.default;
  const whyChoose = categoryWhy[category] || categoryWhy.default;
  const faqs = categoryFaqs[category] || categoryFaqs.default;
  const aboutBody = getServiceAboutBody(name, category);

  const seoTitle = `${name} in Pune | Matoshri Tours & Travels`;
  const seoDesc = `Book ${name} in Pune with Matoshri Tours & Travels. Reliable ${category} service with well-maintained vehicles, professional drivers, and transparent pricing.`;

  const serviceInfo = [
    { label: 'Vehicle Type', value: specs.vehicleType },
    { label: 'Seating Capacity', value: specs.capacity },
    { label: 'Climate Control', value: specs.climateControl },
    { label: 'Service Type', value: specs.serviceType },
    { label: 'Best For', value: specs.bestFor },
  ];

  return {
    slug,
    title: name,
    tagline: `${name} — Trusted Service in Pune`,
    breadcrumb: name,
    description: `Book ${name} in Pune with Matoshri Tours & Travels. Professional drivers, well-maintained AC vehicles, and transparent pricing for local and outstation travel across Maharashtra.`,
    about: {
      heading: `About ${name}`,
      body: aboutBody,
    },
    // Single primary vehicle and image fields
    image: specs.image,
    vehicleName: specs.vehicleName,
    capacity: specs.capacity,
    vehicleType: specs.vehicleType,
    climateControl: specs.climateControl,
    serviceType: specs.serviceType,
    bestFor: specs.bestFor,
    vehicleDescription: specs.vehicleDescription,
    vehicleBenefits: specs.vehicleBenefits,
    // Featured vehicle object
    featuredVehicle: {
      name: specs.vehicleName,
      capacity: specs.capacity,
      image: specs.image,
      description: specs.vehicleDescription,
      benefits: specs.vehicleBenefits,
      features: specs.vehicleBenefits,
    },
    // Backward compatibility for vehicles array (only 1 vehicle)
    vehicles: [
      {
        id: slugify(specs.vehicleName),
        name: specs.vehicleName,
        seats: specs.capacity,
        image: specs.image,
        features: specs.vehicleBenefits,
        suitability: specs.vehicleDescription,
      },
    ],
    benefits,
    serviceInfo,
    pricing,
    useCases,
    whyChoose,
    faq: faqs,
    faqs,
    cta: {
      heading: `Plan Your ${name} Booking`,
      text: `Get in touch with Matoshri Tours & Travels today. We'll help you choose the right vehicle and plan a comfortable journey.`,
    },
    seo: {
      title: seoTitle,
      description: seoDesc,
    },
    ...customFields,
  };
}

export const rawServices = [
  "Tempo Traveller Pune",
  "Tempo Traveller on Rent Pune",
  "Bus on Rent in Pune",
  "Tempo Traveller on Rent",
  "Tempo Traveller Rent in Pune",
  "Tempo Traveller Hire in Pune",
  "Mini Bus for Rent",
  "Bus on Rent Hire",
  "Bus on Rent Pune",
  "Bus Rental in Pune",
  "Hire Tempo Traveller",
  "Bus Hire in Pune",
  "Ac Tempo Traveller Rent Pune",
  "Bus Hire For Outstation",
  "Bus on Rent for Local",
  "Bus Rental For Wedding",
  "Bus Rent for Marriage",
  "Bus Rental For Corporate Events",
  "Bus Rental For Tour",
  "Bus Rental For Corporate in Pune",
  "Tempo Traveller on Rent in Pune",
  "AC Bus On Rent",
  "Non AC Bus Rental Service",
  "Bus on Hire Pune to Mahabaleshwar Package Tour",
  "Bus Hire for Picnic",
  "Bus on Rent For Event in Pune",
  "Bus on Hire Pune",
  "13 Seater Tempo Traveller on Rent in Pune",
  "17 Seater Tempo Traveller on Rent in Pune",
  "20 Seater Bus on Rent in Pune",
  "32 Seater Tempo Traveller Service",
  "40 Seater Bus on Rent in Pune",
  "50 Seater Bus on Rent in Pune",
  "Luxury Force Urbania on Rent in Pune",
  "Pune to Mahabaleshwar Urbania Bus Hire on Rent",
  "Pune to Shirdi Force Urbania on Rent",
  "Urbania Luxury Bus Rentals in Pune",
  "Pune to Outstation Urbania Bus Hire in Pune",
  "Pune to Ashtavinayak Urbania Tour Package",
  "Urbania Tourist Bus on Rent in Pune",
  "Urbania On Rent In Pune",
  "Force Urbania on Rent in Pune",
  "Urbania On Rent in Pimpri Chinchwad",
  "Pune to Mahabaleshwar Urbania On Rent",
  "Pune to Mumbai Urbania On Rent",
  "Pune to Goa Urbania On Rent",
  "Urbania Hire for Outstation in Pune",
  "17 Seater Force Urbania on Rent in Pune",
  "13 Seater Force Urbania on Rent in Pune",
  "Urbania Hire for Corporate Event in Pune",
  "Tempo Traveller Hire for Outstation in Pune",
  "Luxury Tempo Traveller On Rent in Pune",
  "25 Seater Tempo Traveller on Rent in Pune",
  "Pune to Mahabaleshwar Tempo Traveller",
  "Pune to Shirdi Tempo Traveller On Rent",
  "32 Seater Bus Rent in Pune",
  "45 Seater Bus on Rent in Pune",
  "Bus Rentals For School Trips in Pune",
  "Bus booking for wedding in Pune",
  "Bus Booking for Marriage",
  "Bus Service for Corporate Pune",
  "Bus Rental for Tour Packages",
  "AC Bus On Rent in Pune",
  "Pune Bus Hire Rental Service",
  "Bus Service for Picnic in Pune",
  "Non Ac Bus Rental Service in Pune",
  "Mini Bus On Rent in Pune",
  "14 Seater Tempo Traveller on Rent",
  "17 Seater Bus on Rent Pune",
  "14 17 20 25 Seater Bus on Rent in Pune",
  "Travel Agents in Pune for Mini Bus Hire",
  "Luxury Bus Rental in Pune",
  "32, 35, 40, 45, 50 Seater Bus on Rent in Pune",
  "Volvo Bus On Rent in Pune",
  "Tempo Traveller Rental Services in Pune",
  "20 Seater Tempo Traveller On Rent in Pune",
  "26 Seater Tempo Traveller On Rent in Pune",
  "Bus Rental Services in Pune",
  "Wedding Bus Rental Service",
  "Bus On Rent in Pimpri Chinchwad",
];

export const FOOTER_SERVICES = rawServices.map((name) => ({
  name,
  slug: slugify(name),
  category: categorizeService(name),
}));

export const rootServices = [
  createServiceRecord({
    name: 'Force Urbania on Rent',
    slug: 'force-urbania-on-rent',
    categoryOverride: 'urbania',
    customFields: {
      tagline: 'Premium Group Travel Across Maharashtra',
      breadcrumb: 'Force Urbania',
      seo: {
        title: 'Force Urbania on Rent in Pune | Matoshri Tours & Travels',
        description: 'Book a premium Force Urbania on rent in Pune with Matoshri Tours & Travels. 13 & 17 seater AC vehicles with professional drivers for family trips, outings, and group tours.',
      },
    },
  }),
  createServiceRecord({
    name: 'Airport Transfers',
    slug: 'airport-transfers',
    categoryOverride: 'airport',
    customFields: {
      tagline: 'Punctual Pune Airport Pickup & Drop',
      breadcrumb: 'Airport Transfer',
      seo: {
        title: 'Airport Transfer Services in Pune | Matoshri Tours & Travels',
        description: 'Book reliable Pune airport pickup and drop services with Matoshri Tours & Travels. Flight monitoring, meet & greet, fixed pricing, and comfortable AC vehicles.',
      },
    },
  }),
  createServiceRecord({
    name: 'Pune to Mumbai',
    slug: 'pune-to-mumbai',
    categoryOverride: 'outstation',
    customFields: {
      tagline: 'Smooth & Safe Pune–Mumbai Travel',
      breadcrumb: 'Pune to Mumbai',
      seo: {
        title: 'Pune to Mumbai Cab Service | Matoshri Tours & Travels',
        description: 'Book comfortable Pune to Mumbai cabs with Matoshri Tours & Travels. One-way and round-trip options with experienced drivers and well-maintained AC vehicles.',
      },
    },
  }),
  createServiceRecord({
    name: 'Outstation Travel',
    slug: 'outstation-travel',
    categoryOverride: 'outstation',
    customFields: {
      tagline: 'Explore Maharashtra & Beyond',
      breadcrumb: 'Outstation Travel',
      seo: {
        title: 'Outstation Travel Services from Pune | Matoshri Tours & Travels',
        description: 'Book comfortable outstation travel from Pune with Matoshri Tours & Travels. Customizable itineraries, AC vehicles, and professional drivers for Maharashtra and beyond.',
      },
    },
  }),
  createServiceRecord({
    name: 'Tour Packages',
    slug: 'tour-packages',
    categoryOverride: 'tour',
    customFields: {
      tagline: 'Curated Travel Experiences',
      breadcrumb: 'Tour Packages',
      seo: {
        title: 'Tour Packages from Pune | Matoshri Tours & Travels',
        description: 'Browse Matoshri Tours & Travels tour packages for Mahabaleshwar, Lonavala, Shirdi, and Konkan. AC vehicle, hotel stays, and guided sightseeing included.',
      },
    },
  }),
  createServiceRecord({
    name: 'Corporate Travel',
    slug: 'corporate-travel',
    categoryOverride: 'corporate',
    customFields: {
      tagline: 'Professional Business Transportation',
      breadcrumb: 'Corporate Travel',
      seo: {
        title: 'Corporate Travel Services in Pune | Matoshri Tours & Travels',
        description: 'Professional corporate travel solutions in Pune with Matoshri Tours & Travels. Dedicated fleet, monthly billing, verified drivers, and priority support for businesses.',
      },
    },
  }),
  createServiceRecord({
    name: 'Wedding & Event Transportation',
    slug: 'wedding-event-transportation',
    categoryOverride: 'wedding',
    customFields: {
      tagline: 'Elegant Travel for Your Special Day',
      breadcrumb: 'Wedding & Events',
      seo: {
        title: 'Wedding Bus Rental in Pune | Matoshri Tours & Travels',
        description: 'Elegant wedding and event transportation in Pune with Matoshri Tours & Travels. Decorated vehicles, multi-vehicle coordination, and punctual service for your special day.',
      },
    },
  }),
  createServiceRecord({
    name: 'Group Travel',
    slug: 'group-travel',
    categoryOverride: 'group',
    customFields: {
      tagline: 'Comfortable Journeys for Everyone',
      breadcrumb: 'Group Travel',
      seo: {
        title: 'Group Travel Services in Pune | Matoshri Tours & Travels',
        description: 'Book comfortable group travel in Pune with Matoshri Tours & Travels. 10–26 seater tempo travellers and force travellers with AC, professional drivers, and group-friendly pricing.',
      },
    },
  }),
];

// Combine root services and mapped footer services without duplicates
const rootSlugs = new Set(rootServices.map((s) => s.slug));

export const servicesData = [
  ...rootServices,
  ...FOOTER_SERVICES.filter((svc) => !rootSlugs.has(svc.slug)).map((svc) =>
    createServiceRecord({
      name: svc.name,
      slug: svc.slug,
      categoryOverride: svc.category,
    })
  ),
];

export const SERVICE_PAGES = servicesData;

export function getServiceBySlug(slug) {
  return servicesData.find((s) => s.slug === slug) || null;
}

export function getAllServiceSlugs() {
  return servicesData.map((s) => s.slug);
}

export default servicesData;
