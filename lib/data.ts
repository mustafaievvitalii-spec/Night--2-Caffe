export type Location = {
  title: string;
  address: string;
  description: string;
  hours: string[];
  image: string;
  tag: string;
};

export const locations: Location[] = [
  {
    title: 'no-comply',
    address: '824A W 12th St. Austin, TX 78701',
    description:
      'Nestled in No-Comply Skate Shop, we have a full service walk-up coffee + tea bar open seven days a week with pastries and weekend tacos fresh daily.',
    hours: ['WEEKDAYS – 8AM-6PM', 'WEEKENDS – 9AM-6PM'],
    image:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/af602ede-bc87-478f-9542-48d24609ce56/1J2A0999.jpg',
    tag: 'Skate shop coffee bar',
  },
  {
    title: 'SXSW HQ',
    address: '1400 LAVACA ST. Austin, TX 78701',
    description:
      'We took-over the empty bar at SXSW, offering our coffee, tea + tacos during the weekdays along with a comfortable, open work space to sit and hang for a while.',
    hours: ['WEEKDAYS – 8AM-2PM', 'WEEKENDS – CLOSED'],
    image:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/cb448490-45de-45df-84eb-7af1102b2b36/IW-OLDBRAND-25.png',
    tag: 'Downtown work space',
  },
];

export const menu = {
  coffee: ['Coffee', 'Cold Brew', 'Espresso', 'Americano', 'Macchiato', 'Cortado', 'Cappuccino', 'Latte', 'Mocha'],
  tea: ['Chai', 'Matcha', 'Earl Grey', 'Moonlight Jasmine', 'Wild Thai Black', 'Raspberry Green', 'Ginseng Detox', 'Turmeric Ginger', 'Mystic Mint', 'Hibiscus Berry'],
  add: ['Vanilla', 'Chocolate', 'Caramel', 'Honey', 'Simple Syrup', 'Lavender'],
  milk: ['Whole', 'Almond', 'Oat', 'Half & Half'],
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  hoverImage?: string;
  status?: 'sold out';
  options?: string[];
};

export const products: Product[] = [
  {
    id: 'magenta-blend',
    name: 'Idlewild - Magenta Blend',
    price: 20,
    description:
      '283g retail bag of our “Magenta” blend. Half Colombian, Half Guatemalan. Medium roast cocoa notes built for espresso, milk drinks, and drip.',
    image:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/1B21AB1F-EBF3-4967-8EAD-E7E76016E0F9.jpeg',
  },
  {
    id: 'black-dad-hat',
    name: 'BLACK DAD HAT - METAL SMILEY',
    price: 32,
    description:
      'Classic all black dad hat with a curved bill, buckle style fastener, and embroidery courtesy of Tightrope Embroidery.',
    image:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/AFF77D4D-CF1F-41A8-87E1-756AB19300AC.jpeg',
    hoverImage:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/E573DE44-31C3-4574-A0EC-BDB024BD04CC.jpeg',
  },
  {
    id: 'navy-tote',
    name: 'Idlewild Navy Tote',
    price: 22,
    description: 'Navy colored canvas tote with single sided screen printed Idlewild logo. Locally screen printed by Ramona Press.',
    image:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/IW_MERCH_SPRING24_WEB.jpg',
    hoverImage:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/IW_MERCH_SPRING24_WEB-2.jpg',
  },
  {
    id: 'black-trucker-hat',
    name: 'BLACK TRUCKER HAT - METAL IDLEWILD LOGO',
    price: 32,
    description:
      'Light weight trucker style hat with mesh side panelling and snap back style fastener. Embroidery courtesy of Tightrope Embroidery.',
    image:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/90D4DECC-AC4F-4951-BCA0-E51B877204C6.jpeg',
    hoverImage:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/C3B4D515-4EED-46CF-8847-5073B884A114.jpeg',
    status: 'sold out',
  },
  {
    id: 'metal-logo-shirt',
    name: 'T-SHIRT - METAL IDLEWILD LOGO',
    price: 30,
    description: 'Gray metal Idlewild logo on American Apparel t shirts.',
    image:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/0E3AC5DA-59F2-4EAE-A2B6-9D18D471C65B.jpeg',
    hoverImage:
      'https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/D1E21352-5B99-487C-A94E-3862E1A88FF4.jpeg',
    options: ['S', 'M', 'L', 'XL', 'XXL'],
  },
];
