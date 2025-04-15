export type ArticleCreateRequest = {
    title: String,
    description: String,
    htmlContent: String,
    readTimeInMinute: Number,
    categoryIdList: Array<number>
};
