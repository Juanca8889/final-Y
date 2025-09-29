export default function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar por autor o texto..."
      className="w-full p-3 mb-6 rounded-lg bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-400"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}