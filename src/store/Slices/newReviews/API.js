export const fetchNewReviews = async (id) => {
    const res = await fetch(`http://localhost:3001/reviews?movieID=${id}`);

    return res.json();
};
