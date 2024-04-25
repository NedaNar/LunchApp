export function getCurrentWorkingWeek(today?: Date): string {
  if (!today) {
    today = new Date();
  }
  const mondayDate: Date = new Date(
    today.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1))
  );
  const fridayDate: Date = new Date(today.setDate(mondayDate.getDate() + 4));

  const mondayMonth: string = mondayDate.toLocaleString('en-us', { month: 'short' });
  const mondayDay: number = mondayDate.getDate();

  const fridayMonth: string = fridayDate.toLocaleString('en-us', { month: 'short' });
  const fridayDay: number = fridayDate.getDate();

  return mondayMonth === fridayMonth
    ? `${mondayMonth} ${mondayDay} - ${fridayDay}`
    : `${mondayMonth} ${mondayDay} - ${fridayMonth} ${fridayDay}`;
}

export function getCurrentDay(): string {
  return new Date().toLocaleDateString('en-US', { weekday: 'long' });
}
