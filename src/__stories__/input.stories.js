import Input from 'components/Input'

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Input',
  type: 'text',
  name: 'input',
  value: 'test',
  placeholder: 'Please input text',
  error: 'This is error',
  disabled: false,
}

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
