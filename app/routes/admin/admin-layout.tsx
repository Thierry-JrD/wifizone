import { Outlet } from "react-router";
import SidebarComponent from "../../../components/SidebarComponent";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/*MobileSidebar*/}
      <aside className="max-w-[270px] hidden lg:block">
        <SidebarComponent />
      </aside>
      <aside className="flex-1 bg-gray-50 rounded-tl-xl rounded-bl-xl py-4">
        <Outlet />
      </aside>
    </div>
  )
}

export default AdminLayout
