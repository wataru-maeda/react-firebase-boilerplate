import Input from 'components/Input'

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Input',
}

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
