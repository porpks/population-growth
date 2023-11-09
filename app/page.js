import Image from 'next/image'

export default function Home() {
  const regions = [
    {
      continent: "Asia",
      bgColor: "bg-indigo-600"
    },
    {
      continent: "Europe",
      bgColor: "bg-violet-400"
    },
    {
      continent: "Africa",
      bgColor: "bg-amber-700"
    },
    {
      continent: "Oceania",
      bgColor: "bg-orange-500"
    },
    {
      continent: "Americas",
      bgColor: "bg-yellow-400"
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className='w-full h-full p-4 text-neutral-600 border border-neutral-400 rounded shadow'>
        <h1 className='text-xl font-bold'>Population growth per country, 1950 to 2021</h1>
        <p className='text'>Click on the legend below to filter by country 👇</p>
        <div className='flex items-center gap-2 mt-4 text-sm'>
          <h1 className='font-bold'>Region</h1>
          {regions.map((item) => {
            return (
              <div key={item.continent} className='flex items-center gap-1'>
                <div className={`w-4 h-4 rounded ${item.bgColor}`}></div>
                <h1 className=''>{item.continent}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  )
}
