import Spinner from 'components/Spinner'

const Template = (args) => <Spinner {...args} />

export const Basic = Template.bind({})
Basic.args = {
  color: 'pink',
  isLoading: true,
}

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'color' },
  },
}
