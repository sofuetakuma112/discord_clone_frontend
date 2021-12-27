export type Chat = {
  _id: string;
  name: string;
  message: string;
  created: Date;
  parentId: string;
  parent_id?: string;
};

export type Channel = {
  name: string;
  _id: string;
  categoryId: string;
  connectingUserIds: string[];
  type: string;
};

export type BackgroundStyle = {
  background: string;
};

export type Category = {
  _id: string;
  name: string;
};

export type User = {
  _id: string;
  name: string;
  isAnonumous: string;
  socketId?: string;
  email?: string;
  password?: string;
  imageConvertedToBase64?: string;
};

export type Device = {
  text: string;
  value: string;
};
