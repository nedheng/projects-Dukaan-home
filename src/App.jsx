
import RevenueCard from "./components/RevenueCard"
import BlueCard from "./components/BlueCard"
import TopBar from "./components/TopBar"
import Overview from "./components/Overviwe"
import Transactions from "./components/Transactions"
import TopOfTable from "./components/TopOfTable"
import Table from "./components/Table"


function App() {

  return (
    <div>
      
      <div className="ml-5 border-b border-black-150 sm:pl-64 bg-white-500">
        <TopBar />
      </div>
      <div className="m-5 sm:pl-64 grid gap-8 ">
        <Overview></Overview>
        
        <div className="grid gap-6">
          <Transactions></Transactions>
          <Table></Table>
        </div>
      </div>

    </div>
  )
}

export default App