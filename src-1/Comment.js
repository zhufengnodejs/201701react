import React from 'react';
function formatDate(date){
    return date.toLocaleString();
}
function Avatar(props){
    return (
        <img className="Avatar"
             src={props.avatarUrl}
             alt={props.name}
        />
    )
}
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar {...props}/>
            <div className="UserInfo-name">
                {props.name}
            </div>
        </div>
    )
}
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo {...props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;