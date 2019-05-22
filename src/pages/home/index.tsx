import React, {
	SFC,
	useState,
	Fragment,
	useEffect,
	Dispatch,
	SetStateAction
} from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Global from 'assets/global.png'

interface Props extends RouteComponentProps {}

const Wrapper = styled.div`
	padding: 40px;
`

const NewsHeader = styled.h2`
	display: flex;
	align-items: center;
	color: #333;
`

const NewsLogo = styled.img`
	width: 60px;
	height: 60px;
	margin-right: 6px;
`

const NewsWrapper = styled.ul`
	list-style: none;
	padding-left: 0;
`

const News = styled.li`
	padding: 16px;
	border: 1px solid #ddd;
	margin-bottom: 16px;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
`
const NewsInfo = styled.div``

const NewsTitle = styled.div``

const NewsSubInfo = styled.p`
	color: #999;
	font-size: 12px;
`

const NewsThumbnail = styled.img`
	width: 200px;
	height: 100px;
`

const NoData = styled.div`
	padding: 16px;
	letter-spacing: 2px;
	color: #999;
`

async function getNewsList<T>(setNewsList: Dispatch<SetStateAction<T>>) {
	let instance = axios.create({
		baseURL: 'http://localhost:3001',
		timeout: 5000
	})
	const { data } = await instance.get('/')

	setNewsList(data)
}

const Home: SFC<Props> = () => {
	const [newsList, setNewsList] = useState([])

	useEffect(() => {
		getNewsList<typeof newsList>(setNewsList)
	}, [])

	return (
		<Fragment>
			<Wrapper>
				<NewsHeader>
					<NewsLogo src={Global} alt="全球资讯" />
					全球资讯
				</NewsHeader>
				{newsList.length ? (
					<NewsWrapper>
						{newsList.map(it => (
							<News key={it.id}>
								<NewsInfo>
									<NewsTitle>{it.title} </NewsTitle>
									<NewsSubInfo>
										{it.source} - {it.createTime}
									</NewsSubInfo>
								</NewsInfo>
								<NewsThumbnail src={it.thumbnail} />
							</News>
						))}
					</NewsWrapper>
				) : (
					<NoData>暂无数据!</NoData>
				)}
			</Wrapper>
		</Fragment>
	)
}

export default Home
