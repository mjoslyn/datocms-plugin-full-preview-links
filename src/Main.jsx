import React, { Component } from 'react'
import PropTypes from 'prop-types'

import connectToDatoCms from './connectToDatoCms'
import './style.sass'

const capitalizeFirstLetter = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

const checkEndOfUrl = url => {
  if (url === '') return url
  const trimedUrl = url.trim()
  return trimedUrl.charAt(trimedUrl.length - 1) === '/' ? trimedUrl : `${trimedUrl}/`
}

@connectToDatoCms(plugin => ({
  developmentMode: plugin.parameters.global.developmentMode,
  fieldValue: plugin.getFieldValue(plugin.fieldPath),
}))
export default class Main extends Component {
  static propTypes = {
    plugin: PropTypes.object.isRequired,
  }

  state = {
    slug: '',
    locale: '',
    urlPrefix: '',
    developUrlPrefix: '',
    modelAlias: '',
    modelName: '',
    isVisibleFullLink: false,
    isVisibleDevelopFullLink: false,
  }

  componentDidMount() {
    const { plugin } = this.props
    const slug = plugin.getFieldValue('slug')
    const {
      locale,
      parameters: {
        instance: { urlPrefix, developUrlPrefix, modelAlias },
      },
      itemType: {
        attributes: { api_key: modelName },
      },
    } = plugin
    this.unsubscribe = plugin.addFieldChangeListener('slug', value => {
      this.setState({ slug: value })
    })
    this.unsubscribeLocale = plugin.addChangeListener('locale', value => {
      this.setState({ locale: value })
    })
    this.setState({
      slug,
      locale,
      modelName,
      urlPrefix: checkEndOfUrl(urlPrefix),
      developUrlPrefix: checkEndOfUrl(developUrlPrefix),
      modelAlias: modelAlias.trim(),
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
    this.unsubscribeLocale()
  }

  handleClick = name => () => {
    const visible = name ? `isVisible${capitalizeFirstLetter(name)}FullLink` : 'isVisibleFullLink'

    this.setState(prevState => ({
      [visible]: !prevState[visible],
    }))
  }

  render() {
    const {
      slug,
      locale,
      urlPrefix,
      developUrlPrefix,
      modelAlias,
      modelName,
      isVisibleFullLink,
      isVisibleDevelopFullLink,
    } = this.state

    const fullLink = `${urlPrefix}${modelAlias || modelName}/${slug}`
    const fullDevelopLink = `${developUrlPrefix}${modelAlias || modelName}/${slug}`

    return (
      <div className="container">
        {urlPrefix && (
          <>
            <div className="link-wrap">
              <a href={fullLink} title={slug} target="_blank" rel="noopener noreferrer" className="preview-link">
                Link on prod
              </a>
              <button type="button" onClick={this.handleClick()}>
                {`${isVisibleFullLink ? 'Hide' : 'Show'} full link`}
              </button>
            </div>
            {isVisibleFullLink && <p className="full-link">{fullLink}</p>}
          </>
        )}

        {developUrlPrefix && (
          <>
            <div className="link-wrap">
              <a href={fullDevelopLink} title={slug} target="_blank" rel="noopener noreferrer" className="preview-link">
                Link on test server
              </a>
              <button type="button" onClick={this.handleClick('develop')}>
                {`${isVisibleDevelopFullLink ? 'Hide' : 'Show'} full link`}
              </button>
            </div>
            {isVisibleDevelopFullLink && <p className="full-link">{fullDevelopLink}</p>}
          </>
        )}
      </div>
    )
  }
}
