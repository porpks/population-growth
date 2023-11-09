"use client"

import PopulationBar from './PopulationBar';
import { useState } from 'react';

const mockData = [
    {
        country: "China",
        population: 600000000,
        region: "Asia"
    },
    {
        country: "India",
        population: 400000000,
        region: "Asia"
    },
    {
        country: "USA",
        population: 160000000,
        region: "Americas"
    },
    {
        country: "Russia",
        population: 110000000,
        region: "Europe"
    },
    {
        country: "Japan",
        population: 90000000,
        region: "Asia"
    },
    {
        country: "Indonesia",
        population: 80000000,
        region: "Asia"
    },
    {
        country: "Germany",
        population: 70000000,
        region: "Europe"
    },
    {
        country: "Brazil",
        population: 60000000,
        region: "Americas"
    },
    {
        country: "UK",
        population: 50000000,
        region: "Europe"
    },
    {
        country: "Italy",
        population: 48000000,
        region: "Europe"
    },
    {
        country: "France",
        population: 43000000,
        region: "Europe"
    },
    {
        country: "Bangladesh",
        population: 42000000,
        region: "Asia"
    },
]



const Chart = ({ regionColor }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        setIsPlaying((prev) => !prev)
    }
    return (
        <>
            {/* Chart */}
            <div className='w-4/5 mx-auto p-4'>
                {mockData.map((item) => {
                    let barWith = ((item.population) / (mockData[0].population) * 100).toFixed(0)
                    return (
                        <PopulationBar key={item.country}
                            country={item.country}
                            population={item.population}
                            // width={"w-[" + barWith + "%]"}
                            colorClass={regionColor[item.region]}
                        />
                    )
                })}
            </div>

            {/* Controller */}
            <div className='flex gap-2 px-4'>
                <div className='flex justify-center items-center text-white bg-neutral-700 w-10 h-10 rounded-full cursor-pointer'
                    onClick={handlePlay}>
                    <div>{isPlaying ? "ll" : ">"}</div>
                </div>
                <div className='w-full border-b border-neutral-500'></div>
            </div>
        </>
    )
}
export default Chart