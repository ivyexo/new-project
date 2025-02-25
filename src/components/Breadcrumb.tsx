"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  return (
    <div className='flex items-center space-x-2 py-4 px-6 bg-gray-50'>
      <Link href='/' className='text-gray-600 hover:text-gray-800'>
        Home
      </Link>
      {paths.map((path, index) => (
        <div key={path} className='flex items-center'>
          <span className='mx-2 text-gray-400'>/</span>
          <Link
            href={`/${paths.slice(0, index + 1).join("/")}`}
            className='capitalize text-gray-600 hover:text-gray-800'
          >
            {path}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
