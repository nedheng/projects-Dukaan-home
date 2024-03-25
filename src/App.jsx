
import RevenueCard from "./components/RevenueCard"
import BlueCard from "./components/BlueCard"


function App() {

  return (
    <div>
      <div>hi</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                <BlueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
                <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
                <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
                
            </div>

    </div>
  )
}

export default App