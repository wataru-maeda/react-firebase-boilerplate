import Button from 'components/Button'

const Template = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Button',
}

export const BlackFill = Template.bind({})
BlackFill.args = {
  label: 'Button',
  className: 'btn-black-fill',
}

export const PinkFill = Template.bind({})
PinkFill.args = {
  label: 'Button',
  className: 'btn-pink-fill',
}

export const BlackOutline = Template.bind({})
BlackOutline.args = {
  label: 'Button',
  className: 'btn-black-outline',
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
