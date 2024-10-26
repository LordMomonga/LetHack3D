import { useState } from 'react'
import { AiOutlineLock } from 'react-icons/ai'
import Modal from 'react-responsive-modal'
import RegisterFormDriver from './RegisterFormDriver'

export default function BecomeDriver() {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <div className="mt-7 h-64 p-10 rounded-xl flex items-center justify-center flex-col bg-white dark:bg-dark-accent">
                <AiOutlineLock size={24} />
                <p className="text-center my-3">
                    Cet espace est réservé aux conducteurs
                </p>
                <button onClick={() => setVisible(true)} className="btn">
                    Devenir Conducteur
                </button>
            </div>
            <Modal
                open={visible}
                onClose={() =>
                    setVisible(false)
                }
                center
                classNames={{ modal: "m-0 w-screen h-screen pt-14 bg-light dark:bg-dark" }}
            >
                <RegisterFormDriver setVisible={setVisible} />
            </Modal>
        </>
    )
}
