import Spinner from 'components/Spinner'

const Template = (args) => <Spinner {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'red',
  isLoading: true,
}

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'color' },
  },
}
