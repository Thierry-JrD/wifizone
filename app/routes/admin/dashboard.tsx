import { Header, StatsCard, PackCard, SubscriptionCard } from "../../../components";

const Dashboard = () => {

  const user = { name: "Thierry Dohouin" };
  const dashboardStats = {
    solde: 1500,
    recette: { today: 1000, thisMonth: 500 },
    ticket: 100
  };
  const pack = {
    type: "PACK PERSO TG", 
    maxRouter: 1, 
    price: 5500, 
    expireDate: "08-30-2025",
    expireTime: "18:00:00", 
    status: "active"
  }

  const { solde, recette, ticket } = dashboardStats;
  const { type, maxRouter, price, expireDate, expireTime, status } = pack;

  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Welcome ${user?.name ?? 'Guest'} to your dashboard 🧩`}
        description="Here you can find your dashboard and essentials about your account."
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard 
            headerTitle="Mon Solde"
            total={solde}
            icon="/assets/icons/favicon.ico"
          />
          <StatsCard 
            headerTitle="Recettes de ce mois"
            total={recette.thisMonth}
            icon="/assets/icons/favicon.ico"
          />
          <StatsCard 
            headerTitle="Recettes d'aujourd'hui"
            total={recette.today}
            icon="/assets/icons/favicon.ico"
          />
          <StatsCard 
            headerTitle="Tickets vendus aujourd'hui"
            total={ticket}
            icon="/assets/icons/favicon.ico"
          />
        </div>
      </section>

      <section className="flex flex-row gap-7 justify-between">
        <PackCard 
          type={type}
          maxRouter={maxRouter}
          price={price} 
          expireDate={expireDate} 
          expireTime={expireTime} 
          status={status} 
        />

        <SubscriptionCard />
      </section>

    </main>
  )
}

export default Dashboard
