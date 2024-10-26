import { AiOutlineUser } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { formatToXAF } from "../utils";
import ImageLoader from "./ImageLoader";
import dayjs from "dayjs";
import updateLocale from 'dayjs/plugin/updateLocale'


export default function CarCard({ journey }) {
    dayjs.extend(updateLocale)

    // TODO: handle locale date en and fr
    dayjs.updateLocale('en', {
        months: [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
            "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ]
    })
    return (
        <div className="car_card mb-5 h-fit m-auto z-10 block shadow-card dark:shadow-none rounded-2xl bg-white dark:bg-dark-accent">
            <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-2xl p-2">
                <ImageLoader url={journey.photos} />
                <span>
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white/10 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </span>
            </div>
            <div className="p-3">
                <div className="border-l-4 border-gray-400 pl-4 card_destination relative ml-2">
                    <h3 className="mb-2 leading-tight">
                        {journey.depart}
                    </h3>
                    <h3 className="mb-2 leading-tight">
                        {journey.arrive}
                    </h3>
                </div>
                <p className="flex items-center gap-1"><BiCalendar />{dayjs(journey.dateDepart).format("MMMM DD, YYYY à hh:mm")}</p>
                <p className="flex items-center gap-1"><AiOutlineUser />{journey.placenumber === 1 ? "Une Place Disponible" : journey.placenumber
                    + " Places Disponibles"}</p>
                <div className="flex justify-between items-center mt-6">
                    <h5 className="font-medium leading-tight">
                        <span className="text-primary hover:underline cursor-pointer">{formatToXAF(journey.prix)}</span>
                    </h5>
                    <div className="flex justify-center">
                        <button className="btn text-primary !font-medium !capitalize">
                            Reserver
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
