import BurgerIcon from '../../assets/static/food-images/food-image_hamburger.svg?react';
import BowlIcon from '../../assets/static/food-images/food-image_ramen.svg?react';
import SandwichIcon from '../../assets/static/food-images/food-image_sandwich.svg?react';
import SteakIcon from '../../assets/static/food-images/food-image_chicken.svg?react';
import TacosIcon from '../../assets/static/food-images/food-image_corn.svg?react';
import SaladIcon from '../../assets/static/food-images/food-image_fries.svg?react';
import PizzaIcon from '../../assets/static/food-images/food-image_pizza.svg?react';
import ThaiIcon from '../../assets/static/food-images/food-image_pretzel.svg?react';
import PastaIcon from '../../assets/static/food-images/food-image_hamburger-and-fries.svg?react';
import SoupIcon from '../../assets/static/food-images/food-image_soup.svg?react';
import WrapIcon from '../../assets/static/food-images/food-image_kebab.svg?react';

const helpers = (picture: string) => {
  switch (picture) {
    case 'thai':
      return <ThaiIcon />;
    case 'burger':
      return <BurgerIcon />;
    case 'bowl':
      return <BowlIcon />;
    case 'sandwich':
      return <SandwichIcon />;
    case 'steak':
      return <SteakIcon />;
    case 'tacos':
      return <TacosIcon />;
    case 'salad':
      return <SaladIcon />;
    case 'pizza':
      return <PizzaIcon />;
    case 'soup':
      return <SoupIcon />;
    case 'pasta':
      return <PastaIcon />;
    case 'wrap':
      return <WrapIcon />;
    default:
      return <BurgerIcon />;
  }
};

export default helpers;
