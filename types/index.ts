import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?:string;
    rightIcon?: String;
    isDisable?: boolean;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
    manufacturer: String;
    setManufacturer: (manufacturer: String) => void;
}

export interface CarProps {
    city_mpg: number;
    class: String;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: String;
    fuel_type: String;
    highway_mpg: number;
    make: String;
    model: String;
    transmission: String;
    year: number;
}

export interface FilterProps {
    manufacturer : string;
    year: number;
    fuel : string;
    limit : number;
    model : string;
}

export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: String;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext : boolean
}
