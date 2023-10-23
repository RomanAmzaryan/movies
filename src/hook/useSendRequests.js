const useSendRequests = () => {
  const get = async (url) => {
    const res = await fetch(url);
    return res.json();
  };

  const post = async (url, obj) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    return res.json();
  };

  return { get, post };
};

export default useSendRequests;
