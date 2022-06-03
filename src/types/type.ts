export type NewsCardTagType = {
  id: string;
  color: 'red' | 'yellow' | 'orange' | 'mediumpurple';
  name: string;
  tag_group: string;
};

export type NewsCardDataType = {
  id: string;
  announced_at: string;
  tags: NewsCardTagType[];
  title: string;
  detail: string;
};
