import Link from 'next/link';
import { FiHome, FiUsers, FiBox, FiShoppingCart, FiPieChart } from 'react-icons/fi';

const Sidebar = () => {
  const menuItems = [
    { icon: <FiHome size={20} />, label: 'Dashboard', href: '/' },
    { icon: <FiUsers size={20} />, label: 'Customers', href: '/customers' },
    { icon: <FiBox size={20} />, label: 'Products', href: '/products' },
    { icon: <FiShoppingCart size={20} />, label: 'Orders', href: '/orders' },
    { icon: <FiPieChart size={20} />, label: 'Analytics', href: '/analytics' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">ProductManager</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 