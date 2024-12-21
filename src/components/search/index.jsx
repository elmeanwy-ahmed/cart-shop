
export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
      <div className="flex justify-center p-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full max-w-md p-2 border rounded shadow-md"
        />
      </div>
    );
  }
  