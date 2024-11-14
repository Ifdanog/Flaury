import BQuickLink from "./BQuickLink";
import BRecentTransactions from "./BRecentTransactions";
import DashboardLayout from "./DashboardLayout";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Overview = () => {
  return (
    <DashboardLayout>
      <div className="mt-0 lg:mt-20 w-full md:px-8 lg:px-0 px-4">
        <BQuickLink />
        <div className="grid grid-cols-3 gap-4 my-6">
          <div className="col-span-2">
            <LineChart />
          </div>
          <div className="-ml-8">
            <PieChart />
          </div>
        </div>
        <BRecentTransactions />
      </div>
    </DashboardLayout>
  );
};

export default Overview;
