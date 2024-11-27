import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '~/stories/Layouts/DefaultLayout.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Layouts/DefaultLayout',
  component: DefaultLayout,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof DefaultLayout>

export default meta
type Story = StoryObj<typeof meta>

export const BlogLayoutStory: Story = {
  args: {},
}
