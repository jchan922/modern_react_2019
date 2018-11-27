import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    constructor (props) {
        
        super(props);
        this.state = {
            errorMessage: '',
            latitude: null,
            longitude: null
        }

    }

    componentDidMount () {

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            (err) => {
                this.setState({
                    errorMessage: err.message
                })
            }
        );

    }

    renderContent () {

        if (this.state.latitude && !this.state.errorMessage) {
            return ( 
                <SeasonDisplay
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                />
            )
        }

        if (!this.state.latitude && this.state.errorMessage) {
            return (   
                <div>Error: {this.state.errorMessage}</div>
            )
        }

        return <Spinner message="Please accept location request"  />

    }

    render () {

        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )

    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)