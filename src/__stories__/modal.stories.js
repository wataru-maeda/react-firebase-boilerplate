import Modal from 'components/Modal'

const Template = (args) => <Modal {...args} />

export const sm = Template.bind({})
sm.args = {
  isOpen: true,
  children: <h4>Modal</h4>,
  centered: true,
  size: 'sm',
}

export const md = Template.bind({})
md.args = {
  isOpen: true,
  children: <h4>Modal</h4>,
  centered: true,
  size: 'md',
}

export const lg = Template.bind({})
lg.args = {
  isOpen: true,
  children: <h4>Modal</h4>,
  centered: true,
  size: 'lg',
}

export const responsive = Template.bind({})
responsive.args = {
  isOpen: true,
  children: <h4>Modal</h4>,
  centered: true,
  size: 'responsive',
}

export default {
  title: 'Components/Modal',
  component: Modal,
}
