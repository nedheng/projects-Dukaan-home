import BlueCard from "./BlueCard";
import RevenueCard from "./RevenueCard";

export default function Overview(){
    
    return (
        <div className="grid gap-6">
            <div className="flex justify-between items-center">
                <div className="text-xl font-medium">Overview</div>
                <div className="flex items-center rounded border p-2 gap-2 cursor-pointer">
                    <p>This Month</p>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.277478 0.777478C0.613814 0.441141 1.14013 0.410565 1.511 0.68575L1.61726 0.777478L6 5.15979L10.3827 0.777478C10.7191 0.441141 11.2454 0.410565 11.6163 0.68575L11.7225 0.777478C12.0589 1.11381 12.0894 1.64013 11.8142 2.011L11.7225 2.11726L6.66989 7.16989C6.33355 7.50623 5.80724 7.5368 5.43636 7.26162L5.33011 7.16989L0.277478 2.11726C-0.0924926 1.74729 -0.0924926 1.14745 0.277478 0.777478Z" fill="#4D4D4D" />
                    </svg>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <BlueCard title={"Next payout"} orderCount={21} amount={"3,212.23"}></BlueCard>
                <RevenueCard title={"Amount Pending"} orderCount={17} amount={"42,212.10"}></RevenueCard>
                <RevenueCard title={"Amount Processed"} amount={"43,72,212.23"}></RevenueCard>
            </div>
        </div>
    )
}