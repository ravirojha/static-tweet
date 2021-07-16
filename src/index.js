import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Tweet = () => {
  return (
    <div className='tweet'>
      <Avatar />
      <div className='content'>
        <NameWithHandle />
        <Time />
        <Message />
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <img
      src='https://www.gravatar.com/avatar/34f6c7877cfa31804b4d33948d5feb79'
      className='avatar'
      alt='avatar'
    />
  );
};

const Message = () => {
  return <div className='message'>This is my first Tweet.</div>;
};

const NameWithHandle = () => {
  return (
    <span className='name-with-handle'>
      <span className='name'>Ravi Ranjan Ojha</span>
      <span className='handle'>@isrro</span>
    </span>
  );
};

const Time = () => <span className='time'>3h ago</span>;

const ReplyButton = () => <i className='fa fa-reply reply-button' />;

const RetweetButton = () => <i className='fa fa-retweet retweet-button' />;

const LikeButton = () => <i className='fa fa-heart like-button' />;

const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button' />
);

ReactDOM.render(<Tweet />, document.querySelector('#root'));
