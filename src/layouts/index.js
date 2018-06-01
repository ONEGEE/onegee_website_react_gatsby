import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import './global.css'

const Wrapper = styled.div`height: 100%;`

const Section = styled.div`
	margin: 0 auto;
	max-width: 1120px;
	padding: 0px 1.0875rem 1.45rem;
	padding-top: 0;
`

const Layout = ({ children, data }) => (
	<Wrapper>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[ { name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' } ]}
		/>
		<Header siteTitle={data.site.siteMetadata.title} />
		<Section>{children()}</Section>
		{/* <Footer /> */}
	</Wrapper>
)

Layout.propTypes = {
	children: PropTypes.func
}

export default Layout

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
