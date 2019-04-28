import Loadable from 'react-loadable'

export default callback => {
	return Loadable({
		loader: () => callback(),
		loading: props => {
			if (props.error) {
				console.error(props.error)
			}
			return '正在加载中...'
		}
	})
}
