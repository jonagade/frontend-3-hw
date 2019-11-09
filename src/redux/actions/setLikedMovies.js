export const like = (movies) => ({
    type: 'like',
    movies,
});

export const dislike = (movies) => ({
    type: 'dislike',
    movies,
});