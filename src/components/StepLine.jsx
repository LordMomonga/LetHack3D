import { BiCheck } from "react-icons/bi";

export default function StepLine({ step }) {
    return (
        <div className="w-full mb-8 font-semibold">
            <div className="flex">
                {/* step 1 */}
                <div className="flex-1 relative">
                    <div className={`w-6 h-6 mx-auto rounded-full text-sm text-white flex items-center ${step >= 1 ? 'bg-primary' : 'bg-gray-300'}`}>
                        <span className="text-gray-900 text-center w-full">
                            {step > 1 ? <BiCheck className="fa fa-check text-white w-full fill-current white" /> : <span className={`${step === 1 ? 'text-white' : ''}`}>1</span>}
                        </span>
                    </div>
                </div>

                {/* step 2 */}
                <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className={`w-full rounded items-center align-middle align-center flex-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}>
                        <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className={`w-6 h-6 mx-auto rounded-full text-sm text-white flex items-center ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}>
                        <span className="text-gray-900 text-center w-full">
                            {step > 2 ? <BiCheck className="fa fa-check text-white w-full fill-current white" /> : <span className={`${step === 2 ? 'text-white' : ''}`}>2</span>}
                        </span>
                    </div>
                </div>

                {/* step 3 */}
                <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className={`w-full rounded items-center align-middle align-center flex-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-300'}`}>
                        <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className={`w-6 h-6 mx-auto rounded-full text-sm text-white flex items-center ${step >= 3 ? 'bg-primary' : 'bg-gray-300'}`}>
                        <span className="text-gray-900 text-center w-full">
                            {step > 3 ? <BiCheck className="fa fa-check text-white w-full fill-current white" /> : <span className={`${step === 3 ? 'text-white' : ''}`}>3</span>}
                        </span>
                    </div>
                </div>

                {/* step 4 */}
                <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className={`w-full rounded items-center align-middle align-center flex-1 ${step >= 4 ? 'bg-primary' : 'bg-gray-300'}`}>
                        <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className={`w-6 h-6 mx-auto rounded-full text-sm text-white flex items-center ${step >= 4 ? 'bg-primary' : 'bg-gray-300'}`}>
                        <span className="text-gray-900 text-center w-full">
                            {step > 4 ? <BiCheck className="fa fa-check text-white w-full fill-current white" /> : <span className={`${step === 4 ? 'text-white' : ''}`}>4</span>}
                        </span>
                    </div>
                </div>

                {/* step 5 */}
                <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className={`w-full rounded items-center align-middle align-center flex-1 ${step >= 5 ? 'bg-primary' : 'bg-gray-300'}`}>
                        <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded w-[20%]"></div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className={`w-6 h-6 mx-auto rounded-full text-sm flex items-center ${step >= 5 ? 'bg-primary' : 'bg-gray-300'}`}>
                        <span className="text-gray-900 text-center w-full">
                            {step > 5 ? <BiCheck className="fa fa-check text-white w-full fill-current white" /> : <span className={`${step === 5 ? 'text-white' : ''}`}>5</span>}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
