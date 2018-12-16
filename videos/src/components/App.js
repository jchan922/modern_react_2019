import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from './../apis/youtube';

class App extends React.Component {

    state = {
        selectedVideo: null,
        videos: []
    }

    componentDidMount () {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async (term) => {

        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            selectedVideo: response.data.items[0],
            videos: response.data.items
        })
        
    }

    onVideoSelect = async (video) => {

        this.setState({ selectedVideo: video })

    }

    render () {

        return (
            <div className="ui container" style={{ marginTop: '15px' }}>

                <SearchBar onTermSubmit={this.onTermSubmit} />

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />   
                        </div>   
                    </div>
                </div>

            </div>
        );

    }

}

export default App;
