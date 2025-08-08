const PackCardPile = ({icon, label, info}:PackCardPileProps) => {  
  return (
    <div className="flex flex-row items-center gap-3 p-2">
        <img src={icon} alt={label} className="p-2 bg-red-200 rounded-[15px] size-[40px]" />
        <div>
            <p className="text-gray-400 text-sm">{label}</p>
            <p className="font-bold text-lg">{info}</p>
        </div>
    </div>
  )
}

export default PackCardPile
