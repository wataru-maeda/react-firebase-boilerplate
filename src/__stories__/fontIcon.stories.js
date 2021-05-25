import FontIcon, { loadFontIcons } from 'components/FontIcon'

loadFontIcons() // load font icons

const Template = (args) => <FontIcon {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'exclamation-triangle',
  style: {
    fontSize: 40,
    color: 'red',
  },
}

export default {
  title: 'Components/FontIcon',
  component: FontIcon,
}
