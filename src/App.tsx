import MainLayout from './layouts/MainLayout';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <MainLayout>
        <Header />
        <Dashboard />
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
