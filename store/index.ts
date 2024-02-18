import {create} from 'zustand';
import {Article} from "../service/model/article";

interface ArticleState {
    articles: Article[],
    currentPage: number,
    nextPage: () => void,
    previousPage: () => void,
    setPage: (page: number) => void
}

export const useArticleStore = create<ArticleState>()((set) => ({
    articles: [],
    currentPage: 0,
    nextPage: () => set((state) => ({currentPage: state.currentPage + 1})),
    previousPage: () => set((state) => ({currentPage: state.currentPage - 1})),
    setPage: (page) => set((state) => ({currentPage: page}))
}));