import { Dog, Cat } from 'phosphor-react';
import EarningsCard from './components/cards/EarningsCard';
import PetNumberCard from './components/cards/PetNumberCard';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import FutureBookingCard from './components/cards/FutureBookingsCard';
import { mockEarnings, mockFutureBooking } from './mocks/mockData';


function App() {
  return (
    <>
      <MainLayout>
        <Header />
        <Dashboard>
          <EarningsCard earnings={mockEarnings} />
          <PetNumberCard
            icon={<Dog size={32} />}
            numberOfPets={4}
            label="Total Dogs"
          />
          <PetNumberCard
            icon={<Cat size={32} />}
            numberOfPets={6}
            label="Total Cats"
          />
          <FutureBookingCard booking={mockFutureBooking} />
        </Dashboard>
      </MainLayout>
    </>
  );
}

export default App;
