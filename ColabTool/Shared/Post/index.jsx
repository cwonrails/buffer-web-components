import React, { PropTypes } from 'react';
import {
  Card,
} from '@bufferapp/components';
import style from './style.css';
import PostDetails from '../PostDetails';
import RetweetPanel from '../RetweetPanel';

const renderRetweetPanel = (retweetProfile) => {
  if (retweetProfile) {
    return (
      <div className={style['retweet-profile-wrapper']}>
        <RetweetPanel {...retweetProfile} />
      </div>
    );
  }
};

const Post = ({
  children,
  isConfirmingDelete,
  isDeleting,
  isWorking,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  profile,
  retweetProfile,
}) =>
  <div className={style['post-container']}>
    <div className={style.post}>
      <Card
        faded={isDeleting}
        noPadding
      >
        <div className={style['post-content']}>
          {renderRetweetPanel(retweetProfile)}
          {children}
        </div>
        <PostDetails
          isDeleting={isDeleting}
          isConfirmingDelete={isConfirmingDelete}
          isWorking={isWorking}
          manager={manager}
          onApproveClick={onApproveClick}
          onCancelConfirmClick={onCancelConfirmClick}
          onDeleteClick={onDeleteClick}
          onDeleteConfirmClick={onDeleteConfirmClick}
          onEditClick={onEditClick}
          profile={profile}
        />
      </Card>
    </div>
  </div>;

Post.commonPropTypes = {
  isConfirmingDelete: PropTypes.bool,
  isDeleting: PropTypes.bool,
  isWorking: PropTypes.bool,
  manager: PropTypes.bool,
  onApproveClick: PropTypes.func.isRequired,
  onCancelConfirmClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onDeleteConfirmClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  retweetProfile: PropTypes.shape({
    name: PropTypes.string,
    handle: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};

Post.propTypes = {
  ...Post.commonPropTypes,
  children: PropTypes.node.isRequired,
};

Post.defaultProps = {
  isConfirmingDelete: false,
  isDeleting: false,
  isWorking: false,
  manager: false,
};

export default Post;
