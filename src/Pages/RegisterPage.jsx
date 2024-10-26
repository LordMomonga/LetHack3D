import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
    return (
        <section className="RegisterPage w-[88vw] m-auto flex justify-center md:pt-20 max-w-7xl">
            <div className="w-full text-writing dark:text-white mt-20 md:mt-0 sm:max-w-md">
                <h1 className="text-2xl font-bold mb-6 w-full underline_custom relative">
                    Créer un compte
                </h1>
                <RegisterForm />
            </div>
        </section>
    )
}
