import React from "react"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"

type Props = {
  increase: () => void
  decrease: () => void
  quantity: number
  canIncrease: boolean
  canDecrease: boolean
}

const QuantityToggle = ({
  increase,
  decrease,
  quantity,
  canDecrease,
  canIncrease,
}: Props) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        className="flex cursor-pointer items-center justify-center bg-transparent "
        type="button"
        onClick={decrease}
      >
        <AiOutlineMinusCircle
          size={24}
          className={`transition ${
            canDecrease
              ? "text-red-600 hover:text-red-500"
              : "text-slate-400/75"
          }`}
        />
      </button>
      <h2 className="font-bold text-slate-400">{quantity}</h2>
      <button
        className="flex cursor-pointer items-center justify-center bg-transparent "
        type="button"
        onClick={increase}
      >
        <AiOutlinePlusCircle
          size={24}
          className={`transition ${
            canIncrease
              ? "text-green-600 hover:text-green-500"
              : "text-slate-400/75"
          }`}
        />
      </button>
    </div>
  )
}

export default QuantityToggle
