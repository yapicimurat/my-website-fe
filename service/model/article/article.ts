import { Category } from "../category/category";

export type Article = {
    id: string,
    title: string,
    description: string,
    htmlContent: string,
    coverImageURL: string,
    readTimeInMinute: number,
    amountOfAnswers: number,
    createdAt: string,
    categories: Category[],
};
