// components/Filter.jsx
export default function Filter({ selectedCategory, setSelectedCategory }) {
    return (
      <div className="flex space-x-4 p-4">
        <button
          className={`px-4 py-2 ${selectedCategory === "men's clothing" ? "bg-red-800 text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedCategory("men's clothing")}
        >
          Clothes
        </button>
        <button
          className={`px-4 py-2 ${selectedCategory === "electronics" ? "bg-red-800 text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedCategory("electronics")}
        >
          Electronics
        </button>
        <button
          className={`px-4 py-2 ${!selectedCategory ? "bg-red-800 text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
      </div>
    );
  }
  