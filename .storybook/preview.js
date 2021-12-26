import '!style-loader!css-loader!sass-loader!../src/theme/reset.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
