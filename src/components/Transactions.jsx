export default function Transactions(){
    return (
        <div className="flex flex-col gap-6">
            <div>
            <p className="text-xl font-medium">Transactions | This Month</p>
            </div>
            <div className="flex gap-3 text-sm">
                <span className="bg-black-200 rounded-2xl py-1.5 px-4 text-black-300">Payouts (22)</span>
                <span className="bg-blue-700  rounded-2xl py-1.5 px-4 text-white-500">Refunds (6)</span>
            </div>
        </div>
    )
}