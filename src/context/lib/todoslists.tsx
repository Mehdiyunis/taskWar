export type TodosLists = {
    id: number;
    title: string;
    completed: boolean;
};

// API-dən todo listini gətirən funksiya
export async function getTodosLists(): Promise<TodosLists> {
    const res = await fetch("https://taskwar.vercel.app/todoslists", {
        cache: "no-store", // hər dəfə yeniləsin deyə
    });

    if (!res.ok) {
        throw new Error("Failed to fetch todos");
    }

    return res.json();
}
