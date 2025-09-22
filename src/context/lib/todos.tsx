export type Todos = {
    list_id: number;
    todos: [
        {
            todo_id: number;
            content: string;
            status: string;
            create_date: string;
            start_date: string;
            finish_date: string;
        }
    ];

};

// API-dən todo listini gətirən funksiya
export async function getTodos(slug: string): Promise<Todos> {
    const res = await fetch(`https://taskwar.vercel.app/todos/?slug=${slug}`, {
        cache: "no-store", // hər dəfə yeniləsin deyə
    });

    if (!res.ok) {
        throw new Error("Failed to fetch todos");
    }

    return res.json();
}
