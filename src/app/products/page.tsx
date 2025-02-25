import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Product A",
    category: "Electronics",
    price: "$299.99",
    inventory: 45,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Product B",
    category: "Clothing",
    price: "$59.99",
    inventory: 12,
    status: "Low Stock",
  },
  // Add more dummy products...
];

export default function ProductsPage() {
  return (
    <div>
      <Breadcrumb />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <Link
            href="/products/new"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FiPlus />
            Add Product
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Inventory</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline">
                      {product.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.inventory}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        product.inventory > 20
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {product.status}
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