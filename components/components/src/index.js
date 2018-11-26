import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam" 
                    timeAgo="Today at 4:45PM"
                    avatar={Faker.image.avatar()}
                    content="Nice blog post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    avatar={Faker.image.avatar()}
                    content="I like the content!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 5:00PM"
                    avatar={Faker.image.avatar()}
                    content="Amazing!"
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));