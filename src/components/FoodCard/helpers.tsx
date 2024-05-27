import LogoIcon from '../../assets/static/logo/logo_without-text.svg?react';
import WrapIcon from '../../assets/static/food-images/food-image_kebab.svg?react';
import SoupIcon from '../../assets/static/food-images/food-image_soup.svg?react';
import ThaiIcon from '../../assets/static/food-images/food-image_ramen.svg?react';
import PizzaIcon from '../../assets/static/food-images/food-image_pizza.svg?react';
import SandwichIcon from '../../assets/static/food-images/food-image_sandwich.svg?react';
import BurgerIcon from '../../assets/static/food-images/food-image_hamburger.svg?react';

export enum DishType {
  Logo = 'logo',
  Wrap = 'wrap',
  Soup = 'soup',
  Thai = 'thai',
  Pizza = 'pizza',
  Sandwich = 'sandwich',
  Burger = 'burger',
}

export const getFoodIcon = (picture: DishType) => {
  switch (picture) {
    case DishType.Thai:
      return <ThaiIcon />;
    case DishType.Burger:
      return <BurgerIcon />;
    case DishType.Sandwich:
      return <SandwichIcon />;
    case DishType.Pizza:
      return <PizzaIcon />;
    case DishType.Soup:
      return <SoupIcon />;
    case DishType.Wrap:
      return <WrapIcon />;
    default:
      return <LogoIcon />;
  }
};
