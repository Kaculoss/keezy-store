"use client"

import React, { useCallback, useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"

import CarouselIndicator from "./CarouselIndicator"
import CarouselItem from "./CarouselItem"

export interface CarouselProps {
  items: React.ReactNode[]
  auto?: boolean
}

export default function Carousel({
  items,
  auto = false,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isDecreasing, setIsDecreasing] = useState<boolean>(false)

  const timeout = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const handleNextItemBtn = useCallback(() => {
    setActiveIndex((prev) => {
      return prev + 1 < items.length ? prev + 1 : prev
    })
  }, [items])

  function handlePrevItemBtn() {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev
    })
  }

  const handleAutoSlide = async () => {
    if (auto) {
      await timeout(10000)

      if (isDecreasing) {
        handlePrevItemBtn()
      }
      if (!isDecreasing) {
        handleNextItemBtn()
      }
    }
  }

  useEffect(() => {
    let isCanceled = false
    if (!isCanceled) {
      handleAutoSlide()
    }
    return () => {
      isCanceled = true
    }
  })

  useEffect(() => {
    if (activeIndex === 0) {
      setIsDecreasing(false)
    }
    if (activeIndex === items.length - 1) {
      setIsDecreasing(true)
    }
  }, [activeIndex, items])

  return (
    <div className="carousel-container">
      {!auto && activeIndex > 0 && (
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePrevItemBtn}
        >
          <IoIosArrowBack />
        </button>
      )}
      {items?.map((item, index) => (
        <CarouselItem key={index} index={index} activeIndex={activeIndex}>
          {item}
        </CarouselItem>
      ))}
      {!auto && activeIndex < items.length - 1 && (
        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemBtn}
        >
          <IoIosArrowBack
            style={{
              transform: "rotate(180deg)",
            }}
          />
        </button>
      )}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex)
        }}
      />
    </div>
  )
}
