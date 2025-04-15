export type CommentSummary = {
    id: string,
    name: string,
    lastName: string,
    email: string,
    text: string,
    isAnswer: boolean,
    amountOfAnswers: number,
    createdAt: string,
    parentCommentId: string,
}