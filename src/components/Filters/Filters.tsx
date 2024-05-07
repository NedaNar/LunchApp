import { Input } from '../Input/Input';
import styles from './filters.module.scss';
import { Button, ButtonAppearance, ButtonSize, ButtonType } from '../RegularButton/Button';

function Filters() {
  return (
    <div className={styles.filtersLayout}>
      <div className={styles.filters}>
        <div className={styles.filtersWrapper}>
          <Input
            label="What dish are you looking for?"
            name="dishInput"
            id="dishInput"
            placeholder="Enter a dish"
          />
          <Input label="Vendor" name="vendorInput" id="vendorInput" />
        </div>
        <Button
          text="Search"
          appearance={ButtonAppearance.PRIMARY}
          size={ButtonSize.MEDIUM}
          onClick={() => {}}
          buttonType={ButtonType.BUTTON}
        />
      </div>
      <div className={styles.seperator} />
      <div className={styles.sort}>
        <p className={styles.title}>Sort by</p>
        <Button
          text="POPULARITY"
          appearance={ButtonAppearance.SECONDARY}
          size={ButtonSize.XSMALL}
          onClick={() => {}}
          buttonType={ButtonType.SUBMIT}
        />
        <Button
          text="PRICE"
          appearance={ButtonAppearance.TERTIARY}
          size={ButtonSize.XSMALL}
          onClick={() => {}}
          buttonType={ButtonType.SUBMIT}
        />
        <Button
          text="RATING"
          appearance={ButtonAppearance.TERTIARY}
          size={ButtonSize.XSMALL}
          onClick={() => {}}
          buttonType={ButtonType.SUBMIT}
        />
      </div>
    </div>
  );
}

export default Filters;
