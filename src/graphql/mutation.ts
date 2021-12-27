import { gql } from 'apollo-boost';

export const sendMessageMutation = gql`
  mutation addChat(
    $name: String!
    $message: String!
    $imageData: String!
    $imageTitle: String!
    $parentId: ID!
    $userId: ID!
    $isOpeningChannelChatNow: Boolean!
  ) {
    addChat(
      name: $name
      message: $message
      imageData: $imageData
      imageTitle: $imageTitle
      parent_id: $parentId
      user_id: $userId
      isOpeningChannelChatNow: $isOpeningChannelChatNow
    ) {
      _id
      name
      message
      imageData
      imageTitle
      created
      parent_id
      user_id
    }
  }
`;

export const createNewChannel = gql`
  mutation createChannel($name: String!, $categoryId: ID!, $type: String!) {
    createChannel(name: $name, category_id: $categoryId, type: $type) {
      _id
      name
      category_id
      type
    }
  }
`;

export const updateChannel = gql`
  mutation updateChannel(
    $name: String!
    $type: String!
    $channelId: ID!
    $userId: ID!
  ) {
    updateChannel(
      name: $name
      channel_id: $channelId
      type: $type
      user_id: $userId
    ) {
      _id
      name
      category_id
      type
      connectingUserIds
    }
  }
`;

export const deleteUserFromVoiceChannel = gql`
  mutation deleteUserFromVoiceChannel(
    $channelId: ID!
    $userId: ID!
  ) {
    deleteUserFromVoiceChannel(
      channel_id: $channelId
      user_id: $userId
    ) {
      _id
      name
      category_id
      type
      connectingUserIds
    }
  }
`;

export const createNewCategory = gql`
  mutation createCategory($name: String!) {
    createCategory(name: $name) {
      _id
      name
    }
  }
`;

export const startDm = gql`
  mutation startDm(
    $userIds: [ID]!
    $fromUserId: ID!
    $toUserId: ID!
    $name: String!
    $message: String!
    $imageData: String!
    $imageTitle: String!
  ) {
    startDm(
      userIds: $userIds
      from_user_id: $fromUserId
      to_user_id: $toUserId
      name: $name
      message: $message
      imageData: $imageData
      imageTitle: $imageTitle
    ) {
      _id
      userIds
    }
  }
`;

export const createNewUser = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
    $imageConvertedToBase64: String!
    $isAnonymous: Boolean!
    $socketId: String!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      imageConvertedToBase64: $imageConvertedToBase64
      is_anonymous: $isAnonymous
      socket_id: $socketId
    ) {
      _id
      name
      email
      imageConvertedToBase64
      socket_id
      is_anonymous
      status
      tokenAndHash
      errorMessage
    }
  }
`;

export const authenticateUser = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      _id
      name
      email
      imageConvertedToBase64
      is_anonymous
      status
      tokenAndHash
      errorMessage
    }
  }
`;

export const editChat = gql`
  mutation editChat($id: ID!, $message: String!) {
    editChat(_id: $id, message: $message) {
      _id
      message
    }
  }
`;

export const deleteChat = gql`
  mutation deleteChat($id: ID!) {
    deleteChat(_id: $id) {
      _id
      message
    }
  }
`;
