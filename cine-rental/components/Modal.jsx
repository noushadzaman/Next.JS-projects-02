"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Modal = ({ children }) => {
    const router = useRouter();
    const modalRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Marking the component as mounted

    return () => {
      setMounted(false); // Marking the component as unmounted
    };
  }, []);

  useEffect(() => {
    if (mounted && modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal();
    }
  }, [mounted]);


    function onHide() {
        router.back();
    }

    return createPortal(
        <dialog
            ref={modalRef}
            onClose={onHide}
            className="shadow-rose-500 shadow-md border border-rose-400 flex flex-col p-2 rounded-md"
        >
            <span
                onClick={onHide}
                className="flex justify-end cursor-pointer"
            >
                <Image
                    src={'/xmark.svg'}
                    width={30}
                    height={30}
                    alt="close"
                />
            </span>
            {children}
        </dialog>,
        document.getElementById("modal-root-content")
    )
};

export default Modal;