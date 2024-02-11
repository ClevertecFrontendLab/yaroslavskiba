import { ReactNode } from 'react';

export interface ButtonStateProps {
    func: () => void;
    name?: string;
    icon?: ReactNode;
    styles?: any;
}

export interface ButtonStatePropsWithSvg extends ButtonStateProps {
    svg?: boolean;
    mobile?: boolean;
}
