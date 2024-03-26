import TopBar from "./components/TopBar"
import Overview from "./components/Overviwe"
import Transactions from "./components/Transactions"
import Table from "./components/Table"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"


function App() {

  return (
    <div className="bg-white-50">
      <Sidebar></Sidebar>
      <div className="ml-5 border-b border-black-150 sm:pl-64 bg-white-500">
        <TopBar />
      </div>
      <div className="m-5 sm:pl-64 grid gap-8 ">
        <Overview></Overview>
        
        <div className="grid gap-6">
          <Transactions></Transactions>
          <Table></Table>
        </div>
        <Footer></Footer>
      </div>
      
    </div>
  )
}

export default App