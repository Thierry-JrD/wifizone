const StatsCard = ({
    headerTitle,
    total,
    icon
}:StatsCardProps) => {
  return (
    <article className="stats-card">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-red-200 rounded-[15px] w-[50px]">
                <img src={icon} alt={headerTitle} className="w-full h-auto" />
            </div>
            <h2 className="text-base font-bold">
                {headerTitle}
            </h2>
        </div>
        <h2 className="text-2xl font-semibold">
            {total} XOF
        </h2>
    </article>
  )
}

export default StatsCard
