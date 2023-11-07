import React from "react"
import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#F7AB0A]">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6 text-[#F7AB0A]" />
          Go To Website
        </Link>
        <div className="hidden justify-center rounded-lg border-2 border-[#F7Ab0A] p-5 md:flex">
          <h1 className="font-bold text-white">
            Contact Kaculoss at
            <Link
              href="mailto:sani@kaculoss.tech"
              className="ml-2 font-bold text-[#F7AB0A]"
            >
              sani@kaculoss.tech
            </Link>{" "}
            for more Beautiful🥀 Web and Mobile Applications like this.
          </h1>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
