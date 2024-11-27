import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // sidebarNavigation: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  sidebarNavigation: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/intro',
        'getting-started/local_development',
      ],
    },
    {
      type: 'category',
      label: 'Interactions',
      items: [
        'interactions/overview',
        'interactions/send',
        'interactions/balance',
        'interactions/publicLeaderboard',
        'interactions/help',
        'interactions/generate',
        'interactions/leaderboard',
      ],
    },
    {
      type: 'category',
      label: 'Open Source Contribution',
      items: [
        'open-source-contribution/intro',
      ],
    },
  ],
};

export default sidebars;