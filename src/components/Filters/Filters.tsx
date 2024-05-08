import { ChangeEvent } from 'react';
import { Input } from '../Input/Input';
import styles from './filters.module.scss';
import { Button, ButtonAppearance, ButtonSize, ButtonType } from '../RegularButton/Button';

interface FiltersProps {
  sort?: boolean;
  searchInput: string;
  onSearchInputChange: (searchTerm: string) => void;
}

function Filters({ sort = true, searchInput, onSearchInputChange }: FiltersProps) {
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchInputChange(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.filtersLayout}>
      <div className={styles.filters}>
        <div className={styles.filtersWrapper}>
          <Input
            label="What dish are you looking for?"
            name="dishInput"
            id="dishInput"
            placeholder="Enter a dish"
            icon
            value={searchInput}
            onChange={handleSearchInput}
          />
          <Input
            label="Vendor"
            name="vendorInput"
            id="vendorInput"
            placeholder="All vendors"
            dropdownIcon
          />
        </div>
        <Button
          text="Search"
          appearance={ButtonAppearance.PRIMARY}
          size={ButtonSize.MEDIUM}
          onClick={() => {}}
          buttonType={ButtonType.BUTTON}
        />
      </div>
      {sort && <div className={styles.seperator} />}
      {sort && (
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
      )}
    </div>
  );
}

export default Filters;
