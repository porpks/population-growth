
const PopulationBar = ({
    country,
    population,
    width,
    colorClass
}) => {
    return (
        <div className={`relative flex justify-end items-center mt-1 h-8 ${colorClass} ${width}`}>
            <h1>{width}</h1>
            <div className='absolute -left-[100px] text-end w-24'>
                <h1>{country}</h1>
            </div>
            <div className='absolute -right-[100px] w-24'>
                <h1>{population}</h1>
            </div>
        </div>
    )
}
export default PopulationBar