import React, { PropTypes } from 'react';
import {
  Button,
  Image,
  Text,
  CloseIcon,
  EditIcon,
  LinkIcon,
  ImageIcon,
  RetweetIcon,
} from '@bufferapp/components';
import style from './style.css';

/* eslint-disable react/prop-types */

const renderConfirmDelete = ({
  onCancelConfirmClick,
}) =>
  <span className={style['post-cancel-delete']}>
    <Button onClick={onCancelConfirmClick} noStyle>
      <Text size={'small'}>Cancel</Text>
    </Button>
  </span>;


const renderDeleteButton = ({
  isConfirmingDelete,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span className={style['post-button-last']}>
    <Button onClick={isConfirmingDelete ? onDeleteConfirmClick : onDeleteClick} noStyle>
      <span className={style['post-icon']}>
        <CloseIcon color={isConfirmingDelete ? 'torchRed' : undefined} size={'small'} />
      </span>
      <Text size={'small'} color={isConfirmingDelete ? 'torchRed' : undefined}>
        {isConfirmingDelete ? 'Confirm' : 'Delete Post'}
      </Text>
    </Button>
  </span>;

const renderDelete = ({
  isConfirmingDelete,
  onCancelConfirmClick,
  onDeleteConfirmClick,
  onDeleteClick,
}) =>
  <span>
    {renderDeleteButton({
      isConfirmingDelete,
      onDeleteConfirmClick,
      onDeleteClick,
    })}
    {isConfirmingDelete ?
      renderConfirmDelete({ onCancelConfirmClick }) :
      undefined
    }
  </span>;

const renderEdit = ({ onEditClick }) =>
  <span className={style['post-button']}>
    <Button onClick={onEditClick} noStyle>
      <span className={style['post-icon']}>
        <EditIcon size={'small'} />
      </span>
      <Text size={'small'}>Edit Post</Text>
    </Button>
  </span>;

const renderControls = ({
  isDeleting,
  isConfirmingDelete,
  onCancelConfirmClick,
  onDeleteClick,
  onEditClick,
  onDeleteConfirmClick,
}) => {
  if (isDeleting) {
    return (
      <Text size={'small'}> Deleting... </Text>
    );
  }
  return (
    <div>
      {renderEdit({
        onEditClick,
      })}
      {renderDelete({
        isConfirmingDelete,
        onCancelConfirmClick,
        onDeleteConfirmClick,
        onDeleteClick,
      })}
    </div>
  );
};

/* eslint-enable react/prop-types */

const PostDetails = ({
  isDeleting,
  isConfirmingDelete,
  isWorking,
  manager,
  onApproveClick,
  onCancelConfirmClick,
  onDeleteClick,
  onDeleteConfirmClick,
  onEditClick,
  profile,
  postType,
}) =>
  <div className={style['post-details']}>
    <div className={style['post-author']}>
      <span className={style['post-details-author-image']}>
        <Image
          alt={profile.name}
          src={profile.avatarUrl}
          width={'1.25rem'}
          border={'circle'}
        />
      </span>
      <span className={style['post-details-author-email']}>
        <Text size={'small'}>{profile.email}</Text>
      </span>
      <span className={style['post-source']}>
        <Text size={'small'}>- via web</Text>
      </span>
    </div>
    <div className={style['post-controls']}>
      {renderControls({
        isDeleting,
        isConfirmingDelete,
        manager,
        onApproveClick,
        onCancelConfirmClick,
        onDeleteClick,
        onEditClick,
        onDeleteConfirmClick,
      })}
    </div>
  </div>;

PostDetails.propTypes = {
  isDeleting: PropTypes.bool,
  isConfirmingDelete: PropTypes.bool,
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
  postType: PropTypes.oneOf(['image', 'link', 'retweet']).isRequired,
};

PostDetails.defaultProps = {
  isDeleting: false,
  isConfirmingDelete: false,
  isWorking: false,
};

export default PostDetails;
