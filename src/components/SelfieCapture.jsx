import { BiUndo } from "react-icons/bi";
import { useRef, useState, useEffect } from 'react';

export default function SelfieCapture({ capturedImage, setCapturedImage }) {

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const illustrationRef = useRef(null);
    const [stream, setStream] = useState(null);

    useEffect(() => {
        return () => {
            stopCamera();
        };
    }, []);

    const startCamera = async () => {
        try {
            const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
            setStream(newStream);
            if (videoRef.current) {
                videoRef.current.srcObject = newStream;
            }
            if (illustrationRef.current) {
                illustrationRef.current.classList.add("hidden");
            }
        } catch (err) {
            console.error("Erreur lors de l'accès à la caméra:", err);
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        if (illustrationRef.current) {
            illustrationRef.current.classList.remove("hidden");
        }
    };

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.drawImage(videoRef.current, 0, 0, 640, 480);
                canvasRef.current.toBlob((blob) => {
                    if (blob) {
                        const file = new File([blob], "selfie.jpg", { type: "image/jpeg" });
                        setCapturedImage(file);
                        stopCamera();
                    }
                }, 'image/jpeg');
            }
        }
    };

    const retakePhoto = () => {
        setCapturedImage(null);
        startCamera();
    };

    return (
        <>
            {!capturedImage ? (
                <>
                    <div className="relative w-64 h-64 mx-auto mb-4 overflow-hidden rounded-lg bg-gray-200">
                        <video ref={videoRef} autoPlay className="absolute inset-0 w-full h-full object-cover" />
                        <img ref={illustrationRef} src='/images/illustrations/selfie-kyc.webp' alt='selfie tuto' />
                    </div>
                    <div className="flex justify-center space-x-4">
                        {!stream ? (
                            <button
                                type='button'
                                onClick={startCamera}
                                className="px-4 py-2 bg-primary text-white rounded-full hover:bg-blue-600 transition duration-300"
                            >
                                Démarrer la caméra
                            </button>
                        ) : (
                            <button
                                type='button'
                                onClick={captureImage}
                                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
                            >
                                Prendre le selfie
                            </button>
                        )}
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <img src={URL.createObjectURL(capturedImage)} alt="Selfie capturé" className="w-64 h-64 mx-auto mb-4 rounded-lg object-cover" />
                    <p className="text-green-600 dark:text-green-400 font-semibold mb-4">Selfie capturé avec succès !</p>
                    <button
                        type='button'
                        onClick={retakePhoto}
                        className="flex gap-1 justify-center items-center underline w-full text-writing dark:text-gray-200 transition duration-300"
                    >
                        Reprendre <BiUndo />
                    </button>
                </div>
            )}
            <canvas ref={canvasRef} className="hidden" width={640} height={480} />
        </>
    );
};
