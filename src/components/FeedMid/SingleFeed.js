import React from 'react';
import './SingleFeed.css';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function SingleFeed({ name, message, photo }) {

    const user = useSelector(selectUser);

    return (
        <div className="singlefeed">
            <div className="singlefeed_name">
                <Avatar src={photo} />
                <p>{name}</p>
            </div>
            <div className="singlefeed_desc">
                <p>{message}</p>
            </div>
            <div className="singlefeed_icons">
                <div className="like_icon">
                    <ThumbUpAltOutlinedIcon className="like_comment" />
                    <p>Like</p>
                </div>
                <div className="comment_icon">
                    <CommentOutlinedIcon className="like_comment" />
                    <p>Comment</p>
                </div>
                
            </div>
        </div>
    )
}

export default SingleFeed;
