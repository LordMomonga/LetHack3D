import { toast } from "sonner";
import { AxiosError } from "axios";
import { store } from "./app/store";


export const getTokenFromState = () => {
    const state = store.getState();
    return state.session.user.token;
};


export function formatToXAF(number) {
    // Convert the number to string
    const numberStr = number.toString();

    // Split the integer and decimal parts
    const [integerPart, decimalPart] = numberStr.split(".");

    // Add spaces to separate thousands
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    // Format the decimal part (2 digits after the decimal point)
    const formattedDecimalPart = decimalPart ? `.${decimalPart.slice(0, 2)}` : "";

    // Return the formatted number
    return `${formattedIntegerPart} ${formattedDecimalPart} FCFA`;
}

export const loadState = (stateName) => {
    try {
        const serializedState = localStorage.getItem(stateName);
        if (!serializedState) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (stateName, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(stateName, serializedState);
    } catch (err) {
        console.error("Error saving state to localStorage:", err);
    }
};


export function getParameters(url) {
    // Détecter la chaîne de requête (type string)
    const queryString = url.split("?")[1];

    // Si la chaîne de requête est absente
    if (!queryString) {
        return false;
    }

    // Découper la chaîne de requête en paires clé-valeur (type string[])
    const parameters = queryString.split("&");

    // Créer un objet pour stocker les paramètres (type Params)
    const params = { restaurantId: "", tableId: "" };
    for (const param of parameters) {
        const [key, value] = param.split("=");
        params[key] = value; // keyof Params pour garantir la compatibilité
    }

    // Vérifier la présence des paramètres requis
    if (!params.restaurantId || !params.tableId) {
        return false;
    }

    // Retourner l'objet des paramètres (type Params)
    return params;
}


export const AxiosErrorHandle = (error) => {

    const { status } = error;
    if (!navigator.onLine) {
        return toast.warning("Vérifiez votre connexion internet et réessayez.")
    }

    const errorPayload = error.response?.data

    if (errorPayload?.error === "Unauthorized"
        && location.pathname !== "/login"
        && location.pathname !== "/register"
        && location.pathname !== "/simple/sponsorship/subscription-stape1"
    ) {
        location.pathname = "/login"
        return toast.warning("Vous devez vous connect a votre compte.")
    }

    if (errorPayload?.message instanceof Array && errorPayload.message.length > 0) {
        errorPayload.message.forEach((message) => {
            toast.error(message)
        })
        return
    }

    if (typeof errorPayload?.message === 'string' && errorPayload?.message !== "") {
        return toast.error(errorPayload.message)
    }

    // au cas ou 😅
    switch (status) {
        case 400:
            return toast.error("Requête invalide. Veuillez vérifier vos informations.");
        case 401:
            return toast.error("Vous n'êtes pas autorisé à accéder à cette ressource.");
        case 403:
            return toast.error("Vous n'avez pas les droits nécessaires pour effectuer cette action.");
        case 404:
            return toast.error("La ressource demandée est introuvable.");
        case 500:
            return toast.error("Une erreur interne du serveur est survenue. Veuillez réessayer ultérieurement.");
        case 503:
            return toast.error("Le serveur est indisponible. Veuillez réessayer ultérieurement.");
    }

    return toast.error("Une erreur inattendue s'est produite : réessayez plus tard !")
}