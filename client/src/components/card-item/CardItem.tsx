import { Link } from "react-router-dom";
import WatchImg from "../../assets/images/watch.jpeg";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

const CardItem = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
      <img className="rounded-t-lg h-48 mx-auto" src={WatchImg} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex">
          <Link
            to="/details/1"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <div>
            <button className="px-3 py-2 ml-3 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <FaRegEdit className="text-xl" />
            </button>
            <button className="px-3 py-2 ml-3 text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
              <FaTrashAlt className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
