export type NewsCardTagType = {
  id: string;
  color: 'red' | 'yellow' | 'orange';
  name: string;
  tag_group: string;
};

export type NewsCardDataType = {
  id: string;
  date: string;
  tagList: NewsCardTagType[];
  newsTitle: string;
  mainText: string;
};
