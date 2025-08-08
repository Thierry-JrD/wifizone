import NavItems from "./NavItems";

const SidebarComponent = () => {
  return (
    <div className="h-screen w-64 bg-white text-gray-800 flex flex-col p-4 space-y-6">
      <NavItems />
    </div>
  );
};

export default SidebarComponent;
