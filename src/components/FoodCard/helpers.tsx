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
import LogoIcon from '../../assets/static/logo/logo_without-text.svg?react';

export enum DishType {
  Thai = 'thai',
  Burger = 'burger',
  Bowl = 'bowl',
  Sandwich = 'sandwich',
  Steak = 'steak',
  Tacos = 'tacos',
  Salad = 'salad',
  Pizza = 'pizza',
  Soup = 'soup',
  Pasta = 'pasta',
  Wrap = 'wrap',
}

export const getFoodIcon = (picture: DishType) => {
  switch (picture) {
    case DishType.Thai:
      return <ThaiIcon />;
    case DishType.Burger:
      return <BurgerIcon />;
    case DishType.Bowl:
      return <BowlIcon />;
    case DishType.Sandwich:
      return <SandwichIcon />;
    case DishType.Steak:
      return <SteakIcon />;
    case DishType.Tacos:
      return <TacosIcon />;
    case DishType.Salad:
      return <SaladIcon />;
    case DishType.Pizza:
      return <PizzaIcon />;
    case DishType.Soup:
      return <SoupIcon />;
    case DishType.Pasta:
      return <PastaIcon />;
    case DishType.Wrap:
      return <WrapIcon />;
    default:
      return <LogoIcon />;
  }
};
