import ErrorBox from 'components/ErrorBox'
import { loadFontIcons } from 'components/FontIcon'

loadFontIcons() // load font icons

const Template = (args) => <ErrorBox {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: <p>Error!</p>,
}

export default {
  title: 'Components/ErrorBox',
  component: ErrorBox,
}
