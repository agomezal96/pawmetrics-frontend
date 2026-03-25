import EarningsCard from './components/cards/EarningsCard';
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
        </Dashboard>
      </MainLayout>
    </>
  );
}

export default App;
