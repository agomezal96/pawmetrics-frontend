export const formatDateEnglish = (dateString: string): string => {
  const date = new Date(dateString);
  // We use the native API intl:
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

export const formatRelativeDate = (dateString: string): string => {
  const date = new Date(dateString);
  const today = new Date();

  // We create the object for "tomorrow"
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // We compare year, month and day (resetting hours for more accuracy)
  const isTomorrow =
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear();

  if (isTomorrow) {
    return 'Tomorrow';
  }

  // If it is not tomorrow, we use the first function
  return formatDateEnglish(dateString);
};

/**
 * Calculates how much time is remaining to end a booking
 * If it less than 24h, it returns "In X hours/minutes".
 * If it has ended, returns "Finished".
 */
export const getTimeRemaining = (endDateString: string): string => {
  const end = new Date(endDateString);
  const now = new Date();

  // Difference in milliseconds
  const diffInMs = end.getTime() - now.getTime();

  // If the date has passed
  if (diffInMs <= 0) return 'Finished';

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

  // Configuration of the formatter in english
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'always' });

  // If it less than an hour we show a minute
  if (diffInMinutes < 60) {
    return rtf.format(diffInMinutes, 'minute'); // "in 20 minutes"
  }

  // If it is less than 24h we show hours
  if (diffInHours < 24) {
    return rtf.format(diffInHours, 'hour'); // "in 3 hours"
  }

  // If more than one day is remaining, show the date
  return formatDateEnglish(endDateString);
};
