import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps }  from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading.',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
    argTypes: {
        asChild:{
            table: {
                disable: true
            }
        }
    }
}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    },
    argTypes: {
        asChild:{
            table: {
                disable: true
            }
        }
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    },
    argTypes: {
        asChild:{
            table: {
                disable: true
            }
        }
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with h1</h1>
        ),
        size: 'lg'
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}
