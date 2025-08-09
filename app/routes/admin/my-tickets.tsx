import { FileUpload, ConfigTable } from "components";

const MyTickets = () => {
  return (
    <div className="flex flex-col gap-5 px-6 w-full h-screen overflow-y-scroll">
      <header className="stats-card flex flex-row items-center justify-between">
        <div>
          <h1 className="text-xl fond-bold">Importer des tickets</h1>
        </div>
        <div className="flex flex-row items-center gap-3">
          <button className="flex items-center border-0 bg-red-200 rounded-full p-2 cursor-pointer">
            <img src="/assets/icons/favicon.ico" alt="icon" className="size-[20px]" />
          </button>
          <span>/</span>
          <button className="flex items-center border-0 bg-red-200 text-red-100 rounded-xl py-2 px-3 cursor-pointer text-bold text-sm">
            Importer des tickets
          </button>
        </div>
      </header>

      <div className="mt-6 stats-card">
        <section className="flex flex-row justify-between gap-4">

            <div className="flex flex-col gap-2">
                <label htmlFor="tarif" className="text-gray-400 text-sm">Selectionnez un tarif</label>
                <div className="relative">
                    <select name="tarif" id="tarif" className="appearance-none py-2 px-3 border border-gray-200 rounded-3xl text-sm w-[250px]">
                        <option value="1" selected>24H - 100F - GRATOS</option>
                        <option value="2">24H - 250F - GRATOS</option>
                        <option value="3">48H - 500F - GRATOS</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-gray-400 text-sm">Selectionnez le type de ticket</label>
                <div className="relative">
                    <select name="type" id="type" className="appearance-none py-2 px-3 border border-gray-200 rounded-3xl text-sm w-[250px]">
                        <option value="1" selected>PACKPERSO TG</option>
                        <option value="2" selected>PACKTEAM TA</option>
                        <option value="3" selected>PACKTEAM TB</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-gray-400 text-sm">Ticket générer avec : </label>
                <div className="relative">
                    <select name="type" id="type" className="appearance-none py-2 px-3 border border-gray-200 rounded-3xl text-sm w-[250px]">
                        <option value="1" selected>MIKHMON</option>
                        <option value="2" selected>MKController</option>
                        <option value="3" selected>Smart Radius Server</option>
                        <option value="4" selected>BuanaNETPBun Tools</option>
                        <option value="5" selected>Laksa19</option>
                        <option value="6" selected>Bilhanet</option>
                        <option value="7" selected>Citraweb</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-gray-400 text-sm">Selectionnez le fichier</label>
                <FileUpload />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-gray-400 text-sm">Importer</label>
                <button className="py-2 px-3 flex items-center justify-between gap-3 rounded-3xl bg-red-200">
                    <img src="/assets/icons/favicon.ico" alt="Send"  className="size-[20px]" />
                    <span className="text-sm font-bold">Importer Tickets</span>
                </button>
            </div>
        </section>
      </div>
      <ConfigTable />
    </div>
  )
}

export default MyTickets
