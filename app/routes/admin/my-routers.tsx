import { ConfigTable } from "components";

const MyRouters = () => {
  return (
    <div className="px-6">
      <header className="stats-card flex flex-row items-center justify-between">
        <div>
          <h1 className="text-xl fond-bold">Mes routers</h1>
        </div>
        <div className="flex flex-row items-center gap-3">
          <button className="flex items-center border-0 bg-red-200 rounded-full p-2 cursor-pointer">
            <img src="/assets/icons/favicon.ico" alt="icon" className="size-[20px]" />
          </button>
          <span>/</span>
          <button className="flex items-center border-0 bg-red-200 text-red-100 rounded-xl py-2 px-3 cursor-pointer text-bold text-sm">
            Mes routeurs
          </button>
        </div>
      </header>

      <div className="mt-5">
        <ConfigTable />
      </div>
    </div>
  )
}

export default MyRouters

