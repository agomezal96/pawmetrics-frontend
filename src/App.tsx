import MainLayout from './layouts/MainLayout';
import Dashboard from './components/macroorganisms/Dashboard';
import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';

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
