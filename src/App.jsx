
import RevenueCard from "./components/RevenueCard"
import BlueCard from "./components/BlueCard"
import TopBar from "./components/TopBar"
import Overview from "./components/Overviwe"
import Transactions from "./components/Transactions"
import TopOfTable from "./components/TopOfTable"


function App() {

  return (
    <div>
      
      <div className="ml-5 border-b border-black-150 sm:pl-64 bg-white-500">
        <TopBar />
      </div>
      <div className="m-5 sm:pl-64 ">
      <Overview></Overview>
      </div>
      <div className="m-5 sm:pl-64">
      <Transactions></Transactions>
      </div>
      <div className="m-5 sm:pl-64">
        <TopOfTable></TopOfTable>
      </div>

    </div>
  )
}

export default App