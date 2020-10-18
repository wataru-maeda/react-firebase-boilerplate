/* eslint-disable camelcase */
import logo from 'assets/images/logo.svg'
import profile from 'assets/images/profile.png'

import aleo_bold from 'assets/fonts/Aleo-Bold.otf'
import aleo_italic from 'assets/fonts/Aleo-Italic.otf'
import aleo_regular from 'assets/fonts/Aleo-Regular.otf'

export const images = {
  logo,
  profile,
}

export const colors = {
  orange: '#e98562',
  yellow: '#efc568',
  blue: '#3b84f1',
  purple: '#7467d1',
  lightPurple: '#9388db',
  lightGrayPurple: '#f7f7fb',
  lightPurpleAlpha: 'rgba(147, 134, 219, .5)',
  blackPurple: '#231d54',
  warmRed: '#fecec6',
  gray: '#707070',
  darkGray: '#2e3a4d',
  lightGray: '#edeff1',
  lightLightGray: '#e3e7ea',
  pink_to_purple:
    'linear-gradient(to right, rgba(255, 18, 102, .8), rgba(121, 101, 216, .8))',
  purple_to_purple: 'linear-gradient(to right, #9388db, #8200ff)',
  pink_to_yellow: 'linear-gradient(to right, #ff3c68, #ffb600)',
}

export const fonts = {
  aleo: {
    normal: {
      uri: aleo_regular,
      name: 'Aleo_Regular',
    },
    italic: {
      uri: aleo_italic,
      name: 'Aleo_Italic',
    },
    bold: {
      uri: aleo_bold,
      name: 'Aleo-Bold',
    },
  },
}
