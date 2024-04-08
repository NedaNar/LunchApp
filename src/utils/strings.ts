import { getCurrentWorkingWeek } from './dateUtils';

export const menuStrings: Record<string, string> = {
  firstPageTitle: 'Lunch Menu',
  firstPageSubtitle: `Lunch menu for the week of ${getCurrentWorkingWeek()}`,
  secondPageTitle: 'Available Lunch',
  secondPageSubtitle: 'Friday dishes that are up for grabs, from your colleagues.',
  thirdPageTitle: 'Your Orders',
  thirdPageSubtitle: `Week of ${getCurrentWorkingWeek()}`,
  fourthPageTitle: 'Ratings',
  fourthPageSubtitle: `Week of ${getCurrentWorkingWeek()}`,
};
