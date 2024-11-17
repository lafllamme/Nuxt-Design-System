import type {Meta, StoryObj} from '@storybook/vue3';
import Button from './Button.vue';
import type {ButtonProps} from './Button.model';
import {buttonDefaults} from './Button.model';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Text displayed on the button',
            defaultValue: buttonDefaults.label,
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: '"Click Me"'},
            },
        },
        type: { // Changed from 'color' to 'type'
            control: {
                type: 'select',
                options: [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                ],
            },
            description: 'Type theme of the button',
            defaultValue: buttonDefaults.type,
            table: {
                type: {summary: 'ButtonType'},
                defaultValue: {summary: '"primary"'},
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
            description: 'Size of the button',
            defaultValue: buttonDefaults.size,
            table: {
                type: {summary: 'ButtonSize'},
                defaultValue: {summary: '"medium"'},
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the button',
            defaultValue: buttonDefaults.disabled,
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Define stories directly without using Template.bind()

export const Default: Story = {
    args: {
        ...buttonDefaults,
    },
};

export const Primary: Story = {
    args: {
        ...buttonDefaults,
        label: 'Primary Button',
        type: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        ...buttonDefaults,
        label: 'Secondary Button',
        type: 'secondary',
    },
};

export const Success: Story = {
    args: {
        ...buttonDefaults,
        label: 'Success Button',
        type: 'success',
    },
};

export const Danger: Story = {
    args: {
        ...buttonDefaults,
        label: 'Danger Button',
        type: 'danger',
    },
};

export const Warning: Story = {
    args: {
        ...buttonDefaults,
        label: 'Warning Button',
        type: 'warning',
    },
};

export const Info: Story = {
    args: {
        ...buttonDefaults,
        label: 'Info Button',
        type: 'info',
    },
};

export const Light: Story = {
    args: {
        ...buttonDefaults,
        label: 'Light Button',
        type: 'light',
    },
};

export const Dark: Story = {
    args: {
        ...buttonDefaults,
        label: 'Dark Button',
        type: 'dark',
    },
};

export const Small: Story = {
    args: {
        ...buttonDefaults,
        label: 'Small Button',
        size: 'small',
    },
};

export const Medium: Story = {
    args: {
        ...buttonDefaults,
        label: 'Medium Button',
        size: 'medium',
    },
};

export const Large: Story = {
    args: {
        ...buttonDefaults,
        label: 'Large Button',
        size: 'large',
    },
};

export const Disabled: Story = {
    args: {
        ...buttonDefaults,
        label: 'Disabled Button',
        disabled: true,
    },
};
