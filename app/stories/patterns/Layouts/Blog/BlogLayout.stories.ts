import type {Meta, StoryObj} from '@storybook/vue3'

import BlogLayout from './BlogLayout.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
    title: 'Layouts/BlogLayout',
    component: BlogLayout,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],

} satisfies Meta<typeof BlogLayout>

export default meta
type Story = StoryObj<typeof meta>

export const NuxtWelcomeStory: Story = {
    args: {},
}
