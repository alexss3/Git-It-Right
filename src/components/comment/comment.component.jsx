import React from 'react';
import Card from 'react-bootstrap/Card';
import { returnMDY } from '../../utils/utils';

import { CommentContainer } from './comment.styles';

const Comment = ({ comment }) => {

    const commentDate = returnMDY(new Date(Date.parse(comment.publishedAt)));

    // going against React best practice here and displaying
    // the bodyHTML using dangerouslySetInnerHTML
    // relying on Github's comment system to remove any potentially
    // harmful HTML code

    return (
        <CommentContainer>
            <div className="timeline-item">
                <Card>
                    <Card.Header>
                        <img 
                            src={comment.author.avatarUrl} 
                            className="avatar" 
                            alt={comment.author.login}
                        />
                        {comment.author.login} commented on {commentDate}
                    </Card.Header>
                    <Card.Body>
                        <div dangerouslySetInnerHTML={{__html: comment.body}}></div>
                    </Card.Body>
                </Card>
            </div>
        </CommentContainer>
    )
};

export default Comment;