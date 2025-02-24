import classes from "./modal.module.css";
import {useInput} from "../../hooks/useInput.ts";
import Button from "../Button/Button.tsx";
import {useModal} from "../../hooks/useModal.ts";
import React, {FC} from "react";
import Input from "../Input/Input.tsx";
import {IDetail} from "../../models/IDetail.ts";

interface ModalProps{
    editingPosition: IDetail | null;
    onSave: (name: string) => void;
    onClose: () => void;
}

const Modal:FC<ModalProps> = ({editingPosition,onSave,onClose}) => {
    const title = useInput('');
    const code = useInput('');
    const unit = useInput('');
    const {modal, setActive, CreateItem} = useModal();
    const createItem = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            title: title.value,
            body: code.value,
        };
        CreateItem(newItem);
        title.value = '';
        code.value = '';
        unit.value = '';
        console.log(newItem);
    }

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
                    <div className={classes.modal_subheader}>Заполните все поля для создания новой номенкулатуры</div>
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
                                {...title}
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
                                {...unit}
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
                                {...code}
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
                                className={classes.confirm_btn}>
                                Подтвердить
                            </Button>
                            <Button
                                onClick={() => createItem}
                                className={[classes.change_btn, classes.hide].join(' ')}>
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