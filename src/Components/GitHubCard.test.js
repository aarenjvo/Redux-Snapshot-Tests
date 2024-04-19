import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard'

test('renders a snapshot of GitHubCard', () => {
    const userData = {
        login: '',
        avatar_url: '',
        html_url: '',
        name: '',
        bio: '',
        twitter_username: ''
    }
    const tree = renderer.create(<GitHubCard userData={userData} />).toJSON()
    expect(tree).toMatchSnapshot()
})
