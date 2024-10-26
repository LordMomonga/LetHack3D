import { BiCheck } from "react-icons/bi";
import { CgSoftwareUpload } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { BiLoaderCircle, BiTrash } from "react-icons/bi";
import axiosURL from "../axiosConfig";
import StepLine from "./StepLine";
import SelfieCapture from "./SelfieCapture";
import BirthdatePicker from "./BirthdatePicker";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { isAxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../feature/session.slice";

const isPhoneNumberValid = (phoneNumber) => {
    const phonePattern = /^\+\d{1,3}\d{6,14}$/;
    const newPhoneNumber = "+" + phoneNumber.trim()
    return phonePattern.test(newPhoneNumber);
};

export default function RegisterForm() {
    const { user: userSession } = useSelector((state) => state.session)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [verifyCode, setVerifyCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [step, setStep] = useState(1);

    const [filePhotoProfil, setFilePhotoProfil] = useState();

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        dateNaissance: "",
        email: "",
        password: "",
        telephone: "",
        adresse: "",
        photoProfil: null,
        cniRecto: null,
        cniVerso: null,
        photo: null,
        typeUtilisateur: 1,
        code: 0,
        userId: "",
    });

    const [errors, setErrors] = useState({
        nom: "",
        prenom: "",
        dateNaissance: "",
        email: "",
        password: "",
        telephone: "",
        adresse: "",
        photoProfil: "",
        cniRecto: "",
        cniVerso: "",
        photo: "",
        code: "",
    });

    const validateUserAccount = () => {
        setIsLoading(true);
        setErrors({
            ...errors,
            code: "",
        });

        if (verifyCode) {
            axiosURL.post(`/auth/verify-code?username=${formData.email}&code=${verifyCode}`)
                .then(({ data }) => {
                    setIsLoading(false);
                    console.log(data);
                    const userInfo = data

                    const session = {
                        connected: true,
                        user: userInfo,
                        expiredAt: undefined
                    }
                    dispatch(connect(session));
                })
                .then(() => {
                    toast.success("Compte validé avec succès ✨!");
                })
                .then(() => {
                    setStep(step + 1)
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

    const requestCode = async () => {
        setIsLoading(true);
        setErrors({
            ...errors,
            code: "",
        });

        try {
            const response = await axiosURL.post(`/auth/request-code?email=${formData.email}&username=${formData.email}`);
            setIsLoading(false);
            console.log(response.data);
            toast.success("Un code a été envoyé par email !");
        } catch (error) {
            setIsLoading(false);
            if (isAxiosError(error)) {
                toast.error(error.response?.data.message || "Une erreur inattendue s'est produite");
            } else {
                toast.error("Une erreur inattendue s'est produite");
            }
        }
    };


    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        setErrors({
            ...errors,
            [name]: "",
        }); // Clear any previous errors on change
    };

    const handleFilePhotoProfil = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setFilePhotoProfil(URL.createObjectURL(file));
        setFormData({ ...formData, photoProfil: file });
    }

    const setCapturedImage = (file) => {
        setFormData({ ...formData, photo: file });
        setErrors({
            ...errors,
            photo: "",
        });
    };

    const validateStep = () => {
        const newErrors = {
            nom: "",
            prenom: "",
            dateNaissance: "",
            email: "",
            password: "",
            telephone: "",
            adresse: "",
            photoProfil: "",
            cniRecto: "",
            cniVerso: "",
            photo: "",
            code: "",
        };

        switch (step) {
            case 1:
                if (!formData.nom) newErrors.nom = "Le nom est obligatoire";
                if (!formData.prenom) newErrors.prenom = "Le prénom est obligatoire";
                if (!formData.dateNaissance) newErrors.dateNaissance = "La date de naissance est obligatoire";
                if (!isPhoneNumberValid(formData.telephone)) {
                    newErrors.telephone = "Le téléphone est obligatoire";
                }
                if (!formData.adresse) newErrors.adresse = "L'adresse est obligatoire";
                break;
            case 2:
                if (!formData.email) {
                    newErrors.email = "L'email est obligatoire";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
                    newErrors.email = "Veuillez saisir une adresse email valide";
                }
                if (!formData.password) {
                    newErrors.password = "Entrer votre mot de passe";
                } else if (formData.password.length < 8) {
                    newErrors.password = "Le mot de passe doit comporter au moins 8 caractères";
                }
                break;
            case 3:
                if (!formData.code) newErrors.code = "Entrer le code de vérification";
                break;
            case 4:
                if (!formData.photoProfil) newErrors.photoProfil = "La photo de profile est obligatoire";
                break;
            case 5:
                if (!formData.photo) newErrors.photo = "La photo d'identifiquation est obligatoire";
                if (!formData.cniRecto) newErrors.cniRecto = "Le CNI recto est obligatoire";
                if (!formData.cniVerso) newErrors.cniVerso = "Le CNI verso est obligatoire";
                break;
        }

        setErrors(newErrors);
        return Object.values(newErrors).every(field => field === "");
    };

    const handleNextStep = () => {
        if (validateStep()) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        if (!validateStep()) return; // Stop submission if validation fails


        if (step === 2) {
            setIsLoading(true);

            try {
                const { data } = await axiosURL.post('/auth/register', formData);
                console.log(data);
                setIsLoading(false);

                try {
                    await requestCode();
                    toast.success(`Un code a été envoyé par email à ${formData.email}`);
                    setStep(step + 1);
                } catch (error) {
                    if (isAxiosError(error)) {
                        toast.error(error.response?.data.message || "Une erreur est survenue lors de l'envoi du code.");
                    } else {
                        toast.error("Une erreur inattendue s'est produite lors de l'envoi du code.");
                    }
                }
            } catch (error) {
                setIsLoading(false);

                if (isAxiosError(error)) {
                    toast.error(error.response?.data.message || "Une erreur inattendue s'est produite : réessayez plus tard !");
                } else {
                    toast.error("Une erreur inattendue s'est produite : réessayez plus tard !");
                }
            }
        }



        if (step === 4) {
            setIsLoading(true);
            if (userSession) {
                // Crée un nouvel objet FormData
                const formDataToSend = new FormData(event.currentTarget);

                // Renomme et ajoute le fichier photoProfil
                if (formData.photoProfil instanceof File) {

                    formDataToSend.append('type', "PHOTO_PROFIL");
                    formDataToSend.append('userId', `${userSession.id}`);

                    try {
                        const response = await axiosURL.post(`/images/upload`, formDataToSend, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                // TODO: fix global token and remove all of those headers 'Authorization': 'Bearer ' + userSession.token'
                                'Authorization': 'Bearer ' + userSession.token
                            },
                        });
                        console.log(response.data);
                        toast.success("Photo de profil mis à jour avec succès")
                        setIsLoading(false);
                        setStep(step + 1);
                    } catch (error) {
                        console.log(error);
                        toast.error("Une erreur inattendue s'est produite : réessayez plus tard !");
                        setIsLoading(false);
                    }
                }
            }
        }

        if (step === 5) {
            setIsLoading(true);

            if (userSession) {
                const formDataToSend = new FormData(event.currentTarget);
                let hasError = false;

                const uploadFile = async (file, type) => {
                    if (!file) return; // Si le fichier est nul ou invalide, on sort

                    const newFormData = new FormData();

                    // On renomme juste la clé, sans recréer le fichier
                    newFormData.append('file', file); // Utilise directement le fichier original
                    newFormData.append('type', type);
                    newFormData.append('userId', `${userSession.id}`);

                    try {
                        const response = await axiosURL.post(`/images/upload`, newFormData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                'Authorization': `Bearer ${userSession.token}`
                            },
                        });
                        console.log(response.data);
                        toast.success(`${type} envoyé avec succès`);
                    } catch (error) {
                        console.error(error);
                        toast.error(`Une erreur inattendue s'est produite lors de l'envoi de ${type}.`);
                        hasError = true;
                    }
                };

                // Récupère les fichiers à uploader
                const filesToUpload = [
                    { file: formData.photo, type: 'CONFIRMATION_ID' },
                    { file: formDataToSend.get('cniRecto'), type: 'CNI_RECTO' },
                    { file: formDataToSend.get('cniVerso'), type: 'CNI_VERSO' }
                ];

                await Promise.all(filesToUpload.map(({ file, type }) => uploadFile(file, type)));

                if (!hasError) {
                    toast.success("Toutes les images ont été envoyées avec succès !");
                    navigate("/profile");
                }

                setIsLoading(false);
            }

        }

    };

    // const handleFileSelect = (file) => {
    //     console.log('Selected file:', file);
    //     // Vous pouvez maintenant envoyer le fichier au serveur ou le traiter comme vous le souhaitez
    // };

    return (
        <form className="space-y-4 md:space-y-6 dark:bg-dark w-full sm:max-w-lg" onSubmit={handleRegister}>
            <StepLine step={step} />
            {step === 1 && (
                <>
                    <h2 className="text-xl font-bold text-writing dark:text-white">Informations Personnelles</h2>
                    <div>
                        <label htmlFor="nom" className="block mb-2 text-sm font-bold text-writing dark:text-white">Nom*</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="nom"
                            value={formData.nom}
                            placeholder="Nom*"
                            className={`${errors.nom && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 block w-full p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                        />
                        <span className="text-red-400 text-sm">{errors.nom && errors.nom}</span>
                    </div>

                    <div>
                        <label htmlFor="prenom" className="block mb-2 text-sm font-bold text-writing dark:text-white">Prénom*</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            placeholder="Prénom*"
                            className={`${errors.prenom && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 block w-full p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                        />
                        <span className="text-red-400 text-sm">{errors.prenom && errors.prenom}</span>
                    </div>

                    {/* TODO: check if date is correct after submit */}
                    <BirthdatePicker formData={formData} handleChange={handleChange} errors={errors} />

                    <div>
                        <label htmlFor="telephone" className="block mb-2 text-sm font-bold text-writing dark:text-white">Téléphone*</label>
                        <PhoneInput
                            inputProps={{
                                name: 'telephone',
                                required: true
                            }}
                            specialLabel={""}
                            country={'cm'}
                            value={formData.telephone}
                            inputClass={`${errors.telephone && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 !rounded-xl focus:ring-2 focus:ring-gray-300 block w-full !w-full !p-3 !pl-12 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                            onChange={(tel) => setFormData(prev => ({ ...prev, telephone: tel }))}
                            dropdownClass="text-writing bg-white dark:bg-dark dark:text-white"

                            onlyCountries={['cm', 'fr', 'lu', 'ca', 'de', 'ci']}
                        />
                        <span className="text-red-400 text-sm">{errors.telephone && errors.telephone}</span>
                    </div>

                    <div>
                        <label htmlFor="adresse" className="block mb-2 text-sm font-bold text-writing dark:text-white">Adresse*</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="adresse"
                            value={formData.adresse}
                            placeholder="Douala Bonapriso*"
                            className={`${errors.adresse && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 block w-full p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                        />
                        <span className="text-red-400 text-sm">{errors.adresse && errors.adresse}</span>
                    </div>

                    <button type="button" className="btn bg-primary !w-full !justify-center mb-5" onClick={handleNextStep}>
                        Suivant
                    </button>
                </>
            )}
            {step === 2 && (
                <>
                    <h2 className="text-xl font-bold text-writing dark:text-white">Informations de connexion</h2>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-bold text-writing dark:text-white">Email*</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email*"
                            className={`${errors.email && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 block w-full p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                        />
                        <span className="text-red-400 text-sm">{errors.email && errors.email}</span>
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-bold text-writing dark:text-white">Mot de passe*</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Au moins 8 caractères*"
                            className={`${errors.password && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 block w-full p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                        />
                        <span className="text-red-400 text-sm">{errors.password && errors.password}</span>
                    </div>

                    <div className="flex justify-between">
                        <button type="button" className="btn bg-secondary !w-1/2 !justify-center mb-5 mr-2" onClick={handlePreviousStep}>
                            Précédent
                        </button>
                        <button type="submit" className="btn bg-primary !w-1/2 !justify-center mb-5" disabled={isLoading}>
                            {isLoading ? <>
                                Chargement <BiLoaderCircle className="animate-spin text-xl ml-1" />
                            </> : <>
                                S'inscrire
                            </>}
                        </button>
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <h2 className="text-xl font-bold text-writing dark:text-white">Code de validation*</h2>
                    <div className={`flex flex-col w-full max-w-sm mx-auto rounded-xl gap-4`}>

                        <div>
                            <input
                                onChange={(e) => setVerifyCode(e.target.value)}
                                type="text"
                                name="nom"
                                value={verifyCode}
                                placeholder="Code à 6 chiffres*"
                                className={`${errors.code && "!ring-red-500/50 ring-2"} bg-gray-50 outline-none text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 block w-full p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                            />
                            <span className="text-sm flex items-center gap-1">
                                {!errors.code && <>
                                    <AiOutlineInfoCircle />
                                    <span>Vous avez reçu un code par mail </span>
                                </>}
                            </span>
                            <span className="text-red-400 text-sm">{errors.code && errors.code}</span>
                            <p onClick={requestCode} className="underline hover:text-primary">renvoyer le code</p>
                        </div>

                        <button
                            onClick={validateUserAccount}
                            type="button"
                            className="btn flex justify-center items-center !w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? <>
                                Chargement <BiLoaderCircle className="animate-spin text-xl ml-1" />
                            </> : <>
                                <BiCheck className="mr-2" size={16} />
                                Valider
                            </>}
                        </button>

                    </div>
                </>
            )}
            {step === 4 && (
                <>
                    <h2 className="text-xl font-bold text-writing dark:text-white">Photo de profile</h2>
                    <div className="relative h-52 w-52 m-auto">
                        {filePhotoProfil && <span
                            onClick={() => {
                                setFilePhotoProfil("")
                                setFormData({ ...formData, photoProfil: "" })
                            }}
                            className="z-20 absolute top-2 right-2 bg-red-400 !p-1 !rounded"
                        >
                            <BiTrash />
                        </span>}
                        <label
                            htmlFor="photoProfil"
                            className={`${errors.photoProfil && "!ring-red-500/50 ring-2"} h-full font-light flex flex-col justify-center items-center border-dashed border-2 dark:border-gray-400 bg-gray-50 mb-2 text-sm text-writing outline-none rounded-xl focus:ring-2 focus:ring-gray-300 p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                        >
                            {filePhotoProfil && <img
                                src={filePhotoProfil}
                                alt="image-example"
                                className="z-10 max-h-full max-w-full absolute top-0 right-0 min-w-full min-h-full rounded-lg border-dashed border-2 dark:border-gray-400"
                            />}
                            <div className="flex justify-center flex-col items-center">
                                <CgSoftwareUpload className="text-3xl opacity-75" />
                                <p className="mb-2 text-center"><span className="font-semibold">Cliquez pour télécharger</span> ou glisser-déposer</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or JPEG (MAX. 1Mo)</p>
                                <span className="text-red-400 text-sm text-center font-bold">{errors.photoProfil && errors.photoProfil}</span>
                            </div>
                        </label>
                        <input
                            onChange={handleFilePhotoProfil}
                            type="file"
                            hidden
                            id="photoProfil"
                            name="file"
                        />
                    </div>

                    <button disabled={isLoading} type="submit" className="btn bg-primary !w-full !justify-center mb-5">
                        {isLoading ? <>
                            Chargement <BiLoaderCircle className="animate-spin text-xl ml-1" />
                        </> : <>
                            Suivant
                        </>}
                    </button>
                </>
            )}
            {step === 5 && (
                <>
                    <h2 className="text-xl font-bold text-writing dark:text-white">Documents d'identifiquation</h2>

                    <div className="w-full">
                        <label
                            htmlFor="cni"
                            className="block text-writing dark:text-white mb-3"
                        >Photo de d'identification (selfi)*</label>
                        <div
                            className={`${errors.photo && "!ring-red-500/50 ring-2"} border-dashed border-2 dark:border-gray-400 bg-white mb-2 text-sm font-bold text-writing outline-none rounded-xl focus:ring-2 focus:ring-gray-300 block w-fit m-auto p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                        >
                            <SelfieCapture setCapturedImage={setCapturedImage} capturedImage={formData.photo} />
                            <span className="text-red-400 text-center block mt-2 text-sm">{errors.photo && errors.photo}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <label
                            htmlFor="cni"
                            className="block text-writing dark:text-white col-span-2"
                        >CNI*</label>
                        <div>
                            <label
                                htmlFor="cniRecto"
                                className={`${errors.cniRecto && "!ring-red-500/50 ring-2"} ${formData.cniRecto && "!ring-green-500/50 ring-2"} h-fit border-dashed border-2 dark:border-gray-400 bg-gray-50 mb-2 text-sm font-bold text-writing outline-none rounded-xl focus:ring-2 focus:ring-gray-300 block w-full p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                            >Recto*
                                <img className="opacity-70 max-h-20 m-auto block" src='/images/illustrations/recto.webp' alt='idcard recto' />
                            </label>
                            <input
                                onChange={handleChange}
                                type="file"
                                hidden
                                id="cniRecto"
                                name="cniRecto"
                                placeholder="CNI Recto"
                            />
                            <span className="text-red-400 text-sm">{errors.cniRecto && errors.cniRecto}</span>
                        </div>

                        <div>
                            <label
                                htmlFor="cniVerso"
                                className={`${errors.cniVerso && "!ring-red-500/50 ring-2"} ${formData.cniVerso && "!ring-green-500/50 ring-2"} h-fit border-dashed border-2 dark:border-gray-400 bg-gray-50 mb-2 text-sm font-bold text-writing outline-none rounded-xl focus:ring-2 focus:ring-gray-300 block w-full p-3 dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary`}
                            >Verso*
                                <img className="opacity-70 max-h-20 m-auto block" src='/images/illustrations/verso.webp' alt='idcard verso' />
                            </label>
                            <input
                                onChange={handleChange}
                                type="file"
                                hidden
                                id="cniVerso"
                                name="cniVerso"
                                placeholder="CNI Recto"
                            />
                            <span className="text-red-400 text-sm">{errors.cniVerso && errors.cniVerso}</span>
                        </div>
                    </div>

                    <button disabled={isLoading} type="submit" className="btn bg-primary !w-full !justify-center mb-5">
                        {isLoading ? <>
                            Chargement <BiLoaderCircle className="animate-spin text-xl ml-1" />
                        </> : <>
                            Terminer
                        </>}
                    </button>
                </>
            )}
        </form>
    );
}
