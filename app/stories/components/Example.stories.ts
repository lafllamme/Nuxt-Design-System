import type { Meta, StoryObj } from '@storybook/vue3'

import Example from './Example.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Introduction/Example',
  component: Example,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const IntroductionStory: Story = {
  args: {},
}
