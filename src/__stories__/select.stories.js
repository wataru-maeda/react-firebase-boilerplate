import Select from 'components/Select'

const Template = (args) => <Select {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'STATUS',
  name: 'status',
  value: null,
  options: [{ label: 'test', value: 'test' }],
}

export default {
  title: 'Components/Select',
  component: Select,
}
