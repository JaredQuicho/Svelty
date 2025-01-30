import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const response = await fetch(`http://localhost:8080/v1/feeds`);
    const responseBody = await response.json();

    // const trimmedData = responseBody.slice(0, 98) as { name: string; language: string; id: string; bio: string; version: number }[]
    const trimmedData = responseBody.slice(0, 98) as { id: string; created_at: string; updated_at: string; name: string; url: string; user_id: string; }[]
    return {
     trimmedData: trimmedData,
    };
};
