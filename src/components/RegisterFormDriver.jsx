export default function RegisterFormDriver({ setVisible }) {

    return (
        <form className="space-y-4 md:space-y-6 dark:bg-dark w-full sm:max-w-lg">
            <h1 className="text-2xl font-bold mb-6 w-full underline_custom relative">
                Devenir conducteur
            </h1>
            <div className="bg-gray-100 dark:bg-dark-accent p-4 rounded-lg shadow-md">
                <p className="text-center text-lg font-medium text-gray-700 dark:text-white">
                    🚧 Cette section est en cours de développement et sera bientôt disponible. Restez à l'écoute ! 🚀
                </p>
                <button type="button" className="btn !bg-gray-500 mt-3" onClick={() => setVisible(false)}>
                    retour
                </button>
            </div>

        </form>
    );
}
