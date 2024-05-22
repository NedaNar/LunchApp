import { Button, ButtonAppearance, ButtonSize, ButtonIcon } from '../RegularButton/Button';
import IconButton, {
  IconButtonSize,
  IconButtonType,
  IconButtonIcon,
} from '../IconButton/IconButton';
import { getFoodIcon, DishType } from '../FoodCard/helpers';
import SolarStarIcon from '../../assets/static/icons/icon_solar-star.svg?react';
import PlantIcon from '../../assets/static/icons/icon_plant.svg?react';
import ChiliIcon from '../../assets/static/icons/icon_chili-mild.svg?react';
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
  const formattedPrice = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);

  const hasRating = typeof rating === 'number';
  const formattedRating = hasRating ? rating.toFixed(1) : rating;

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
                {hasRating && (
                  <figure className={styles.ratingFigure}>
                    <SolarStarIcon className={styles.ratingLogo} />
                  </figure>
                )}
                <p className={styles.ratingValue}>{formattedRating}</p>
              </div>
              <p className={styles.price}>
                Price: {weekday !== 'Friday' ? formattedPrice : 'Free'}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <Button
            text="Add to cart"
            appearance={ButtonAppearance.PRIMARY}
            size={ButtonSize.SMALL}
            icon={ButtonIcon.ADD}
            onClick={handleAddToCart}
          />
          <Button
            text="Close"
            appearance={ButtonAppearance.TERTIARY}
            size={ButtonSize.SMALL}
            onClick={handleCloseModal}
          />
        </div>
      </div>
    </div>
  );
}

export default FoodModal;
