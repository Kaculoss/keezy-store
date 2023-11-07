const Map = () => {
  return (
    <div
      className="min-h-[400px]"
      style={{
        background: "url('/Home map2.png') no-repeat center 20% / cover",
      }}
    >
      <div className="relative mx-auto flex min-h-[400px] items-center justify-center">
        <a
          href="https://www.google.com/maps/place/6%C2%B006'26.2%22N+0%C2%B015'08.5%22W/@6.1049181,-0.2530573,16.25z/data=!4m6!3m5!1s0xfdf41a62be536bb:0xedee0697264e8164!7e2!8m2!3d6.1072905!4d-0.252361"
          target="_blank"
          rel="noopener noreferrer"
          className=" w-full max-w-sm cursor-pointer rounded-xl bg-slate-300 p-3 sm:p-6"
        >
          <h3 className="mb-2 text-lg font-semibold text-slate-900 sm:text-3xl">
            Zongo, Koforidua, Ghana
          </h3>
          <p className="mt-5 inline-block text-center text-base font-medium text-slate-900 underline sm:text-lg">
            Open in Google Map
          </p>
        </a>
      </div>
    </div>
  )
}

export default Map
