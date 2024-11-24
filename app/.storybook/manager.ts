import {addons} from '@storybook/manager-api';
import {theme} from './theme';

// @ts-ignore
addons.setConfig({
    navSize: 300,
    bottomPanelHeight: 300,
    rightPanelWidth: 300,
    panelPosition: 'bottom',
    enableShortcuts: true,
    showToolbar: true,
    theme: theme,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    sidebar: {
        showRoots: true,
        collapsedRoots: ['other'],
    },
    toolbar: {
        title: {hidden: false},
        zoom: {hidden: false},
        eject: {hidden: false},
        copy: {hidden: false},
        fullscreen: {hidden: false},
    },
});