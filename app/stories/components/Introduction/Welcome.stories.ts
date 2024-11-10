import type { Meta, StoryObj } from '@storybook/vue3'

import Welcome from './Welcome.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Introduction/Welcome',
  component: Welcome,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof Welcome>

export default meta
type Story = StoryObj<typeof meta>

export const IntroductionStory: Story = {
  args: {},
}
