import { AiOutlineUser } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { formatToXAF } from "../utils";
import ImageLoader from "./ImageLoader";
import dayjs from "dayjs";
import updateLocale from 'dayjs/plugin/updateLocale'


export default function CarCard({ course }) {
    dayjs.extend(updateLocale)

    // TODO: handle locale date en and fr
    dayjs.updateLocale('en', {
        months: [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
            "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ]
    })
    // id: 1,
    //     titre: "Exploration d'un moteur en 3D",
    //     description: "Apprenez le fonctionnement d'un moteur grâce à un modèle 3D interactif.",
    //     niveau: "Intermédiaire",
    //     duree: "5 heures",
    //     image: "https://exemple.com/images/moteur.jpg",
    //     categorie: "Mécanique",
    //     urlCours: "https://exemple.com/cours/moteur-3d",
    //     model3D: "https://exemple.com/models/moteur.glb",
    //     typeInteraction: "vue éclatée, rotation 360°",
    //     formatModel: "glTF",
    return (
        <div className="car_card mb-5 h-fit m-auto z-10 block shadow-card dark:shadow-none rounded-2xl bg-white dark:bg-dark-accent">
            <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-2xl p-2">
                <ImageLoader url={course.image} />
                <span>
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white/10 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </span>
            </div>
            <div className="p-3">
                <p className="flex items-center gap-1 font-semibold mb-2">{course.titre}</p>
                <div className="border-l-4 border-gray-400 pl-4 card_destination relative ml-2">
                    <h3 className="mb-2 leading-tight font-semibold">
                        {course.categorie}
                    </h3>
                    {/* <h3 className="mb-2 leading-tight">
                        {course.niveau}
                    </h3> */}
                </div>
                <p className="flex items-center gap-1"> {course.description} </p>
                <div className="flex justify-between items-center mt-6">
                    <h5 className="font-medium leading-tight">
                        {
                            course.price ?
                            <span className="text-secondary hover:underline cursor-pointer">{formatToXAF(course.price)}</span>
                            : <span className="text-secondary hover:underline cursor-pointer">Free</span>
                        }
                    </h5>
                    <div className="flex justify-center">
                    {
                            course.price ?
                        <button className="btn text-secondary !font-medium !capitalize">
                            Buy
                        </button>
                            :  <button className="btn text-secondary !font-medium !capitalize">
                            Read
                        </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
