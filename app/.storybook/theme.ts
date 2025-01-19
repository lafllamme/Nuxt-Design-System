import { create } from '@storybook/theming/create'

export const theme = create({
  base: 'light',
  // Typography
  fontBase: '"Inter", sans-serif', // Matches $font-body from Sass
  fontCode: '"Fira Code", monospace',

  brandTitle: 'Plant.me Design System',
  brandUrl: '#',
  brandImage: 'https://i.imgur.com/75FqnJs.png',
  brandTarget: '#',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#6e6666',

  // UI
  appBg: '#FEFDFC',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#BBBBBB',
  appBorderRadius: 4,

  // Text colors
  textColor: '#1D3B31',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#646464',
  barHoverColor: '#646464',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#1D3B31',
  inputTextColor: '#1D3B31',
  inputBorderRadius: 2,
})
