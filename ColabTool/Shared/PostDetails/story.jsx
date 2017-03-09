import React from 'react';
import {
  storiesOf,
  action,
} from '@kadira/storybook';
import { linkTo } from '@kadira/storybook-addon-links';
import PostDetails from './index';

const profile = {
  name: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
};

storiesOf('PostDetails')
  .add('default', () => (
    <PostDetails
      onCancelConfirmClick={linkTo('PostDetails', 'default')}
      onDeleteClick={linkTo('PostDetails', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onEditClick={action('edit-click')}
      profile={profile}
    />
  ))
  .add('manager', () => (
    <PostDetails
      manager
      onApproveClick={linkTo('PostDetails', 'managerIsApproving')}
      onCancelConfirmClick={linkTo('PostDetails', 'manager')}
      onDeleteClick={linkTo('PostDetails', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      profile={profile}
    />
  ))
  .add('isConfirmingDelete', () => (
    <PostDetails
      onDeleteClick={linkTo('PostDetails', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'default')}
      onEditClick={action('edit-click')}
      profile={profile}
      isConfirmingDelete
    />
  ))
  .add('managerIsConfirmingDelete', () => (
    <PostDetails
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostDetails', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'manager')}
      onEditClick={action('edit-click')}
      profile={profile}
      isConfirmingDelete
    />
  ))
  .add('isDeleting', () => (
    <PostDetails
      onDeleteClick={linkTo('PostDetails', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'default')}
      onEditClick={action('edit-click')}
      profile={profile}
      isDeleting
    />
  ))
  .add('managerIsDeleting', () => (
    <PostDetails
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostDetails', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'manager')}
      onEditClick={action('edit-click')}
      profile={profile}
      isDeleting
    />
  ))
  .add('managerIsApproving', () => (
    <PostDetails
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('PostDetails', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('PostDetails', 'isDeleting')}
      onCancelConfirmClick={linkTo('PostDetails', 'manager')}
      onEditClick={action('edit-click')}
      profile={profile}
      isWorking
    />
  ));
