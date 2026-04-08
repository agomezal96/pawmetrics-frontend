import type { ServiceType } from '../types/Types';

export const bookingServiceFormatter = (service: ServiceType): string => {
  switch (service) {
    case 'boarding':
      return 'Boarding';
    case 'sitting':
      return 'House Sitting';
    case 'drop_in':
      return 'Drop-in Visits';
    case 'daycare':
      return 'Doggy Day Care';
    case 'walking':
      return 'Dog Walking';
  }
};
