import { Button, ButtonAppearance, ButtonSize, ButtonIcon } from '../RegularButton/Button';
import IconButton, {
  IconButtonSize,
  IconButtonType,
  IconButtonIcon,
} from '../IconButton/IconButton';
import { getFoodIcon, DishType } from '../FoodCard/helpers';
import SolarStarIcon from '../../assets/static/icons/icon_solar-star.svg?react';
import SolarStarDuotoneIcon from '../../assets/static/icons/icon_solar-star-duotone.svg?react';
import SolarStarOutlineIcon from '../../assets/static/icons/icon_solar-star-outline.svg?react';
import PlantIcon from '../../assets/static/icons/icon_plant.svg?react';
import ChiliIcon from '../../assets/static/icons/icon_chili-mild.svg?react';
import { formatPrice, formatRating } from '../../utils/priceUtils';
import { FREE_MEAL_DAY, FREE_MEAL_TEXT } from '../../utils/constants';
import styles from './foodModal.module.scss';

export interface FoodModalProps {
  title: string;
  description: string;
  price: number;
  picture: DishType;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  rating: number | string;
  vendor: string;
  weekday: string;
  handleAddToCart: () => void;
  handleCloseModal: () => void;
}

function getStarIcons(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i += 1) {
    stars.push(<SolarStarIcon key={`full-${i}`} className={styles.ratingLogo} />);
  }

  if (hasHalfStar) {
    stars.push(<SolarStarOutlineIcon key="half" className={styles.ratingLogo} />);
  }

  const outlineStars = 5 - stars.length;
  for (let i = 0; i < outlineStars; i += 1) {
    stars.push(<SolarStarDuotoneIcon key={`outline-${i}`} className={styles.ratingLogo} />);
  }

  return stars;
}

function FoodModal({
  title,
  description,
  price,
  picture,
  isVegetarian = false,
  isSpicy = false,
  rating,
  vendor,
  weekday,
  handleAddToCart,
  handleCloseModal,
}: FoodModalProps) {
  const formattedPrice = formatPrice(price);
  const formattedRating = formatRating(rating);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Dish Details</h2>
          <IconButton
            type={IconButtonType.TERTIARY}
            size={IconButtonSize.MEDIUM}
            icon={IconButtonIcon.CLOSE}
            onClick={handleCloseModal}
          />
        </div>
        <div className={styles.modalBody}>
          <div className={styles.details}>
            <figure className={styles.foodIcon}>{getFoodIcon(picture)}</figure>
            <div className={styles.info}>
              <p className={styles.vendor}>{vendor}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
              <div className={styles.icons}>
                {isVegetarian && <PlantIcon className={styles.icon} />}
                {isSpicy && <ChiliIcon className={styles.icon} />}
              </div>
              <div className={styles.rating}>
                {typeof rating === 'number' && (
                  <div className={styles.ratingStars}>{getStarIcons(Number(rating))}</div>
                )}
                <p className={styles.ratingValue}>{formattedRating}</p>
              </div>
              <p className={styles.price}>
                Price: {weekday !== FREE_MEAL_DAY ? formattedPrice : FREE_MEAL_TEXT}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <Button
            text="Close"
            appearance={ButtonAppearance.TERTIARY}
            size={ButtonSize.SMALL}
            onClick={handleCloseModal}
          />
          <Button
            text="Add to cart"
            appearance={ButtonAppearance.PRIMARY}
            size={ButtonSize.SMALL}
            icon={ButtonIcon.ADD}
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default FoodModal;
