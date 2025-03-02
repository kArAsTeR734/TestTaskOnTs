import classes from "./modal.module.css";
import Button from "../Button/Button.tsx";
import {useModal} from "../../hooks/useModal.ts";
import React, {FC, useEffect, useState} from "react";
import Input from "../Input/Input.tsx";
import {IDetail} from "../../models/IDetail.ts";

interface ModalProps {
    editingDetail: IDetail | null;
}

const Modal: FC<ModalProps> = ({editingDetail}) => {
    const [titleValue, setTitleValue] = useState('');
    const [codeValue, setCodeValue] = useState('');
    const [unitValue, setUnitValue] = useState('');
    const {modal, setActive, CreateItem,ChangeItem} = useModal();

    const handleSaveEditedDetail = () => {
        const updatedDetail = {...editingDetail, title:titleValue, body:codeValue} as IDetail;
        console.log("updatedDetail", updatedDetail);
        ChangeItem(updatedDetail);
    }

    const createItem = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            title: titleValue,
            body: codeValue,
        };
        CreateItem(newItem);
        setTitleValue('');
        setCodeValue('');
        setUnitValue('');
    }

    useEffect(() => {
        if (editingDetail) {
            setTitleValue(editingDetail.title); // Устанавливаем значение из editingDetail
            setUnitValue(editingDetail.body); // Устанавливаем значение из editingDetail
            setCodeValue(editingDetail.body); // Устанавливаем значение из editingDetail
        } else {
            setTitleValue(""); // Сбрасываем значение, если editingDetail равен null
            setUnitValue(""); // Сбрасываем значение, если editingDetail равен null
            setCodeValue(""); // Сбрасываем значение, если editingDetail равен null
        }
    }, [editingDetail]); // Зависимость от editingDetail

    return (
        <div onClick={() => setActive(modal)}
             className={modal ? classes.modal : [classes.modal, classes.hide].join(' ')}
        >
            <div className={classes.modal__wrapper}
                 onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                <div className={classes.icon_house_wrapper}>
                    <img rel="icon" src="/src/icons/houseIcon.png" alt="" className={classes.modal_icon}/>
                </div>
                <div className={classes.closeBtnWrapper}>
                    <div className={classes.closeModalBtn} onClick={() => setActive(modal)}></div>
                </div>
                <div className={classes.modal_info}>
                    <div className={classes.modal_header} id="modal_header"></div>
                    <div className={classes.modal_subheader}>
                        {editingDetail?.title
                            ? editingDetail.title
                            : 'Заполните все поля для создания новой номенкулатуры'}
                    </div>
                    <form
                        className={classes.add_item_form}
                        onSubmit={createItem}>
                        <div className={classes.title}>
                            <label
                                htmlFor="title"
                                className={classes.title_description}>
                                Название
                            </label>
                            <br/>
                            <Input
                                value={titleValue}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitleValue(e.target.value)}
                                type="text"
                                className={classes.title_field}
                                id="title"
                                name="title"
                                placeholder="Деталь X"
                                required/>
                            <div id="titleErrors"></div>
                        </div>

                        <div className={classes.units}>
                            <label
                                htmlFor="unit"
                                className={classes.units_description}>
                                Единица имерения
                            </label>
                            <br/>
                            <Input
                                value={unitValue}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUnitValue(e.target.value)}
                                type="text"
                                className={classes.unit_field}
                                id="unit"
                                name="unit"
                                placeholder="шт/кг"
                                required/>
                            <div id="unitErrors"></div>
                        </div>

                        <div className={classes.item}>
                            <label
                                htmlFor="code"
                                className={classes.item_description}>
                                Артикул/код
                            </label>
                            <br/>
                            <Input
                                value={codeValue}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCodeValue(e.target.value)}
                                type="text"
                                className={classes.item_field}
                                id="code"
                                name="code"
                                placeholder="1234567"
                                required/>
                            <div id="codeErrors"></div>
                        </div>

                        <div className={classes.description}>
                            <label
                                htmlFor="description"
                                className={classes.description_description}>
                                Описание
                            </label>
                            <br/>
                            <textarea
                                className={classes.description_field}
                                id="description"
                                name="description"
                                placeholder="Описание предмета" required></textarea>
                            <div id="descriptionErrors"></div>
                        </div>
                        <div className={classes.modal_buttons} id="0">
                            <Button
                                onClick={() => setActive(false)}
                                className={classes.cancel_btn}>
                                Отмена
                            </Button>
                            <Button
                                onClick={() => createItem}
                                className={editingDetail ? [classes.confirm_btn, classes.hide].join(' ') : classes.confirm_btn}>
                                Подтвердить
                            </Button>
                            <Button
                                onClick={() => handleSaveEditedDetail()}
                                className={editingDetail ? classes.change_btn : [classes.change_btn, classes.hide].join(' ')}>
                                Изменить
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;