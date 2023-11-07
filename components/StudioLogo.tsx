import React from "react"
import Image from "next/image"

import { shimmer, toBase64 } from "@/lib/image"

const StudioLogo = (props: any) => {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center">
      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(50, 50))}`}
        className="rounded-md object-cover"
        height={50}
        width={50}
        src="/logo.png"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default StudioLogo
