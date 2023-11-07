"use client"

import clsx from "clsx"
import { LucideInfo } from "lucide-react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

import ToolTip from "./ToolTip"

type InputProps = {
  label: string
  id: string
  type?: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean
  info?: string
}

const Input: React.FC<InputProps> = ({
  errors,
  id,
  label,
  register,
  disabled,
  required,
  type,
  info,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center justify-start gap-4 text-base font-medium leading-6"
      >
        <span>{label}</span>
        {info && (
          <ToolTip position="right" tooltip={info}>
            <LucideInfo />
          </ToolTip>
        )}
      </label>
      <div className="mt-2">
        <input
          type={type}
          id={id}
          disabled={disabled}
          autoComplete={id}
          {...register(id, { required })}
          className={clsx(
            `form-input block w-full rounded-md border-0 py-1.5 text-base font-semibold tracking-wider text-slate-950 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:leading-6`,
            errors[id] && "focus:ring-rose-500",
            disabled && "cursor-default opacity-50"
          )}
        />
      </div>
    </div>
  )
}

export default Input
