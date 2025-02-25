import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { FiEdit2, FiTrash2, FiUserPlus } from "react-icons/fi";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    totalOrders: 15,
    totalSpent: "$2,345",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234 567 891",
    totalOrders: 8,
    totalSpent: "$1,200",
    status: "Active",
  },
  // Add more dummy customers...
];

export default function CustomersPage() {
  return (
    <div>
      <Breadcrumb />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
          <Link
            href="/customers/new"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FiUserPlus />
            Add Customer
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Orders</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Total Spent</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <Link href={`/customers/${customer.id}`} className="text-blue-500 hover:underline">
                      {customer.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{customer.email}</td>
                  <td className="px-6 py-4">{customer.phone}</td>
                  <td className="px-6 py-4">{customer.totalOrders}</td>
                  <td className="px-6 py-4">{customer.totalSpent}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FiEdit2 />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 