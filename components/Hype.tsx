import {
  LucideBadgeCheck,
  LucideHeartHandshake,
  LucideThumbsUp,
  LucideTruck,
} from "lucide-react"

const hypes = [
  {
    icon: <LucideThumbsUp />,
    title: "Best Quality",
    desc: "Many years on the market",
  },
  {
    icon: <LucideTruck />,
    title: "Free Shipping",
    desc: "Fast and reliable delivery",
  },
  {
    icon: <LucideBadgeCheck />,
    title: "1 Year Warranty",
    desc: "Protect your Products",
  },
  {
    icon: <LucideHeartHandshake />,
    title: "Support",
    desc: "If you have any questions",
  },
]

const Hype = () => {
  return (
    <div className="mt-20 flex w-full flex-wrap items-center justify-between gap-6">
      {hypes.map((hype) => (
        <div
          key={hype.title}
          className="flex items-center justify-center gap-2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 ">
            {hype.icon}
          </div>
          <div className="flex flex-col items-start justify-center gap-2 text-left">
            <p className="text-base font-bold uppercase tracking-wide md:text-lg">
              {hype.title}
            </p>
            <p className="text-sm font-medium capitalize tracking-wide md:text-base">
              {hype.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Hype
