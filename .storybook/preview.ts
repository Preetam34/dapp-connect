import type { Preview } from '@storybook/react'
import '../src/assets/css/main.css'
import 'tw-elements'

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
