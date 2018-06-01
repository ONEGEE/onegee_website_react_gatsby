import React from 'react'
import Link from 'gatsby-link'
import { Image, Item } from 'semantic-ui-react'
import styled from 'styled-components'

const BlogWrapper = styled.div`color: #fff;`

const BlogPage = () => (
	<BlogWrapper>
		<Item.Group>
			{[ 0, 1, 2, 3, 4, 5, 6, 7 ].map((item, index) => {
				return (
					<Item key={index}>
						<Item.Content>
							<Item.Header as='a'>Header</Item.Header>
							<Item.Meta>
								Many people also have their own barometers for what makes a cute dog.Many people also
								have their own barometers for what makes a cute dog.Many people also have their own
								barometers for what makes a cute dog.Many people also have their own barometers for what
								makes a cute dog.
							</Item.Meta>
							<Item.Extra>Additional Details</Item.Extra>
						</Item.Content>
					</Item>
				)
			})}

			{/* <Item>
				<Item.Content>
					<Item.Header as='a'>Header</Item.Header>
					<Item.Meta>Many people also have their own barometers for what makes a cute dog.</Item.Meta>
					<Item.Extra>Additional Details</Item.Extra>
				</Item.Content>
			</Item> */}
		</Item.Group>
	</BlogWrapper>
)

export default BlogPage
