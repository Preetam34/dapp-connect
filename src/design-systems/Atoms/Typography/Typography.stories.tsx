import { Meta, StoryObj } from '@storybook/react'

import Typography from '.'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['condensed', 'regular'],
      defaultValue: 'condensed',
    },
    size: {
      options: ['h1', 'h2', 'h3', 'h4', 'subtitle', 'paragraph', 'body', 'caption', 'small', 'sm', 'md', 'lg'],
      defaultValue: 'body',
    },
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const H1: Story = {
  args: {
    variant: 'condensed',
    size: 'h1',
    children: 'Test h1',
  },
}

export const H2: Story = {
  args: {
    variant: 'condensed',
    size: 'h2',
    children: 'Test h2',
  },
}

export const H3: Story = {
  args: {
    variant: 'condensed',
    size: 'h3',
    children: 'Test h3',
  },
}

export const H4: Story = {
  args: {
    variant: 'condensed',
    size: 'h4',
    children: 'Test h4',
  },
}

export const Subtitle: Story = {
  args: {
    variant: 'condensed',
    size: 'subtitle',
    children: 'Test subtitle',
  },
}

export const Paragraph: Story = {
  args: {
    variant: 'condensed',
    size: 'paragraph',
    children: 'Test paragraph',
  },
}

export const Body: Story = {
  args: {
    variant: 'condensed',
    size: 'body',
    children: 'Test body',
  },
}

export const Caption: Story = {
  args: {
    variant: 'condensed',
    size: 'caption',
    children: 'Test body',
  },
}

export const Small: Story = {
  args: {
    variant: 'condensed',
    size: 'small',
    children: 'Test body',
  },
}

export const RegularSmall: Story = {
  args: {
    variant: 'regular',
    size: 'sm',
    children: 'Test body',
  },
}

export const RegularMedium: Story = {
  args: {
    variant: 'regular',
    size: 'md',
    children: 'Test body',
  },
}

export const RegularLarge: Story = {
  args: {
    variant: 'regular',
    size: 'lg',
    children: 'Test body',
  },
}

export const ResponsiveText: Story = {
  args: {
    variant: undefined,
    size: undefined,
    className: 'lg:typography-h1 md:typography-paragraph typography-sm',
  },
}
