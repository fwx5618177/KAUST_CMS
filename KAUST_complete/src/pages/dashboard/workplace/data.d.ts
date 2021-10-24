import { DataItem } from '@antv/g2plot/esm/interface/config';

export { DataItem };

export interface TagType {
  key: string;
  label: string;
}

export type SearchDataType = {
  index: number;
  keyword: string;
  count: number;
  range: number;
  status: number;
};

export type OfflineDataType = {
  name: string;
  cvr: number;
};

export interface RadarData {
  name: string;
  label: string;
  value: number;
}

export type AnalysisData = {
  visitData: VisitDataType[];
  visitData2: VisitDataType[];
  salesData: VisitDataType[];
  searchData: SearchDataType[];
  offlineData: OfflineDataType[];
  offlineChartData: OfflineChartData[];
  salesTypeData: VisitDataType[];
  salesTypeDataOnline: VisitDataType[];
  salesTypeDataOffline: VisitDataType[];
  radarData: DataItem[];
};

export type GeographicType = {
  province: {
    label: string;
    key: string;
  };
  city: {
    label: string;
    key: string;
  };
};

export type NoticeType = {
  id: string;
  title: string;
  logo: string;
  description: string;
  updatedAt: string;
  member: string;
  href: string;
  memberLink: string;
};

export type CurrentUser = {
  name: string;
  avatar: string;
  userid: string;
  notice: NoticeType[];
  email: string;
  signature: string;
  title: string;
  group: string;
  tags: TagType[];
  notifyCount: number;
  unreadCount: number;
  country: string;
  geographic: GeographicType;
  address: string;
  phone: string;
};

export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export type ActivitiesType = {
  id: string;
  updatedAt: string;
  user: {
    name: string;
    avatar: string;
  };
  group: {
    name: string;
    link: string;
  };
  project: {
    name: string;
    link: string;
  };

  template: string;
};

export type RadarDataType = {
  label: string;
  name: string;
  value: number;
};

export type timeRemainder<T, U> = {
  id: U;
  greeting: T;
  msg: T;
}



export const getTimeRemainder: any = (param: Date) => {
  const getHour = param.getHours();

  // 1.提示语
const timeRemainders: timeRemainder<string, number>[] = [
  {
    id: 1,
    greeting: '早安',
    msg: '祝您今天开心！',
  },
  {
    id: 2,
    greeting: '中午好',
    msg: '午后要注意多喝水哦',
  },
  {
    id: 3,
    greeting: '下午好',
    msg: '下午注意喝八大杯哦',
  },
  {
    id: 4,
    greeting: '晚上好',
    msg: '晚上不要熬夜太久哦',
  },
  {
    id: 5,
    greeting: '凌晨时间',
    msg: '工作虽然重要，但要保持身体健康哦！',
  }
];

  if(getHour >= 7 && getHour <= 11) {
    return timeRemainders[0];
  }else if(getHour > 11 && getHour <= 14) {
    return timeRemainders[1];
  }else if(getHour > 14 && getHour <= 17) {
    return timeRemainders[2];
  }else if(getHour > 17 && getHour <= 22) {
    return timeRemainders[3];
  }else {
    return timeRemainders[4];
  }
}