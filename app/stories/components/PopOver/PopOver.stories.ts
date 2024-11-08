import type {Meta, StoryObj} from '@storybook/vue3'

import PopOver from './PopOver.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
    title: 'Components/PopOver',
    component: PopOver,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],

} satisfies Meta<typeof PopOver>

export default meta
type Story = StoryObj<typeof meta>

export const NuxtWelcomeStory: Story = {
    args: {},
}
