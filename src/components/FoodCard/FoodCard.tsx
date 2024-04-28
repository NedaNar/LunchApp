import styles from './foodCard.module.scss';
import { Button, ButtonAppearance, ButtonSize, ButtonIcon } from '../RegularButton/Button';
import SolarStarIcon from '../../assets/static/icons/icon_solar-star.svg?react';
import PlantIcon from '../../assets/static/icons/icon_plant.svg?react';
import ChiliIcon from '../../assets/static/icons/icon_chili-mild.svg?react';
import { getFoodIcon, DishType } from './helpers';

export interface FoodCardProps {
  title: string;
  description: string;
  price: number;
  picture: DishType;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  rating: number | string;
  vendor: string;
}

function FoodCard({
  title,
  description,
  price,
  picture,
  isVegetarian = false,
  isSpicy = false,
  rating,
  vendor,
}: FoodCardProps) {
  const formattedPrice = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);

  const hasRating = typeof rating === 'number';
  const formattedRating = hasRating ? rating.toFixed(1) : rating;

  return (
    <article className={styles.foodCard}>
      <header className={styles.cardHeader}>
        <figure className={styles.cardHeaderLogo}>{getFoodIcon(picture)}</figure>
        <div className={styles.cardSubHeader}>
          <p className={styles.titleXS}>{vendor}</p>
          <p className={styles.titleS}>{title}</p>
          <div className={styles.cardSubHeaderFiguresWrap}>
            {isVegetarian && (
              <figure className={styles.cardSubHeaderFigures}>
                <PlantIcon className={styles.plant} />
              </figure>
            )}
            {isSpicy && (
              <figure className={styles.cardSubHeaderFigures}>
                <ChiliIcon className={styles.chili} />
              </figure>
            )}
          </div>
        </div>
      </header>

      <section className={styles.cardBody}>
        <p className={styles.bodyM}>{description}</p>
        <div className={styles.cardSubBody}>
          <div className={styles.rating}>
            {hasRating && (
              <figure className={styles.ratingFigure}>
                <SolarStarIcon className={styles.ratingLogo} />
              </figure>
            )}
            <p className={styles.labelXS}>{formattedRating}</p>
          </div>
          <Button
            text="More Info"
            appearance={ButtonAppearance.TERTIARY}
            size={ButtonSize.SMALL}
            icon={ButtonIcon.ARROW}
            onClick={() => {}}
          />
        </div>
      </section>

      <footer className={styles.cardFooter}>
        <div className={styles.cardFooterText}>
          <p className={styles.bodyS}>Price</p>
          <p className={styles.titleL}>{formattedPrice}</p>
        </div>
        <Button
          text="Add to cart"
          appearance={ButtonAppearance.SECONDARY}
          size={ButtonSize.SMALL}
          icon={ButtonIcon.ADD}
          onClick={() => {}}
        />
      </footer>
    </article>
  );
}

export default FoodCard;

// Use case:
// <FoodCard
//      vendor='Tasty Bites'
//      title='Pho Rice Noodle Soup with Tofu'
//      description='Rice udon noodles in  shiitake stock, fried shredded tofu. Garnish...'
//      price={5.65}
//      picture={DishType.Bowl}
//      isVegetarian={true}
//      isSpicy={true}
//      rating={5.0}/>
