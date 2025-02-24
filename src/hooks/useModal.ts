import {useContext} from "react";
import {ModalContext} from "../context/ModalContext.tsx";

export const useModal = () => {
    const modalContext = useContext(ModalContext);
    if (!modalContext) throw new Error('Use ModalContext must be used within a ModalProvider');

    return modalContext;
}