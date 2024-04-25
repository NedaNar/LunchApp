import { useState, useEffect } from 'react';
import Dialog, { DialogIcon } from '../../components/Dialog/Dialog';
import FoodCardsLayout from './FoodCardsLayout';

export default function FoodMenuPage() {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const now = new Date();
    const stopOrdersDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 0, 0);

    if (now < stopOrdersDate) {
      const timeUntilStopOrders = stopOrdersDate.getTime() - now.getTime();
      const timer = setTimeout(() => {
        setShowDialog(true);
      }, timeUntilStopOrders);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, []);

  return (
    <>
      <h1>Food Menu page</h1>

      {showDialog && (
        <Dialog
          title="Please refresh page"
          icon={DialogIcon.WARNING}
          primaryButtonText="Refresh"
          onClose={() => setShowDialog(false)}
          onPrimaryButtonClick={() => window.location.reload()}
          isCloseButtonVisible={false}>
          <span>Time to order for today is over.</span>
        </Dialog>
      )}

      <FoodCardsLayout />
    </>
  );
}
