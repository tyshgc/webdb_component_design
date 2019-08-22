import { BRANDS_DATA } from "./brandsData";
import { CATEGORIES_DATA } from "./categoriesData";

export const PRODUCTS_DATA = [
  {
    id: 1,
    name: "AのTシャツ",
    image: "/dummy-t-shirts.png",
    thumbnailImage: "/dummy-t-shirts.png",
    category: [CATEGORIES_DATA[0]],
    brand: BRANDS_DATA[0],
    valiation: [
      {
        id: 0,
        name: "FREEサイズ",
        sku: {
          id: 0,
          stock: 1000
        }
      }
    ],
    spec: [
      {
        label: "丈",
        info: "100mm"
      },
      {
        label: "袖",
        info: "30mm"
      }
    ],
    description: "人気のブランド A Brandから最新の夏向けTシャツリリース！",
    price: 2000
  },
  {
    id: 2,
    name: "Bのシャツ",
    image: "/dummy-shirts.png",
    thumbnailImage: "/dummy-shirts.png",
    category: [CATEGORIES_DATA[0]],
    brand: BRANDS_DATA[1],
    valiation: [
      {
        id: 0,
        name: "FREEサイズ",
        sku: {
          id: 0,
          stock: 1000
        }
      }
    ],
    spec: [
      {
        label: "丈",
        info: "100mm"
      },
      {
        label: "袖",
        info: "30mm"
      }
    ],
    description: "人気のブランド A Brandから最新の夏向けTシャツリリース！",
    price: 2000
  },
  {
    id: 3,
    name: "Cの7部丈",
    image: "/dummy-ankle-length.png",
    thumbnailImage: "/dummy-ankle-length.png",
    category: [CATEGORIES_DATA[0]],
    brand: BRANDS_DATA[2],
    valiation: [
      {
        id: 0,
        name: "Mサイズ",
        sku: {
          id: 0,
          stock: 1000
        }
      }
    ],
    spec: [
      {
        label: "丈",
        info: "100mm"
      },
      {
        label: "袖",
        info: "30mm"
      }
    ],
    description: "人気のブランド C Brandから最新の夏向け7部丈シャツリリース！",
    price: 14200
  }
];
