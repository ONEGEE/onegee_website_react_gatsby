import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const DesignPage = () => (
	<Card.Group>
		{[ 0, 1, 2, 3 ].map((item, index) => {
			return (
				<Card key={index}>
					<Image src='https://ws3.sinaimg.cn/large/006tKfTcgy1fq4bznynlkj303h03hdgi.jpg' />
					<Card.Content>
						<Card.Header>Matthew</Card.Header>
						<Card.Meta>
							<span className='date'>Joined in 2015</span>
						</Card.Meta>
						<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
					</Card.Content>
				</Card>
			)
		})}
	</Card.Group>
)

export default DesignPage
