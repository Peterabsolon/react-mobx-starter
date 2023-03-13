import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Link } from './Link'

export default {
  title: 'components/ui/Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Go to internal page',
  href: '/',
}

export const External = Template.bind({})
External.args = {
  children: 'Go to www.google.com',
  external: true,
  href: 'https://www.google.com',
}

export const ExternalTarget = Template.bind({})
ExternalTarget.args = {
  children: 'Go to www.google.com',
  external: true,
  target: '_self',
  href: 'https://www.google.com',
}
