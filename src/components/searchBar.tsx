
import SearchModelBar from "@/components/SearchModelBar"
import CarCard from "./CarCard"

export default function SearchBar() {
    return (
        <div className={"px-12 flex flex-col gap-12"}>
            <div className={"flex flex-col gap-4"}>
                <h1 className={"text-3xl"}>
                     Car Catalogue
                </h1>
                <p className={"text-gray-400 text-xl"}>
                    Explore the car you might like
                </p>
            </div>
            <label>
                <SearchModelBar />
            </label>
            <div>
                <CarCard/>
            </div>
        </div>
    )
}