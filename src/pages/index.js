import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header/index'

const IndexPage = () => (
  <div>
    <Helmet
      title='Title of site'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header siteTitle='MetaData Demo' />
    <div class="">
      <a href="www.google.com">
        <h1>
          Hi there!
           </h1>
      </a>
    </div>
  </div>
)

export default IndexPage
