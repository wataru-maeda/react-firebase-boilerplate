import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEO = ({ title, description, lang, meta, keywords }) => (
  <Helmet
    htmlAttributes={{ lang }}
    title={title}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ]
      .concat(
        keywords.length > 0
          ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
          : [],
      )
      .concat(meta)}
  />
)

SEO.defaultProps = {
  lang: 'en',
  description: '',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default SEO
