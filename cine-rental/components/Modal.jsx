"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Modal = ({ children }) => {
    const modalRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (!modalRef.current?.open) {
            modalRef.current?.showModal();
        }
    }, [])

    function onHide() {
        router.back();
    }

    return createPortal(
        <dialog
            ref={modalRef}
            onClose={onHide}
            className="shadow-[#00D991] shadow-md border border-[#00D991] flex flex-col p-2 rounded-md"
        >
            <span
                onClick={onHide}
                className="flex justify-end cursor-pointer"
            >
                <p>
                    <Image src={'/xmark.svg'} height={30} width={30} alt="close" />
                </p>
            </span>
            {children}
        </dialog>,
        document.getElementById("modal-root-content")
    )
};

export default Modal;