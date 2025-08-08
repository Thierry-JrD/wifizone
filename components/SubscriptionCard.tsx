const SubscriptionCard = () => {
  return (
    <div className="flex flex-col justify-between stats-card w-[650px]">
      <div>
        <h3 className="text-base font-bold mb-5">Effectuer un abonnement</h3>
        <div className="flex gap-7">
          <div className="flex flex-col gap-2">
            <label htmlFor="nbMois" className="text-gray-400 text-sm">Nombre de mois</label>
            <input type="number" className="py-2 px-3 border border-gray-200 rounded-3xl text-sm w-[330px]" id="nbMois" name="nbMois" placeholder="Exemple: 1" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-400 text-sm">Effectuer un abonnement</label>
            <button className="py-2 px-3 flex items-center justify-between gap-3 rounded-3xl bg-red-200">
              <img src="/assets/icons/favicon.ico" alt="Send"  className="size-[20px]" />
              <span className="text-sm font-bold">Effectuer l'abonnement</span>
            </button>
          </div>
        </div>
      </div>

      <div className="pop-up flex justify-between items-center bg-red-200 px-4 py-3 text-sm rounded-2xl">
        <p className="text-[0.7rem] font-bold w-[70%]">
          Vous pouvez demander un UPGRADE de votre pack afin de rajouter plus de routeurs.
          Pour ce faire, veuillez nous contacter directement sur le boutton Whatsapp à droite 
          ou via le numéro +22997895657 en présisant le nombre de routeur que vous voulez rajouter
          et l'email lié à votre compte.
        </p>
        <button className="p-2 flex items-center justify-between rounded-full bg-red-300 cursor-pointer">
          <img src="/assets/icons/favicon.ico" alt="Send" className="size-[20px]"/>
        </button>
      </div>
    </div>
  )
}

export default SubscriptionCard
