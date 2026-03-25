import { Dog, Cat } from 'phosphor-react';
import EarningsCard from './components/cards/EarningsCard';
import PetNumberCard from './components/cards/PetNumberCard';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';

const mockData = {
  earnings: {
    past_earnings: 1200,
    future_earnings: 250,
  },
};

function App() {
  return (
    <>
      <MainLayout>
        <Header />
        <Dashboard>
          <EarningsCard earnings={mockData.earnings} />
          <PetNumberCard icon={<Dog size={32} />} numberOfPets={4} label='Total Dogs'/>
          <PetNumberCard icon={<Cat size={32} />} numberOfPets={6} label='Total Cats' />
        </Dashboard>
      </MainLayout>
    </>
  );
}

export default App;
