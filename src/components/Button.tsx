import { ReactNode } from 'react';

import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean; 
}
export function Button({ children, asChild }: ButtonProps){
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={clsx(
            'px-3 py-4 bg-cyan-300 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-500 focus:ring-2 ring-white', 
        )}
        >
        { children }
        </Comp>
    )
}