import Modal from 'components/Modal'

const Template = (args) => <Modal {...args} />

export const Basic = Template.bind({})
Basic.args = {
  isOpen: true,
  children: <h2>Modal</h2>,
  centered: true,
  size: 'md',
}

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
