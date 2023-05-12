

const items = [
  {
    label: "Apple Products",
    key: 1,
    children: [
      {
        label: "MacBook",
        key: 1.1,
        children: [
          { label: "Apple MacBook Air", key: "1.1.1" },
          { label: "Apple MacBook Pro", key: "1.1.2" },
          { label: "Apple iMac", key: "1.1.3" },
          { label: "Apple Mac mini", key: "1.1.4" },
          { label: "Apple Studio Display", key: "1.1.5" },
        ],
      },
      {
        label: "iPad",
        key: 1.2,
        children: [
          { label: "iPad Pro", key: "1.2.1" },
          { label: "iPad Air", key: "1.2.2" },
          { label: "iPad", key: "1.2.3" },
          { label: "iPad mini", key: "1.2.4" },
        ],
      },
      {
        label: "iPhone",
        key: 1.3,
        children: [
          { label: "iPhone 14", key: "1.3.1" },
          { label: "iPhone 14 Plus", key: "1.3.2" },
          { label: "iPhone 14 Pro", key: "1.3.3" },
          { label: "iPhone 14 Pro Max", key: "1.3.4" },
          { label: "iPhone 13", key: "1.3.5" },
          { label: "iPhone 13 Pro Max", key: "1.3.6" },
          { label: "iPhone 12", key: "1.3.7" },
          { label: "iPhone 11", key: "1.3.8" },
        ],
      },
      {
        label: "Apple Watch",
        key: 1.4,
        children: [
          { label: "Apple Watch Series 8", key: "1.4.1" },
          { label: "Apple Watch SE", key: "1.4.2" },
          { label: "Apple Watch Ultra", key: "1.4.3" },
        ],
      },
      {
        label: "AirPods",
        key: 1.5,
        children: [
          { label: "Apple Watch Series 8", key: "1.5.1" },
          { label: "Apple Watch SE", key: "1.5.2" },
          { label: "Apple Watch Ultra", key: "1.5.3" },
        ],
      },
      {
        label: "Apple Accessories",
        key: 1.6,
        children: [
          { label: "Adapter", key: "1.6.1" },
          { label: "Cable", key: "1.6.2" },
          { label: "Mac Accessories", key: "1.6.3" },
          { label: "Apple Pencill", key: "1.6.4" },
          { label: "Cases & Covers", key: "1.6.5" },
          { label: "Keyboard", key: "1.6.6" },
          { label: "Headphones & Speakers", key: "1.6.7" },
          { label: "Uniq", key: "1.6.8" },
          { label: "AirTag", key: "1.6.9" },
        ],
      }
    ],
  },
  {
    label: "Laptops",
    key: 2,
    children: [
      {
        label: "Laptops",
        key: 2.1,
        children: [
          { label: "Acer", key: "2.1.1" },
          { label: "Asus", key: "2.1.2" },
          { label: "Dell", key: "2.1.3" },
          { label: "HP", key: "2.1.4" },
          { label: "Lenovo", key: "2.1.5" },
          { label: "Mi", key: "2.1.6" },
        ],
      },
      {
        label: "Gaming Laptops",
        key: 2.2,
        children: [
          { label: "Acer", key: "2.2.1" },
          { label: "Alienware", key: "2.2.2" },
          { label: "Asus", key: "2.2.3" },
          { label: "Dell", key: "2.2.4" },
          { label: "Gigabyte", key: "2.2.5" },
          { label: "HP", key: "2.2.6" },
          { label: "Lenovo", key: "2.2.7" },
          { label: "MSI", key: "2.2.8" },
        ],
      },
      {
        label: "Ultrathin Laptops",
        key: 2.3,
        children: [
          { label: "Acer", key: "2.3.1" },
          { label: "Asus", key: "2.3.2" },
          { label: "Dell", key: "2.3.3" },
          { label: "Fujitsu", key: "2.3.4" },
          { label: "HP", key: "2.3.5" },
          { label: "Huawei", key: "2.3.6" },
          { label: "Lenovo", key: "2.3.7" },
          { label: "LG", key: "2.3.8" },
          { label: "Microsoft", key: "2.3.9" },
          { label: "MSI", key: "2.3.10" },
        ],
      },
      {
        label: "2 in 1 Laptops",
        key: 2.4,
        children: [
          { label: "Asus", key: "2.4.1" },
          { label: "Dell", key: "2.4.2" },
          { label: "HP", key: "2.4.3" },
          { label: "Lenovo", key: "2.4.4" },
          { label: "Microsoft", key: "2.4.5" },
        ],
      },
      {
        label: "Laptop Ram",
        key: 2.5,
        children: [
          { label: "DDR5 4800Mhz", key: "2.5.1" },
          { label: "DDR4 3200Mhz", key: "2.5.2" },
          { label: "DDR4 2666Mhz", key: "2.5.3" },
          { label: "DDR3 1600Mhz", key: "2.5.4" },
        ],
      },
      {
        label: "Laptop HDD",
        key: 2.6,
        children: [
          { label: "2.5 Inch HDD", key: "2.6.1" },
        ],
      },
      {
        label: "Laptop Accessories",
        key: 2.7,
        children: [
          { label: "Accessories", key: "2.7.1" },
          { label: "Adapter for Notebook", key: "2.7.2" },
          { label: "Adapter / Converter", key: "2.7.3" },
          { label: "Bag / Backpack", key: "2.7.4" },
          { label: "Caddy Drive (2.5 inch)", key: "2.7.5" },
          { label: "Docking Station", key: "2.7.6" },
          { label: "Microsoft Surface", key: "2.7.7" },
          { label: "Notebook Cooling", key: "2.7.8" },
          { label: "Stylus", key: "2.7.9" },
          { label: "USB Type C Multiport Adapter", key: "2.7.10" },
        ],
      },
    ],
  },
  {
    label: "Computer SET",
    key: 3,
    children: [
      {
        label: "Computer Set JIB",
        key: 3.1,
        children: [
          { label: "Computer Set JIB (AMD)", key: "3.1.1" },
          { label: "Computer Set JIB (Intel)", key: "3.1.2" },
        ],
      },
      {
        label: "Computer Set Maru",
        key: 3.2
      },
    ],
  },
  {
    label: "Desktop / All in One",
    key: 4,
    children: [
      {
        label: "Desktop PC",
        key: 4.1,
        children: [
          { label: "Acer", key: "4.1.1" },
          { label: "Alienware", key: "4.1.2" },
          { label: "Asus", key: "4.1.3" },
          { label: "Dell", key: "4.1.4" },
          { label: "HP", key: "4.1.5" },
          { label: "Lenovo", key: "4.1.6" },
          { label: "MSI", key: "4.1.7" },
        ],
      },
      {
        label: "All in One PC (AIO)",
        key: 4.2,
        children: [
          { label: "Acer", key: "4.2.1" },
          { label: "Asus", key: "4.2.2" },
          { label: "Dell", key: "4.2.3" },
          { label: "HP", key: "4.2.4" },
          { label: "Lenovo", key: "4.2.5" },
          { label: "MSI", key: "4.2.6" },
        ],
      },
      {
        label: "Mini PC",
        key: 4.3,
        children: [
          { label: "Acer", key: "4.3.1" },
          { label: "Gigabyte", key: "4.3.2" },
          { label: "Intel", key: "4.3.3" },
          { label: "MSI", key: "4.3.4" },
        ],
      },
    ],
  },
  {
    label: "PC Components (DIY)",
    key: 5,
    children: [
      {
        label: "CPU",
        key: 5.1,
        children: [
          { label: "AMD AM4", key: "5.1.1" },
          { label: "AMD AM5", key: "5.1.2" },
          { label: "AMD sWRX8", key: "5.1.3" },
          { label: "Intel LGA 1151", key: "5.1.4" },
          { label: "Intel LGA 1200", key: "5.1.5" },
          { label: "Intel LGA 1700", key: "5.1.6" },
        ],
      },
      {
        label: "Mainboard",
        key: 5.2,
        children: [
          { label: "Socket AMD E1-6010", key: "5.2.1" },
          { label: "Processor", key: "5.2.2" },
          { label: "AMD AM4", key: "5.2.3" },
          { label: "AMD AM5", key: "5.2.4" },
          { label: "AMD sWRX8", key: "5.2.5" },
          { label: "Intel LGA 1150", key: "5.2.6" },
          { label: "Intel LGA 1151", key: "5.2.7" },
          { label: "Intel LGA 1200", key: "5.2.8" },
          { label: "Intel LGA 1700", key: "5.2.9" },
        ],
      },
      {
        label: "Graphic Card",
        key: 5.3,
        children: [
          { label: "AMD Readeon Pro Series", key: "5.3.1" },
          { label: "AMD Readeon RX 500 Series", key: "5.3.2" },
          { label: "AMD Readeon RX 6000 Series", key: "5.3.3" },
          { label: "AMD Readeon RX 7000 Series", key: "5.3.4" },
          { label: "Intel Arc A-Series", key: "5.3.5" },
          { label: "NVIDIA GeForce 700 Series", key: "5.3.6" },
          { label: "NVIDIA GeForce 10 Series", key: "5.3.7" },
          { label: "NVIDIA GeForce 16 Series", key: "5.3.8" },
          { label: "NVIDIA GeForce 20 Series", key: "5.3.9" },
          { label: "NVIDIA GeForce 30 Series", key: "5.3.10" },
          { label: "NVIDIA GeForce 40 Series", key: "5.3.11" },
          { label: "NVIDIA Quadro Series", key: "5.3.12" },
          { label: "NVIDIA RTX Pro Series", key: "5.3.13" },
        ],
      },
      {
        label: "RAM",
        key: 5.4,
        children: [
          { label: "DDR3 1600Mhz", key: "5.4.1" },
          { label: "DDR4 2666Mhz", key: "5.4.2" },
          { label: "DDR4 3200Mhz", key: "5.4.3" },
          { label: "DDR4 3600Mhz", key: "5.4.4" },
          { label: "DDR4 4600Mhz", key: "5.4.5" },
          { label: "DDR5 4800Mhz", key: "5.4.6" },
          { label: "DDR5 5200Mhz", key: "5.4.7" },
          { label: "DDR5 5600Mhz", key: "5.4.8" },
          { label: "DDR5 6000Mhz", key: "5.4.9" },
          { label: "DDR5 6200Mhz", key: "5.4.10" },
          { label: "DDR5 6400Mhz", key: "5.4.11" },
        ],
      },
      {
        label: "Case / Power Supply",
        key: 5.5,
        children: [
          { label: "Computer Case", key: "5.5.1" },
          { label: "Power Supply", key: "5.5.2" },
          { label: "Computer Case Accessories", key: "5.5.3" },
        ],
      },
      {
        label: "Optical Disk Drive",
        key: 5.6,
        children: [
          { label: "External DVD Drive", key: "5.6.1" },
          { label: "Internal DVD Drive", key: "5.6.2" },
        ],
      },
      {
        label: "Sound Card",
        key: 5.7,
        children: [
          { label: "External Sound Card", key: "5.7.1" },
          { label: "Internal Sound Card", key: "5.7.2" },
        ],
      },
      {
        label: "Card Reader",
        key: 5.8,
        children: [
          { label: "External Card Reader", key: "5.8.1" },
        ],
      },
    ],
  },
  {
    label: "Monitor",
    key: 6,
    children: [
      {
        label: "Monitor",
        key: 6.1,
        children: [
          { label: "AOC", key: "6.1.1" },
          { label: "Asus", key: "6.1.2" },
          { label: "Alienware", key: "6.1.3" },
          { label: "ACer", key: "6.1.4" },
        ],
      },
      {
        label: "Monitor Arm / Mount",
        key: 6.2,
        children: [
          { label: "Flexispot", key: "6.2.1" },
        ],
      },
      {
        label: "Monitor Stand",
        key: 6.3,
        children: [
          { label: "Ekonta", key: "6.3.1" },
        ],
      },
    ],
  },
  {
    label: "Gaming Gear",
    key: 7,
    children: [
      {
        label: "Game Controller / Joystick",
        key: 7.1,
        children: [
          { label: "Controller", key: "7.1.1" },
        ],
      },
      {
        label: "Gaming Accessories",
        key: 7.2,
        children: [
          { label: "Microphone", key: "7.2.1" },
        ],
      },
      {
        label: "Bundle Pack",
        key: 7.3,
        children: [
          { label: "Bundle Pack", key: "7.3.1" },
        ],
      },
      {
        label: "Console",
        key: 7.4,
        children: [
          { label: "Nintendo Games", key: "7.4.1" },
        ],
      },
      {
        label: "Gaming Chair",
        key: 7.5,
        children: [
          { label: "AKRacing", key: "7.5.1" },
          { label: "Aerocool", key: "7.5.2" },
          { label: "Anda Seat", key: "7.5.3" },
          { label: "Cooler Master", key: "7.5.4" },
          { label: "Cougar", key: "7.5.5" },
        ],
      },
      {
        label: "Gaming Desk",
        key: 7.6,
        children: [
          { label: "Cougar", key: "7.6.1" },
          { label: "Ergopixel", key: "7.6.2" },
          { label: "Neolution", key: "7.6.3" },
          { label: "Signo", key: "7.6.4" },
          { label: "Thermaltake", key: "7.6.5" },
        ],
      },
    ],
  },
  {
    label: "Storage / Memory Card",
    key: 8,
    children: [
      {
        label: "Hard Drive / Solid State Drive",
        key: 8.1,
        children: [
          { label: "Desktop / Gaming HDD", key: "8.1.1" },
          { label: "Enterprise / Data Center HDD", key: "8.1.2" },
          { label: "NAS HDD", key: "8.1.3" },
          { label: "Surveillance / CCTV / DVR / NVR HDD", key: "8.1.4" },
          { label: "2.5 Inch SSD", key: "8.1.5" },
          { label: "M.2 SSD", key: "8.1.6" },
          { label: "PCle Card SSD", key: "8.1.7" },
        ],
      },
      {
        label: "External / Portable Drive",
        key: 8.2,
        children: [
          { label: "External HDD (3.5 Inch)", key: "8.2.1" },
        ],
      },
      {
        label: "Flash Drive",
        key: 8.3,
        children: [
          { label: "Apacer", key: "8.3.1" },
        ],
      },
      {
        label: "Memory Card",
        key: 8.4,
        children: [
          { label: "Micro SD Card", key: "8.4.1" },
          { label: "SD Card", key: "8.4.2" },
        ],
      },
      {
        label: "Storage Accessories",
        key: 8.5,
        children: [
          { label: "HDD Docking", key: "8.5.1" },
          { label: "HDD Enclosure", key: "8.5.2" },
          { label: "M.2 Enclosure", key: "8.5.3" },
        ],
      },
      {
        label: "NAS Storage",
        key: 8.6,
        children: [
          { label: "Asustor", key: "8.6.1" },
          { label: "Qnap", key: "8.6.2" },
          { label: "Synology", key: "8.6.3" },
        ],
      },
    ],
  },
  {
    label: "Network",
    key: 9,
    children: [
      {
        label: "Network Device",
        key: 9.1,
        children: [
          { label: "Access Point", key: "9.1.1" },
          { label: "LAN Card", key: "9.1.2" },
          { label: "Mesh Wi-Fi", key: "9.1.3" },
        ],
      },
      {
        label: "Network Accessories",
        key: 9.2,
        children: [
          { label: "Cable", key: "9.2.1" },

        ],
      },
      {
        label: "Networking Tools",
        key: 9.3,
        children: [
          { label: "Cable Tester", key: "9.3.1" },
        ],
      },
    ],
  },
  {
    label: "Printer / INK / Toner / Scanner",
    key: 10,
    children: [
      {
        label: "Printer",
        key: "10.1",
        children: [
          { label: "Canon", key: "10.1.1" },
          { label: "Inkjet Printers", key: "10.1.2" },
        ],
      },
      {
        label: "Ink / Toner / Tape",
        key: "10.2",
        children: [
          { label: "Brother", key: "10.2.1" },
          { label: "Canon", key: "10.2.2" },
        ],
      },
      {
        label: "Scanner",
        key: "10.3",
        children: [
          { label: "Brother", key: "10.3.1" },
          { label: "Canon", key: "10.3.2" },
        ],
      },
      {
        label: "Barcode Print / Scanner",
        key: "10.4",
        children: [
          { label: "Barcode Scanner", key: "10.4.1" },
        ],
      },
      {
        label: "Printer Accessories",
        key: "10.5",
        children: [
          { label: "Tray and paper feeder", key: "10.5.1" },
        ],
      },
      {
        label: "3D Printer",
        key: "10.6",
        children: [
          { label: "Creality", key: "10.6.1" },
        ],
      },
      {
        label: "Photo Paper",
        key: "10.7",
        children: [
          { label: "Begin Systems", key: "10.7.1" },
        ],
      },
      {
        label: "Cutting Machine",
        key: "10.8",
        children: [
          { label: "Brother", key: "10.8.1" },
        ],
      },
      {
        label: "Cutting Machine Accessories",
        key: "10.9",
        children: [
          { label: "Materials", key: "10.9.1" },
          { label: "Tools", key: "10.9.2" },
        ],
      },
      {
        label: "Easy Press Machine",
        key: "10.10",
        children: [
          { label: "Cricut", key: "10.10.1" },
        ],
      },
      {
        label: "Pres Mat Machine Accssories",
        key: "10.11",
        children: [
          { label: "Cricut", key: "10.11.1" },
        ],
      },
    ],
  },
  {
    label: "Keyboard / Mouse",
    key: 11,
    children: [
      {
        label: "Keyboard",
        key: "11.1",
        children: [
          { label: "Keyboard", key: "11.1.1" },
        ],
      },
      {
        label: "Mechanical / Gaming Keyboard",
        key: "11.2",
        children: [
          { label: "Arrow X", key: "11.2.1" },
          { label: "Asus", key: "11.2.2" },
        ],
      },
      {
        label: "Mechanical Numpad",
        key: "11.3",
        children: [
          { label: "Glorious", key: "11.3.1" },
        ],
      },
      {
        label: "Keyboard / Mouse Combo",
        key: "11.4",
        children: [
          { label: "Keyboard / Mouse Combo", key: "11.4.1" },
        ],
      },
      {
        label: "Wireless Keyboard",
        key: "11.5",
        children: [
          { label: "Wireless Keyboard", key: "11.5.1" },
        ],
      },
      {
        label: "Keyboard Accessories",
        key: "11.6",
        children: [
          { label: "Cable", key: "11.6.1" },
          { label: "Keycap", key: "11.6.2" },
        ],
      },
      {
        label: "Mouse",
        key: "11.7",
        children: [
          { label: "Mouse", key: "11.7.1" },
        ],
      },
      {
        label: "Wireless Mouse",
        key: "11.8",
        children: [
          { label: "Wireless Mouse", key: "11.8.1" },
        ],
      },
      {
        label: "Gaming Mouse",
        key: "11.9",
        children: [
          { label: "Arrow-X", key: "11.9.1" },
          { label: "AOC", key: "11.9.2" },
          { label: "Asus", key: "11.9.3" },
        ],
      },
      {
        label: "Mouse Accessories",
        key: "11.10",
        children: [
          { label: "Mouse Feet", key: "11.10.1" },
        ],
      },
      {
        label: "Mouse Pad",
        key: "11.11",
        children: [
          { label: "Mouse Pad", key: "11.11.1" },
        ],
      },
      {
        label: "Trackball",
        key: "11.12",
        children: [
          { label: "Trackball", key: "11.12.1" },
        ],
      },
    ],
  },
  {
    label: "Commercial Products",
    key: 12,
    children: [],
  },
  {
    label: "TV",
    key: 13,
    children: [
      {
        label: "Smart TV",
        key: "13.1",
        children: [
          { label: "LG", key: "13.1.1" },
          { label: "Samsung", key: "13.1.2" },
          { label: "Xiaomi", key: "13.1.3" },
        ],
      },
    ],
  },
  {
    label: "Conference",
    key: 14,
    children: [],
  },
  {
    label: "Software",
    key: 15,
    children: [],
  },
  {
    label: "Sound System",
    key: 16,
    children: [],
  },
  {
    label: "Cooling System",
    key: 17,
    children: [],
  },
  {
    label: "PC Case Modding",
    key: 18,
    children: [],
  },
  {
    label: "Computer Peripherals",
    key: 19,
    children: [],
  },
  {
    label: "Content Creator",
    key: 20,
    children: [],
  },
  {
    label: "Life Style / Gadgets",
    key: 21,
    children: [],
  },
  {
    label: "SmartPhone / Tablet",
    key: 22,
    children: [],
  },
  {
    label: "Miscellaneous",
    key: 23,
    children: [],
  },
  {
    label: "Server",
    key: 24,
    children: [],
  },
  {
    label: "Camera / Dashcam / CCTV",
    key: 25,
    children: [],
  },
  {
    label: "Home Appliances",
    key: 26,
    children: [],
  },
  {
    label: "Office Equipment",
    key: 27,
    children: [],
  },
  {
    label: "Point Of Sale System",
    key: 28,
    children: [],
  },
];

export default items;
