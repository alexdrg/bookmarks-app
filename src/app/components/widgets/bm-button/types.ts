export const PrimaryBtnType = 'primary' as const;
export const DefaultBtnType = 'no-type' as const;

export const BmBtnChoices = [PrimaryBtnType, DefaultBtnType] as const;

export type BmBtnTypes = (typeof BmBtnChoices)[number];