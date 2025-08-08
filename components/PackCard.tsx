import PackCardPile from "./PackCardPile"

const PackCard = ({ type, maxRouter, price, expireDate, expireTime, status }:PackCardProps) => {


  return (
    <div className="flex flex-row items-center justify-between gap-2 stats-card w-fill">
      <div>
        <h3 className="text-base font-bold mb-5">Votre Pack</h3>
        <section>
          <PackCardPile icon="/assets/icons/favicon.ico" label="Nom du pack" info={type} />
          <PackCardPile icon="/assets/icons/favicon.ico" label="Max routeurs" info={maxRouter} />
          <PackCardPile icon="/assets/icons/favicon.ico" label="Prix mensuel" info={`${price} XOF`} />
          <PackCardPile icon="/assets/icons/favicon.ico" label="Votre abonnement expire le" info={`${expireDate} à ${expireTime}`} />
        </section>
      </div>

      <div className="p-5 flex flex-col items-center">
        <h3 >Votre abonnement est </h3> <h1 className="text-3xl font-bold">{status ? "Actif" : "Inactif"}</h1>
      </div>
    </div>
  )
}

export default PackCard
