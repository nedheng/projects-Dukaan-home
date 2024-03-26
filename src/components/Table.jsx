import {orderData} from './data'
import TopOfTable from "./TopOfTable";



export default function Table(){
    return(
        <div>
            <div>
                <TopOfTable></TopOfTable>
            </div>
            <div>
            <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-start px-4 py-2  text-gray-700 font-medium">ORDER ID</th>
            <th className="text-start px-4 py-2  text-gray-700 font-medium">STATUS</th>
            <th className="text-start px-4 py-2  text-gray-700 font-medium">TRANSACTION ID</th>
            <th className="text-start px-4 py-2  text-gray-700 font-medium">REFUND DATE</th>
            <th className="text-start px-4 py-2  text-gray-700 font-medium">ORDER AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="text-blue-700 px-4 py-2 font-normal text-sm">#{row.id}</td>
                <td className=" flex items-center gap-2 px-4 py-2 text-black-600 font-normal text-sm">
                  { (row.status === "Successful") && <div className='h-2.5 w-2.5 rounded-full bg-green-500'/>}
                  { (row.status === "Processing") && <div className='h-2.5 w-2.5 rounded-full bg-black-500'/>}
                  { (row.status === "Failed") && <div className='h-2.5 w-2.5 rounded-full bg-red-500'/>}
                  {row.status}
                </td>
                <td className=" px-4 py-2 black-400 font-normal text-sm">{row.transactionID}</td>
                <td className=" px-4 py-2 black-400 font-normal text-sm">{row.refundDate}</td>
                <td className=" px-4 py-2 black-400 font-normal text-sm">{row.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
            </div>
        </div>
    )
}

