import React from 'react'
import styled from 'styled-components'

import { Segment, Grid } from 'semantic-ui-react'

const FooterWrapper = styled.div``

class Footer extends React.Component {
	render () {
		return (
			<FooterWrapper>
				<Segment inverted vertical color='black' floated='right'>
					© 2018 1G
				</Segment>
			</FooterWrapper>
		)
	}
}

export default Footer
