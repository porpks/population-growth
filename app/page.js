import Image from 'next/image'
import Chart from './components/Chart';

export default function Home() {
  const regionColor =
  {
    Asia: "bg-indigo-600",
    Europe: "bg-violet-400",
    Africa: "bg-amber-700",
    Oceania: "bg-orange-500",
    Americas: "bg-yellow-400",
  }



  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-4 px-44 bg-white">
      <div className='w-full h-full p-4 text-neutral-600 border border-neutral-400 rounded shadow'>
        <h1 className='text-xl font-bold'>Population growth per country, 1950 to 2021</h1>
        <p className='text'>Click on the legend below to filter by country 👇</p>

        {/* Region */}
        <div className='flex items-center gap-2 mt-4 text-sm'>
          <h1 className='font-bold'>Region</h1>
          {Object.keys(regionColor).map((key) => {
            return (
              <div key={key} className='flex items-center gap-1'>
                <div className={`w-4 h-4 rounded ${regionColor[key]}`}></div>
                <h1 className=''>{key}</h1>
              </div>
            );
          })}
        </div>
        <Chart regionColor={regionColor} />

        {/* Footer */}
        <p>Source: <span>Our World In Data</span></p>

      </div>
    </main>
  )
}
