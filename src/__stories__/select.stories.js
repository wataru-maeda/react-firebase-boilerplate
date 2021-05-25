import Select from 'components/Select'

const Template = (args) => <Select {...args} />

export const Single = Template.bind({})
Single.args = {
  label: 'STATUS',
  name: 'status',
  placeholder: 'placeholder',
  value: { label: 'test', value: 'test' },
  options: [
    { label: 'test', value: 'test' },
    { label: 'test2', value: 'test2' },
  ],
}

export const Multi = Template.bind({})
Multi.args = {
  label: 'STATUS',
  name: 'status',
  placeholder: 'placeholder',
  value: [{ label: 'test', value: 'test' }],
  options: [
    { label: 'test', value: 'test' },
    { label: 'test2', value: 'test2' },
  ],
  isMulti: true,
}

export const Creatable = Template.bind({})
Creatable.args = {
  label: 'STATUS',
  name: 'status',
  placeholder: 'placeholder',
  value: [{ label: 'test', value: 'test' }],
  options: [
    { label: 'test', value: 'test' },
    { label: 'test2', value: 'test2' },
  ],
  isMulti: true,
  isCreatable: true,
}

export default {
  title: 'Components/Select',
  component: Select,
}
