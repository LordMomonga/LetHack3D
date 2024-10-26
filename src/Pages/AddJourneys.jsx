import BecomeDriver from "../components/BecomeDriver";

export default function AddJourneys() {

  return (
    <div className="flex flex-col pt-20 px-6 max-w-7xl">
      <h2 className="text-2xl font-bold mb-4 w-full underline_custom relative">Vos Trajets</h2>

      <BecomeDriver />
    </div>
  );
};