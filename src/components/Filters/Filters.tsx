import { ChangeEvent, useState } from 'react';
import { Input } from '../Input/Input';
import styles from './filters.module.scss';
import { Button, ButtonAppearance, ButtonSize, ButtonType } from '../RegularButton/Button';
import ReusableDropdown, { DropdownItem } from './ReusableDropdown';

interface FiltersProps {
  sort?: boolean;
  onSearchButtonClick: (searchTerm: string, selectedVendor: number | null) => void;
  onVendorSelect: (vendor: number | null) => void;
  dropdownData: DropdownItem[];
  selectedVendor: number | null;
  clearFiltersButton: boolean;
  onClearFiltersButtonClick: () => void;
}

function Filters({
  sort = true,
  onSearchButtonClick,
  onVendorSelect,
  dropdownData,
  selectedVendor,
  clearFiltersButton = false,
  onClearFiltersButtonClick,
}: FiltersProps) {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchButtonClick(searchInput, selectedVendor);
  };

  const handleSelect = (vendorId: number | null) => {
    onVendorSelect(vendorId);
  };

  const handleClearFiltersButtonClick = () => {
    onClearFiltersButtonClick();
    setSearchInput('');
  };

  return (
    <div className={styles.filtersLayout}>
      <form onSubmit={formHandler}>
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
            <ReusableDropdown
              id="vendors"
              label="Vendor"
              title="All vendors"
              data={dropdownData}
              selectedId={selectedVendor ?? undefined}
              onSelect={handleSelect}
            />
          </div>
          <div className={styles.filterButtonWrapper}>
            {clearFiltersButton && (
              <Button
                text="Clear filters"
                appearance={ButtonAppearance.SECONDARY}
                size={ButtonSize.MEDIUM}
                onClick={handleClearFiltersButtonClick}
                buttonType={ButtonType.BUTTON}
              />
            )}
            <Button
              text="Search"
              appearance={ButtonAppearance.PRIMARY}
              size={ButtonSize.MEDIUM}
              onClick={() => onSearchButtonClick(searchInput, selectedVendor)}
              buttonType={ButtonType.SUBMIT}
            />
          </div>
        </div>
      </form>
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
            onClick={() => onSearchButtonClick}
            buttonType={ButtonType.SUBMIT}
          />
        </div>
      )}
    </div>
  );
}

export default Filters;
