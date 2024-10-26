import { RiCustomerService2Fill } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import { BiCog, BiHistory } from "react-icons/bi";
import ImageLoader from "../components/ImageLoader";
import { useDispatch, useSelector } from "react-redux";
import axiosURL from "../axiosConfig";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { disconnect } from "../feature/session.slice";
import BecomeDriver from "../components/BecomeDriver";

const fetchUserById = async (id) => {
  const { data } = await axiosURL.get(`/utilisateurs/${id}`);
  return data;
};

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const session = useSelector((state) => state.session)

  const { isLoading, isError, error, data: user, refetch } = useQuery({
    queryKey: ['utilisateurs', session.user.id], // QueryKey avec 'user' et userId
    queryFn: () => fetchUserById(session.user.id), // Fonction de requête
    enabled: !!session.user.id,  // Active la requête uniquement si l'ID de l'utilisateur est disponible
    staleTime: 5 * 60 * 1000,  // 5 minutes avant que les données deviennent "stale"
  });

  console.log(error);

  const handleLogout = () => {
    dispatch(disconnect())
    navigate("/login")
  };

  return (
    <div className="flex flex-col pt-20 px-6 max-w-7xl">
      <h2 className="text-2xl font-bold mb-4 underline_custom relative md:mb-8">Profil</h2>

      <div className="flex gap-2 flex-row justify-start items-start w-full">
        <div className="!h-20 !w-20 !min-h-20 !min-w-20 rounded-full md:mb-2">
          <ImageLoader url={"images/profile/default-profile.jpg"} className="rounded-full" />
        </div>
        {isLoading ?
          <div className='w-full'>
            <div className="w-full rounded-md my-2 p-1 h-3 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
            <div className="w-full rounded-md my-2 p-1 h-3 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
            <div className="w-full rounded-md my-2 p-1 h-3 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
          </div> : isError ?
            <div className='w-full h-full text-center'>
              <p className="text-red-500 inline">une erreur s'est produite veuillez reessayer </p>
              <button onClick={() => refetch()} className="text-blue-500 hover:text-blue-700 underline inline">reessayer</button>
            </div>
            : user ?
              <div className=''>
                <p className="text-xl capitalize m-0">{user.nom + " " + user.prenom}</p>
                <p className="text-gray-400 m-0">{user.email}</p>
                <p className="text-gray-400 m-0">{user.telephone}</p>
              </div> :
              <div className='w-full h-full text-center'>
                <p className="inline">pas trouvé </p>
                <button onClick={() => refetch()} className="text-blue-500 hover:text-blue-700 underline inline">reessayer</button>
              </div>

        }
      </div>

      <div className="grid grid-cols-2 gap-2 mt-7">
        <button type="button" className="flex gap-2 items-center text-sm utline-none py-4 px-4 h-full rounded-xl bg-white text-writing dark:text-white dark:bg-dark-accent focus:ring-2 focus:ring-gray-300 dark:focus:ring-primary">
          <BiHistory size={20} /> Historique
        </button>
        <button type="button" className="flex gap-2 items-center text-sm utline-none py-4 px-4 h-full rounded-xl bg-white text-writing dark:text-white dark:bg-dark-accent focus:ring-2 focus:ring-gray-300 dark:focus:ring-primary">
          <BiCog size={20} /> Paramètres
        </button>
        <button onClick={handleLogout} type="button" className="ring-2 ring-red-500/50 flex gap-2 items-center text-sm utline-none py-4 px-4 h-full rounded-xl bg-white text-writing dark:text-white dark:bg-dark-accent focus:ring-2 focus:ring-gray-300 dark:focus:ring-primary">
          <CgLogOut size={20} /> déconnexion
        </button>
        <button type="button" className="flex gap-2 items-center text-sm utline-none py-4 px-4 h-full rounded-xl bg-white text-writing dark:text-white dark:bg-dark-accent focus:ring-2 focus:ring-gray-300 dark:focus:ring-primary">
          <RiCustomerService2Fill size={20} /> Assistance
        </button>
      </div>

      <BecomeDriver />
    </div>
  );
};