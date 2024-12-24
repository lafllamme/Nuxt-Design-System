import type { Meta, StoryObj } from '@storybook/vue3'
import { allPalettes, defaults } from './ColorPalette.model'
import ColorPalette from './ColorPalette.vue'

const meta: Meta<typeof ColorPalette> = {
  title: 'Palettes/ColorPalette',
  component: ColorPalette,
  tags: ['autodocs'],
  argTypes: {
    palette: {
      control: {
        type: 'select',
        options: allPalettes,
      },
      description: 'Choose a color palette',
    },
  },

} satisfies Meta<typeof ColorPalette>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    palette: defaults.palette,
  },
}

export const mauve: Story = {
  args: {
    palette: 'mauve',
  },
}

export const red: Story = {
  args: {
    palette: 'red',
  },
}
