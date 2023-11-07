import {
  LoaderIcon,
  PackageCheckIcon,
  PackageSearchIcon,
  TruckIcon,
  XCircleIcon,
} from "lucide-react"

export const statuses = [
  {
    title: "Awaiting Payment",
    value: "awaiting",
    icon: LoaderIcon,
  },
  {
    title: "Processing",
    value: "processing",
    icon: PackageSearchIcon,
  },
  {
    title: "In Transit",
    value: "in_transit",
    icon: TruckIcon,
  },
  {
    title: "Delivered",
    value: "delivered",
    icon: PackageCheckIcon,
  },
  {
    title: "Canceled",
    value: "canceled",
    icon: XCircleIcon,
  },
]
