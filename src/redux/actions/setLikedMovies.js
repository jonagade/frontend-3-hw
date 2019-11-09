export const like = (movie) => ({
    type: 'like',
    movie,
});

export const dislike = (movie) => ({
    type: 'dislike',
    movie,
});