export type Comment = {
    id: string,
    name: string
    lastName: string
    email: string
    text: string
    isAnswer: boolean,
    parentComment: Comment,
    amountOfAnswers: number,
    createdAt: string
}
