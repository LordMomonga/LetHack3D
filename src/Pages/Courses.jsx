import CarCard from "../components/CarCard";
import CategoryCourse from "../components/CategoryCourse";
import FilterCourses from "../components/FilterCourses";
import { useQuery } from "@tanstack/react-query";
import axiosURL from "../axiosConfig";
import { useState } from "react";

const fetchJourneys = async () => {
  const { data } = await axiosURL.get(`/trips/all`);
  return data;
};

export default function Courses() {
  const { isFetching, isError, error, data, refetch } = useQuery({
    queryKey: ['journeys'],
    queryFn: fetchJourneys,
  });

  const [journeys, setJourneys] = useState(
    [
      {
        id: 1,
        titre: "Exploration d'un moteur en 3D",
        description: "Apprenez le fonctionnement d'un moteur grâce à un modèle 3D interactif.",
        niveau: "Intermédiaire",
        duree: "5 heures",
        image: "https://exemple.com/images/moteur.jpg",
        categorie: "Mécanique",
        urlCours: "https://exemple.com/cours/moteur-3d",
        model3D: "https://exemple.com/models/moteur.glb",
        typeInteraction: "vue éclatée, rotation 360°",
        formatModel: "glTF",
        price: 230000,
      },
      {
        id: 2,
        titre: "Anatomie humaine en 3D",
        description: "Explorez l'anatomie humaine en 3D pour comprendre les systèmes du corps.",
        niveau: "Débutant",
        duree: "6 heures",
        image: "https://exemple.com/images/anatomie.jpg",
        categorie: "Biologie",
        urlCours: "https://exemple.com/cours/anatomie-3d",
        model3D: "https://exemple.com/models/anatomie.glb",
        typeInteraction: "zoom, rotation 360°",
        formatModel: "glTF",
      },
      {
        id: 3,
        titre: "Architecture de bâtiments en 3D",
        description: "Découvrez des modèles 3D de bâtiments et explorez leur architecture interne.",
        niveau: "Avancé",
        duree: "7 heures",
        image: "https://exemple.com/images/architecture.jpg",
        categorie: "Architecture",
        urlCours: "https://exemple.com/cours/architecture-3d",
        model3D: "https://exemple.com/models/batiment.glb",
        typeInteraction: "visite virtuelle, vue éclatée",
        formatModel: "glTF",
        price: 230000,
      },
      {
        id: 4,
        titre: "Système solaire en 3D",
        description: "Interagissez avec un modèle 3D du système solaire pour explorer les planètes.",
        niveau: "Débutant",
        duree: "3 heures",
        image: "https://exemple.com/images/systeme-solaire.jpg",
        categorie: "Astronomie",
        urlCours: "https://exemple.com/cours/systeme-solaire-3d",
        model3D: "https://exemple.com/models/systeme-solaire.glb",
        typeInteraction: "rotation, zoom",
        formatModel: "glTF",
        price: 230000,
      }
    ]
)


  return (
    <div className="flex flex-col pt-20 px-6 max-w-7xl">
      <h2 className="text-2xl font-bold underline_custom relative">Courses</h2>

      <CategoryCourse />
      <FilterCourses />

      {/* Gestion de l'état de chargement, d'erreur et d'affichage des trajets */}
      {isFetching ? (
        <div className="journey_cards_cols">
          {[0, 1, 2, 3].map((_, key) => (
            <div key={key} className="car_card p-2 mb-10 h-fit m-auto z-10 block shadow-card dark:shadow-none rounded-2xl">
              {/* Skeleton loader pour simuler le chargement des trajets */}
              <div className="w-full rounded-md my-2 p-1 h-44 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
              <div className="w-2/3 rounded-md my-2 p-1 h-3 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
              <div className="w-full rounded-md my-2 p-1 h-3 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
              <div className="w-1/2 rounded-md my-2 p-1 h-10 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : isError ? (
        <div className="w-full h-full text-center">
          <p className="text-red-500 inline">An error occurred while loading the courses.</p>
          <button onClick={() => refetch()} className="text-blue-500 hover:text-blue-700 underline inline">
            Retry
          </button>
        </div>
      ) : journeys?.length ? (
        <div className="journey_cards_cols">
          {journeys?.map((journey, key) => (
            <CarCard course={journey} key={key} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full text-center">
          <p className="inline">No courses available at the moment.</p>
          <button onClick={() => refetch()} className="text-blue-500 hover:text-blue-700 underline inline">
            Actualisé
          </button>
        </div>
      )}
    </div>
  );
}
