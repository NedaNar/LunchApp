import { useEffect, useState } from 'react';
import FocusTrap from 'focus-trap-react';
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
import { RatingData, UserData } from '../../api/apiModel';
import useFetch from '../../api/useDataFetching';
import { Endpoint } from '../../api/endpoints';
import CommentItem from './CommentItem';

export interface FoodModalProps {
  id: string;
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

interface Comment {
  id: string;
  userId: number;
  comment: string;
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
  id,
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
  const { data: ratings } = useFetch<RatingData[]>(Endpoint.RATINGS);
  const { data: users } = useFetch<UserData[]>(Endpoint.USERS);

  const [comments, setComments] = useState<Comment[]>([]);

  const formattedPrice = formatPrice(price);
  const formattedRating = formatRating(rating);

  const getComments = (data: RatingData[], mealId: string): Comment[] =>
    data
      .filter((item) => item.mealId.toString() === mealId)
      .map((item) => ({
        id: item.id,
        userId: item.rating.userId,
        comment: item.rating.comment,
      }));

  useEffect(() => {
    if (ratings) {
      setComments(getComments(ratings, id));
    }
  }, [ratings]);

  return (
    <FocusTrap focusTrapOptions={{ initialFocus: false }}>
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
          {comments.length > 0 && (
            <div className={styles.commentsSection}>
              <hr className={styles.separator} />
              <span className={styles.title}>COMMENTS ({comments.length})</span>
              <div className={styles.container}>
                {comments.map((comment) => (
                  <CommentItem
                    users={users}
                    id={comment.id}
                    userId={comment.userId}
                    comment={comment.comment}
                  />
                ))}
              </div>
            </div>
          )}
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
    </FocusTrap>
  );
}

export default FoodModal;
