import { PrimaryBtnType } from "./types";

export function isPrimaryTypeBtn(value: string | unknown): value is typeof PrimaryBtnType {
    return value === PrimaryBtnType;
}