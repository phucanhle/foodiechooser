export async function getIngredients({
    search = "",
    group = "",
}: {
    search?: string;
    group?: string;
}) {
    try {
        let url = "/api/ingredients/group";
        if (!search && !group) return [];

        // Thêm query params
        const params = new URLSearchParams();
        if (search) params.append("search", search); // Sửa "q" thành "search"
        if (group) params.append("group", group);
        if (params.toString())
            url += `?${params.toString()}`;

        const res = await fetch(url);
        if (!res.ok)
            throw new Error("Failed to fetch data");

        return await res.json();
    } catch (error) {
        console.error("Error fetching ingredients:", error);
        return [];
    }
}

export async function getRecipes() {
    const url = "/api/recipes";
    try {
        const res = await fetch(url);
        if (!res.ok)
            throw new Error("Failed to fetch data");

        return await res.json();
    } catch (error) {
        console.error("Error fetching ingredients:", error);
        return [];
    }
}

export async function getRecipeDetail(id: string) {
    let url = "/api/recipes";
    const params = new URLSearchParams();
    if (id) params.append("id", id); // Sửa "q" thành "search"
    if (params.toString()) url += `?${params.toString()}`;

    try {
        const res = await fetch(url);
        if (!res.ok)
            throw new Error("Failed to fetch data");
        const recipes = await res.json();

        return recipes[0];
    } catch (error) {
        console.error("Error fetching ingredients:", error);
        return [];
    }
}
