import Input from 'components/Input'

const Template = (args) => <Input {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Input',
  type: 'text',
  name: 'input',
  placeholder: 'Please input text',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Input',
  type: 'text',
  name: 'input',
  value: 'test',
  placeholder: 'Please input text',
  error: 'Invalid text input',
  disabled: false,
}

export default {
  title: 'Components/Input',
  component: Input,
}
