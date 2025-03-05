import {createContext, FC, PropsWithChildren, useState} from "react";
import {IDetail} from "../models/IDetail.ts";
import {DetailService} from "../API/DetailService.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

interface ModalContextType {
    ChangeItem: (item: IDetail | null) => void
    CreateItem: (item: { id: number; title: string; unit: string,code:string }) => void,
    CancelItem: () => void,
    modal: boolean,
    setActive: (active: boolean) => void,
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: FC<PropsWithChildren> = ({children}) => {

    const queryClient = useQueryClient();
    const [modal, setModal] = useState(false);
    const createMutation = useMutation({
        mutationFn: (newItem: IDetail) => DetailService.createDetail(newItem),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["PaginationPosts"]});
            queryClient.invalidateQueries({queryKey: ["posts"]});
            setModal(false);
        },
    });

    const editMutation = useMutation({
        mutationFn: (editingDetail: IDetail) => DetailService.editDetail(editingDetail),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["PaginationPosts"]});
            setModal(false);
        }
    })

    const CreateItem = (item: IDetail) => {
        createMutation.mutate(item);
    }

    const ChangeItem = (detail: IDetail | null) => {
        if (detail)
            editMutation.mutate(detail);
    };

    const CancelItem = () => {
        setModal(modal);
    }

    const setActive = () => {
        setModal(!modal);
    }
    return (
        <ModalContext.Provider value={{CreateItem, ChangeItem, CancelItem, modal, setActive}}>
            {children}
        </ModalContext.Provider>
    )
};