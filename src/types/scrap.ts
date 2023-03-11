export interface ScrapDocsFormType {
  title: string;
}
export interface ScrapDocInfoType {
  storageObjectId: string;
  title: string;
}

export interface ScrapDocListType {
  list: ScrapDocInfoType[];
}

export interface ScrapDetailType {
  scrapObjectId: string;
  placeName: string;
  postId: string;
}
export interface ScrapListType {
  title: string;
  contents: ScrapDetailType[];
}
