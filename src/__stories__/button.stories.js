import Button from '../components/Button'

const Template = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Button',
}

export const Black = Template.bind({})
Black.args = {
  label: 'Button',
  className: 'btn-black-fill',
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
