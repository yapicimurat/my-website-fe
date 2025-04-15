import {create} from 'zustand';
import Pageable from "../service/model/pageable";
import { ArticleSummary } from '../service/model/article/articleSummary';

interface ArticleState {
    articles: Pageable<ArticleSummary>,
    currentPage: number,
    nextPage: () => void,
    previousPage: () => void,
    setPage: (page: number) => void,
    setArticles: (pageable: Pageable<ArticleSummary>) => void,
}


export const useArticleStore = create<ArticleState>((set) => ({
    articles: {
        elements: [],
        totalPages: 0,
        totalElementsPerPage: 0,
        currentPage: 1,
        hasNext: false,
        hasPrevious: false,
    },
    currentPage: 1,
    nextPage: () => set((state) => ({currentPage: (state.currentPage + 1 <= state.articles.totalPages) ? state.currentPage + 1 : state.currentPage})),
    previousPage: () => set((state) => ({currentPage: (state.currentPage - 1 >= 1) ? state.currentPage - 1 : state.currentPage})),
    setPage: (page) => set((state) => ({currentPage: page})),
    setArticles: (articles) => set((state) => ({articles}))
}));
