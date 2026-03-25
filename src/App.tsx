import EarningsCard from "./components/cards/EarningsCard"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"

const mockData = {
  earnings: {
    past_earnings: 1200,
    future_earnings:250,
  }
}

function App() {

  return (
    <>
      <Header />
      <Dashboard>
        <EarningsCard earnings={mockData.earnings}/>
      </Dashboard>
    </>
  )
}

export default App
