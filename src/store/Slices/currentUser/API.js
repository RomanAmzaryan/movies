export const fetchCurrentUser = async (id) => {
    const res = await fetch(`http://localhost:3001/registeredUsers?id=${id}`);
    const data = await res.json();

    return data[0];
};
