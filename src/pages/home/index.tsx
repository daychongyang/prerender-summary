import React, { SFC, useState, Fragment, MouseEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {}

const Home: SFC<Props> = () => {
	const [list, setList] = useState([])

	return (
		<Fragment>
			{list.length ? list.map(it => <p key={it.id}>{it.name}</p>) : '暂无数据!'}
		</Fragment>
	)
}

export default Home
