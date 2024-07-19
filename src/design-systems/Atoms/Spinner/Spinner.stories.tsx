import { Meta, StoryObj } from '@storybook/react'

import Spinner from '.'

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const DefaultSpinner: Story = {
  args: {
    className: 'w-8 h-8 stroke-neutral-100 dark:stroke-neutral-800',
  },
}
