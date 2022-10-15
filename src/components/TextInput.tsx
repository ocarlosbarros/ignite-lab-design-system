import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps ){
    return (
        <div className="flex items-center gap-3 h-12 px-3 py-4 w-full rounded bg-gray-800 focus-within:ring ring-cyan-300">
        { children }
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}

TextInputRoot.displayName = 'TextInput.Root';


function TextInputIcon({ children }: TextInputIconProps ){
    return (
        <Slot className="w-6 h-6 text-gray-400">
            { children  }
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';



export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps ){
    return (
        <input className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
        { ...props }
        />
        
    )
}

TextInputInput.displayName = 'TextInput.Input';


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,

}