import { FiUsers, FiBox, FiShoppingCart, FiTrendingUp } from "react-icons/fi";

const DashboardCard = ({
  title,
  value,
  icon,
  trend,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}) => (
  <div className='bg-white p-6 rounded-lg shadow-sm'>
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-sm text-gray-500'>{title}</p>
        <h3 className='text-2xl font-bold mt-1'>{value}</h3>
        <p className='text-sm text-green-500 mt-2'>{trend}</p>
      </div>
      <div className='text-gray-400'>{icon}</div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <DashboardCard
          title='Total Customers'
          value='1,234'
          icon={<FiUsers size={24} />}
          trend='+12.5% from last month'
        />
        <DashboardCard
          title='Products in Stock'
          value='456'
          icon={<FiBox size={24} />}
          trend='+5.0% from last month'
        />
        <DashboardCard
          title='Total Orders'
          value='789'
          icon={<FiShoppingCart size={24} />}
          trend='+15.3% from last month'
        />
        <DashboardCard
          title='Revenue'
          value='$12,345'
          icon={<FiTrendingUp size={24} />}
          trend='+8.2% from last month'
        />
      </div>

      <div className='mt-8 bg-white rounded-lg shadow-sm p-6'>
        <h2 className='text-xl font-semibold mb-4'>Recent Activity</h2>
        {/* Placeholder for chart */}
        <div className='h-64 bg-gray-100 rounded flex items-center justify-center'>
          Chart placeholder
        </div>
      </div>
    </div>
  );
}
