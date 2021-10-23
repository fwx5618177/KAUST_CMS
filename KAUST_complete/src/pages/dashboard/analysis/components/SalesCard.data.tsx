import { RankingListData } from "../data";

export const registersList: RankingListData[] = [];
for (let i = 0; i < 7; i += 1) {
    registersList.push({
    title: `注册者 ${i}`,
    time: new Date(),
  });
}

export const visitorList: RankingListData[] = [];
for (let i = 0; i < 7; i += 1) {
    visitorList.push({
    title: `注册者 ${i}`,
    ip: '127.0.0.1',
  });
}