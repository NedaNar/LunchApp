import styles from './foodCard.module.scss';
import { Button, ButtonAppearance, ButtonSize, ButtonIcon } from '../RegularButton/Button';
import SolarStarIcon from '../../assets/static/icons/icon_solar-star.svg?react';
import PlantIcon from '../../assets/static/icons/icon_plant.svg?react';
import ChiliIcon from '../../assets/static/icons/icon_chili-mild.svg?react';
import helpers from './helpers';

export interface FoodCardProps {
  title: string;
  description: string;
  price: number;
  picture: string;
  isVegetarian: boolean;
  isSpicy: boolean;
  evaluation: number;
}

function FoodCard({
  title,
  description,
  price,
  picture,
  isVegetarian = false,
  isSpicy = false,
  evaluation,
}: FoodCardProps) {
  const formattedPrice = price.toFixed(2).replace('.', ',');

  return (
    <article className={styles.foodCard}>
      <header className={styles.cardHeader}>
        <figure className={styles.cardHeaderLogo}>{helpers(picture)}</figure>
        <div className={styles.cardSubHeader}>
          <p className={styles.titleXS}>SKOMI</p>
          <p className={styles.titleS}>{title}</p>
          <figure className={styles.cardSubHeaderFigures}>
            {isVegetarian && <PlantIcon className={styles.plant} />}
            {isSpicy && <ChiliIcon className={styles.chili} />}
          </figure>
        </div>
      </header>

      <section className={styles.cardBody}>
        <p className={styles.bodyM}>{description}</p>
        <div className={styles.cardSubBody}>
          <div className={styles.evaluation}>
            <figure className={styles.evaluationFigure}>
              <SolarStarIcon className={styles.evaluationLogo} />
            </figure>
            <p className={styles.labelXS}>{evaluation}</p>
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
          <p className={styles.titleL}>€{formattedPrice}</p>
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
//      title='Pho Rice Noodle Soup with Tofu'
//      description='Rice udon noodles in  shiitake stock, fried shredded tofu. Garnish...'
//      price={5.65}
//      picture='bowl'
//      isVegetarian={true}
//      isSpicy={true}
//      evaluation={5.0}/>
