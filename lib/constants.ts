export const BUSINESS_INFO = {
  name: "COOL FIX REPAIR",
  owner: "Zaheer Ahmed Ansari",
  phone: "75068 21162",
  phoneRaw: "7506821162",
  phoneInternational: "+917506821162",
  email: "coolfixrepair01@gmail.com",
  visitingCharge: "₹299",
  experienceYears: 10,
  warranty: {
    standard: "1-year warranty with proper bill",
    extended: "Extended warranty option available upon request",
  },
  availability: {
    regular: "8:00 AM – 9:00 PM (Monday – Sunday)",
    complaintRegistration: "24×7 via Phone & WhatsApp",
  },
  services: [
    {
      id: "refrigerator",
      title: "Refrigerator Repair",
      shortDescription: "All-brand single door, double door, side-by-side & inverter fridge repair.",
      fullDescription: "Expert doorstep diagnosis and repair for all major refrigerator brands. We resolve cooling failure, compressor faults, gas charging, defrost heater issues, thermostat replacement, and PCB board repairs using genuine spare parts.",
      visitingCharge: "₹299",
      types: ["Single Door Refrigerator", "Double Door Refrigerator", "Side-by-Side Refrigerator", "Inverter Compressor Models", "Deep Freezers"],
      commonIssues: [
        "Refrigerator not cooling or irregular cooling",
        "Compressor not starting or making clicking noise",
        "Water leakage inside or underneath fridge",
        "Excessive ice buildup / Frost in freezer",
        "Gas leakage and refrigerant recharging",
        "Thermostat or digital sensor malfunction",
        "PCB motherboard electronic failure",
        "Door seal / rubber gasket damage",
      ],
      slug: "refrigerator-repair",
    },
    {
      id: "washing-machine",
      title: "Washing Machine Repair",
      shortDescription: "All-brand front load, top load & semi-automatic washing machine repair.",
      fullDescription: "Qualified technicians for all types of washing machines. From drum spinning faults and motor issues to drainage blockages and PCB electronic glitches, we carry out doorstep repairs with genuine replacement parts.",
      visitingCharge: "₹299",
      types: ["Front Load Fully Automatic", "Top Load Fully Automatic", "Semi-Automatic Washing Machines", "Inverter Drive Motors"],
      commonIssues: [
        "Washing machine not draining water",
        "Drum not rotating / spin cycle failure",
        "Excessive vibration or loud grinding noise",
        "Water inlet valve not taking water",
        "Door lock switch or latch error",
        "Error codes on digital display",
        "Motor capacitor or belt replacement",
        "Main PCB circuit board issues",
      ],
      slug: "washing-machine-repair",
    },
    {
      id: "oven",
      title: "Microwave & Oven Repair",
      shortDescription: "All-brand solo, grill, convection & built-in microwave oven repair.",
      fullDescription: "Safe and certified diagnosis for domestic and commercial ovens. We fix heating problems, magnetron failures, touch membrane keypad unresponsiveness, sparking, and turntable motor defects.",
      visitingCharge: "₹299",
      types: ["Solo Microwave Oven", "Grill Microwave Oven", "Convection Microwave Oven", "Built-In Kitchen Ovens", "OTG (Oven Toaster Grill)"],
      commonIssues: [
        "Microwave runs but does not heat food",
        "Sparking or burning smell inside chamber",
        "Touch keypad membrane unresponsive",
        "Turntable glass plate not rotating",
        "Microwave trips house circuit breaker",
        "Display not turning on or dead unit",
        "Door sensor / latch safety switch fault",
        "Magnetron or high voltage diode failure",
      ],
      slug: "oven-repair",
    },
    
  ],
  brands: [
    "Samsung",
    "Whirlpool",
    "LG",
    "Bosch",
    "Siemens",
    "Godrej",
    "Haier",
    "BPL",
    "IFB",
    "AmazonBasics",
    "Voltas",
    "Panasonic",
    "Daikin",
    "Hitachi",
    "Carrier",
    "Electrolux",
  ],
  serviceAreas: [
    {
      region: "Mumbai (All Areas)",
      focus: "Primary Focus: South Mumbai & Western Mumbai",
      locations: [
        "Colaba", "Nariman Point", "Marine Drive", "Churchgate", "Fort", "Malabar Hill", "Cuffe Parade", 
        "Tardeo", "Worli", "Lower Parel", "Byculla", "Dadar", "Bandra", "Khar", "Santacruz", "Vile Parle", 
        "Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar", "Chembur", 
        "Ghatkopar", "Kurla", "Sion", "Powai", "Mulund", "Bhandup", "Vikhroli"
      ],
    },
    {
      region: "Navi Mumbai (All Locations)",
      focus: "Comprehensive Doorstep Coverage",
      locations: [
        "Vashi", "Nerul", "Belapur", "Kharghar", "Panvel", "Seawoods", 
        "Kopar Khairane", "Airoli", "Ghansoli", "Sanpada", "Kamothe", "Ulwe"
      ],
    },
    {
      region: "Thane (All Locations)",
      focus: "Fast Response Technicians",
      locations: [
        "Thane West", "Thane East", "Ghodbunder Road", "Majiwada", 
        "Vartak Nagar", "Naupada", "Panch Pakhadi", "Wagle Estate", "Kasarvadavali"
      ],
    },
  ],
};

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.coolfixrepair.in";
