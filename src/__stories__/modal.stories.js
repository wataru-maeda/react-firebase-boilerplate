import Modal from 'components/Modal'

const Template = (args) => <Modal {...args} />

export const Basic = Template.bind({})
Basic.args = {
  isOpen: true,
  children: <h4>Modal</h4>,
  centered: true,
  size: 'md',
}

export default {
  title: 'Components/Modal',
  component: Modal,
}
