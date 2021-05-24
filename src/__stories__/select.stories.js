import Select from 'components/Select'

const Template = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'STATUS',
  name: 'status',
  value: null,
  options: [{ label: 'test', value: 'test' }],
}

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
