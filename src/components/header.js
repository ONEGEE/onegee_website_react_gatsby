import React from 'react'
import Link, { navigateTo } from 'gatsby-link'

import { Header as SegmentHeader, Segment, Menu, Grid } from 'semantic-ui-react'

class Header extends React.Component {
	state = {
		activeItem: 'home'
	}

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name })
		navigateTo(`/${name.toLowerCase()}/`)
	}
	render () {
		const { activeItem } = this.state

		return (
			<Segment inverted vertical color='black'>
				<Grid columns='equal'>
					<Grid.Row>
						<Grid.Column width={4}>
							<Segment inverted>
								<SegmentHeader as='h1' floated='left'>
									<Link to='/home/' style={{ color: '#fff' }}>
										1G
									</Link>
								</SegmentHeader>
							</Segment>
						</Grid.Column>
						<Grid.Column width={12}>
							<Segment inverted floated='right'>
								<Menu inverted pointing secondary>
									<Menu.Item
										name='INTRO'
										active={activeItem === 'INTRO'}
										onClick={this.handleItemClick}
									/>
									<Menu.Item
										name='BLOG'
										active={activeItem === 'BLOG'}
										onClick={this.handleItemClick}
									/>
									<Menu.Item
										name='DESIGN'
										active={activeItem === 'DESIGN'}
										onClick={this.handleItemClick}
									/>
									{/* <Menu.Item
										name='CODE'
										active={activeItem === 'CODE'}
										onClick={this.handleItemClick}
									/> */}
								</Menu>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		)
	}
}

{
	/* <div>
				<Segment inverted>
					<Menu inverted pointing secondary>
						<Menu.Item name='INTRO' active={activeItem === 'INTRO'} onClick={this.handleItemClick} />
						<Menu.Item name='BLOG' active={activeItem === 'BLOG'} onClick={this.handleItemClick} />
						<Menu.Item name='DESIGN' active={activeItem === 'DESIGN'} onClick={this.handleItemClick} />
						<Menu.Item name='CODE' active={activeItem === 'CODE'} onClick={this.handleItemClick} />
					</Menu>
				</Segment>
      </div> */
}

{
	/* const Header = ({ siteTitle }) => (
		<h1 style={{ margin: 0 }}>
				<Link
					to='/'
					style={{
						color: 'white',
						textDecoration: 'none'
					}}
				>
					{siteTitle}
				</Link>
			</h1>
      <ul
				style={{
					color: '#fff'
				}}
			>
				<li>INTRO</li>
				<li>BLOG</li>
				<li>DESIGN</li>
				<li>CODE</li>
			</ul> 
	</div>
)*/
}

export default Header
