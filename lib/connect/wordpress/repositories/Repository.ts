const Repository = (query: string) => {
  return {
    async getWp() {
      try {
        const res = await fetch(process.env.WP_ENDPOINT as string, {
          cache: "no-cache",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });
        if (!res.ok) {
          throw new Error("HTTPエラー " + res.status);
        }
        return res.json();
      } catch {
        return [];
      }
    },
  };
};

export default Repository;
