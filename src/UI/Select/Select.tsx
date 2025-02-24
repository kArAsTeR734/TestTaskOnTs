import classes from "./select.module.css";
import {ChangeEvent, FC} from "react";

interface SelectOption {
    value: string | number;
    name: string;
}

interface SelectProps {
    options: SelectOption[];
    value?: string | number;
    onChange?: (value: string | number) => void; // Разрешить оба типа
}

const Select: FC<SelectProps> = ({options, value, onChange}) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;

        const parsedValue = !isNaN(Number(selectedValue))
            ? Number(selectedValue)
            : selectedValue;
        onChange?.(parsedValue);
    };
    return (
        <select
            value={value}
            onChange={handleChange}
            className={classes.select}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default Select;