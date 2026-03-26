import MainLayout from './layouts/MainLayout';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <MainLayout>
        <Header />
        <Dashboard />
      </MainLayout>
    </>
  );
}

export default App;
