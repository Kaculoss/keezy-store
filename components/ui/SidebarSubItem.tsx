
import Link from "next/link"

interface IProps {
  itemName: string
  itemUrl: string
  selected: boolean
  clickHandler?: () => void
}

const SidebarSubItem = ({
  itemName,
  itemUrl,
  selected,
  clickHandler,
}: IProps) => {
  return (
    <li>
      <Link
        href={itemUrl}
        className={
          selected
            ? "-ml-px block border-l border-current pl-4 font-semibold text-sky-500 dark:text-sky-400"
            : "-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
        }
        onClick={clickHandler}
      >
        {itemName}
      </Link>
    </li>
  )
}

export default SidebarSubItem
