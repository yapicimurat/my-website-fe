import {create} from "zustand";

interface GeneralState {
    selectedArticleId: string,
    setSelectedArticleId: (articleId: string) => void
}

export const useGeneralStore = create<GeneralState>((set) => ({
    selectedArticleId: "",
    setSelectedArticleId: (articleId) => set((state) => ({
        selectedArticleId: articleId
    }))
}))