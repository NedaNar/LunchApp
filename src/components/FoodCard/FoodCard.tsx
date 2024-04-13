import styles from './foodCard.module.scss';
import { Button, ButtonAppearance, ButtonSize, ButtonIcon } from '../RegularButton/Button';
import SolarStarIcon from '../../assets/static/icons/icon_solar-star.svg?react';
import RamenIcon from '../../assets/static/food-images/food-image_ramen.svg?react';
import PlantIcon from '../../assets/static/icons/icon_plant.svg?react';
import ChiliIcon from '../../assets/static/icons/icon_chili-mild.svg?react';

function FoodCard() {
  return (
    <article className={styles.foodCard}>
      <header className={styles.cardHeader}>
        <figure className={styles.cardHeaderLogo}>
          <RamenIcon className={styles.logo} />
        </figure>
        <div className={styles.cardSubHeader}>
          <p className={styles.titleXS}>SKOMI</p>
          <p className={styles.titleS}>Pho Rice Noodle Soup with Tofu</p>
          <figure className={styles.cardSubHeaderFigures}>
            <PlantIcon className={styles.plant} />
            <ChiliIcon className={styles.chili} />
          </figure>
        </div>
      </header>
      <section className={styles.cardBody}>
        <p className={styles.bodyM}>
          Rice udon noodles in shiitake stock, fried shredded tofu. Garnished with chilli, coriander
          and spring onions.
        </p>
        <div className={styles.cardSubBody}>
          <div className={styles.evaluation}>
            <figure className={styles.evaluationFigure}>
              <SolarStarIcon className={styles.evaluationLogo} />
            </figure>
            <p className={styles.labelXS}>5.0</p>
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
          <p className={styles.titleL}>€5,65</p>
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
