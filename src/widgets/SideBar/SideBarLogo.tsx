export const SideBarLogo = () => {
  return (
    <div className="p-4 flex items-center space-x-2 border-b border-gray-700">
      <div className="bg-indigo-500 p-2 rounded">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 10h16M4 14h16M4 18h16"
          ></path>
        </svg>
      </div>
      <div>
        <h1 className="text-xl font-bold">PlayDX</h1>
        <p className="text-sm text-gray-400">Admin Portal</p>
      </div>
    </div>
  );
};
