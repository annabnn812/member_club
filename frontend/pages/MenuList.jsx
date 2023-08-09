// No need to import images using next/image, use the relative path
import pepperoniImage from "../public/pepperoni.png"
import margheritaImage from "../public/margherita.png"
import veganImage from  "../public/vegan.png" 
import pedrotechImage from "../public/pedrotechspecial.png"
import pineappleImage from "../public/pineapple.png"
import meatImage from "../public/meat.png"

export const MenuList = [
  {
    name: "Pepperoni Pizza",
    image: pepperoniImage,
    price: 17,
  },
  {
    name: "Margherita Pizza",
    image: margheritaImage,
    price: 11,
  },
  {
    name: "Vegan Pizza",
    image: veganImage,
    price: 16,
  },
  {
    name: "Pineapple Pizza",
    image: pineappleImage,
    price: 18,
  },{
    name: "Special Pizza",
    image: pedrotechImage,
    price: 25,
  },
  {
    name: "Meat Pizza",
    image: meatImage,
    price: 22,
  },
];
