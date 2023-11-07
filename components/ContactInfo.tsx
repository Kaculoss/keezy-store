"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import emailjs from "@emailjs/browser"
import clsx from "clsx"
import { Loader2, LucideMails, LucideMapPin, LucidePhone } from "lucide-react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import { shimmer, toBase64 } from "@/lib/image"

import contactImage from "../public/contact_us.webp"
import Input from "./Input"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"

const contactItems = [
  {
    id: "tel",
    icon: <LucidePhone />,
    item: "(+233)54 985 3041",
    title: "Call us on",
  },
  {
    id: "email",
    icon: <LucideMails />,
    item: "sanialhassan853@gmail.com",
    title: "Email us On",
  },
  {
    id: "locate",
    icon: <LucideMapPin />,
    item: "Zongo, Koforidua, Ghana",
    title: "Visit us at",
  },
]

const ContactInfo = () => {
  const { toast } = useToast()
  const form = useRef<HTMLFormElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      from_name: "",
      from_email: "",
      from_number: "",
      message: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (form.current) {
      setIsLoading(true)
      emailjs
        .sendForm(
          "service_1pzlv74",
          "template_wwtmhya",
          form.current,
          "ZhrZtbYQUVC8uvEa6"
        )
        .then(() =>
          toast({ title: "Success", description: "Email Sent Successfully" })
        )
        .catch(() =>
          toast({
            title: "Failed",
            description: "Email Failed To Send",
            variant: "destructive",
          })
        )
        .finally(() => setIsLoading(false))
    }
  }

  return (
    <div className="mb-20">
      <div className="mb-16 flex items-center justify-between gap-8">
        <div>
          <p className="mb-2 text-base font-semibold leading-6 text-sky-500 dark:text-sky-400">
            Get In Touch With Us
          </p>
          <h1 className="inline-block text-2xl font-extrabold tracking-wider sm:text-3xl">
            Contact Us
          </h1>
        </div>

        <Image
          priority
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(600, 300)
          )}`}
          alt="contact us"
          src={contactImage}
          height={300}
          width={600}
          className="hidden md:block md:h-[200px] md:w-[400px] lg:h-[300px] lg:w-[600px] "
        />
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-6 divide-x-0 divide-y-2 px-6 py-4 md:flex-row md:divide-x-2 md:divide-y-0">
        <div className="flex w-full flex-1  flex-col items-start justify-start gap-6 ">
          {contactItems.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 ">
                {contact.icon}
              </div>
              <div className="flex flex-col items-start justify-center gap-2 text-left">
                <p className="text-base font-bold uppercase tracking-wide md:text-lg">
                  {contact.title}
                </p>
                <p className="text-sm font-medium capitalize tracking-wide md:text-base">
                  {contact.item}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex-1 px-2 py-4 md:px-4 md:py-0">
          <form
            ref={form}
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              id="from_name"
              label="Your Name"
              type="text"
              register={register}
              errors={errors}
              required
              disabled={isLoading}
            />
            <Input
              id="from_number"
              label="Your Number"
              type="tel"
              register={register}
              errors={errors}
              required
              disabled={isLoading}
            />
            <Input
              id="from_email"
              label="Your Email"
              type="email"
              register={register}
              errors={errors}
              required
              disabled={isLoading}
            />
            <div>
              <label
                className="block text-base font-medium leading-6"
                htmlFor="message"
              >
                Your message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  autoComplete="message"
                  rows={6}
                  disabled={isLoading}
                  {...register("message", { required: true })}
                  className={clsx(
                    `form-input block w-full rounded-md border-0 py-1.5 text-base font-semibold tracking-wider text-slate-950 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:leading-6`,
                    errors["message"] && "focus:ring-rose-500"
                  )}
                />
              </div>
            </div>
            <div>
              <Button type="submit" className="text-base font-semibold">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Sending..." : "Send Email"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
