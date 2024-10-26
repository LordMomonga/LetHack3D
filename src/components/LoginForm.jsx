import { BiLoaderCircle } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from 'react';
import axiosURL from "../axiosConfig";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { connect } from "../feature/session.slice";
import { isAxiosError } from "axios";

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState('LOGIN');

    const [formData, setFormData] = useState({
        username: '',
        code: '',
    });

    const [errors, setErrors] = useState({
        username: "",
        code: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setErrors({
            username: "",
            code: "",
        }); // Clear any previous errors on change
    };

    const validate = () => {
        const errors = {
            username: "",
            code: ""
        };

        if (step === "CODE") {
            if (!formData.code) {
                errors.code = "Le code est obligatoire";
            }
        }

        if (step === "LOGIN") {
            if (!formData.username) {
                errors.username = "Le nom d'utilisateur est obligatoire";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.username)) {
                errors.username = "Veuillez saisir une adresse email valide";
            }
        }
        setErrors(errors);

        return Object.values(errors).every(field => field === "")
    };

    const requestCode = async (event) => {

        event.preventDefault();

        if (!validate()) return; // Stop submission if validation fails
        setIsLoading(true);

        setErrors({
            ...errors,
            username: "",
        });

        try {
            const response = await axiosURL.post(`/auth/request-code?email=${formData.username}&username=${formData.username}`);
            setIsLoading(false);
            console.log(response.data);
            toast.success("Un code a été envoyé par email !");
            setStep("CODE")
        } catch (error) {
            setIsLoading(false);
            if (isAxiosError(error)) {
                toast.error(error.response?.data.message || "Une erreur inattendue s'est produite");
            } else {
                toast.error("Une erreur inattendue s'est produite");
            }
        }
    };

    const validateUserAccount = (event) => {
        event.preventDefault();

        if (!validate()) return; // Stop submission if validation fails
        setIsLoading(true);

        setErrors({
            ...errors,
            code: "",
        });

        if (formData.code) {
            axiosURL.post(`/auth/verify-code?username=${formData.username}&code=${formData.code}`)
                .then(({ data }) => {
                    setIsLoading(false);
                    const userInfo = data

                    const session = {
                        connected: true,
                        user: userInfo,
                        expiredAt: undefined
                    }
                    dispatch(connect(session));
                    setFormData({
                        username: '',
                        code: '',
                    });
                })
                .then(() => {
                    toast.success("Bienvenue à vous ✨!");
                })
                .then(() => {
                    navigate('/profile')
                })
                .catch((error) => {
                    setIsLoading(false);
                    toast.error(error.response?.data.message || "Une erreur inattendue s'est produite")
                });
        } else {
            setErrors({
                ...errors,
                code: "Veuillez entrer le code de validation !",
            });
        }

    };


    return (
        <>
            {step === "LOGIN" &&
                <form className="space-y-4 md:space-y-6 dark:bg-dark w-full sm:max-w-lg" onSubmit={requestCode}>
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-bold text-writing dark:text-white">Votre email*</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="username"
                            placeholder="Email ou téléphone*"
                            className={`${errors.username && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 block w-full p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                        />
                        <span className="text-red-400 text-sm">{errors.username && errors.username}</span>
                    </div>
                    <button
                        className="btn bg-primary !w-full !justify-center mb-5"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? <>
                            Chargement <BiLoaderCircle className="animate-spin text-xl ml-1" />
                        </> : <>
                            Se connecter
                        </>}
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-200 text-center border-t-2 pt-6 border-gray-500">
                        Je suis nouveau, je veux {" "}
                        <NavLink to="/register" className="text-secondary font-semibold hover:underline">créer un compte.</NavLink>
                    </p>
                </form>
            }
            {step === "CODE" &&
                <form className="space-y-4 md:space-y-6 dark:bg-dark w-full sm:max-w-lg" onSubmit={validateUserAccount}>
                    <div>
                        <label htmlFor="code" className="block mb-2 text-sm font-bold text-writing dark:text-white">Code de vérification*</label>
                        <input
                            onChange={handleChange}
                            type="number"
                            name="code"
                            placeholder="By Mail or SMS "
                            className={`${errors.code && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 block w-full p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                        />
                        <span className="text-red-400 text-sm">{errors.code && errors.code}</span>
                    </div>
                    <button
                        className="btn bg-primary !w-full !justify-center mb-5"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? <>
                            Chargement <BiLoaderCircle className="animate-spin text-xl ml-1" />
                        </> : <>
                            Vérifier
                        </>}
                    </button>
                </form>
            }
        </>
    );
}
