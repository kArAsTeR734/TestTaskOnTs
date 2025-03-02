
import {createContext, FC, PropsWithChildren, useState} from "react";
import {IDetail} from "../models/IDetail.ts";
import {createDetail, editDetail} from "../API/DetailService.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

interface ModalContextType {
    ChangeItem: (item: IDetail | null) => void;
    CreateItem: (item: { id: number; title: string; body: string }) => void;
    CancelItem: () => void;
    modal: boolean,
    setActive: (active: boolean) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: FC<PropsWithChildren> = ({children}) => {

    const queryClient = useQueryClient();
    const [modal, setModal] = useState(false);

    const createMutation = useMutation({
        mutationFn: (newItem: IDetail) => createDetail(newItem),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["PaginationPosts"] });
            setModal(false);
        },
    });

    const editMutation = useMutation({
        mutationFn:(editingDetail:IDetail) => editDetail(editingDetail),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["PaginationPosts"]});
            setModal(false);
        }
    })

    const CreateItem = (item: IDetail) => {
        createMutation.mutate(item)
    }

    const ChangeItem = (detail:IDetail)=>{
        editMutation.mutate(detail) ;
    }

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