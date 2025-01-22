import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const response = await fetch(`https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json`);
    const responseBody = await response.json();

    const trimmedData = responseBody.slice(0, 98) as { name: string; language: string; id: string; bio: string; version: number }[]
    return {
     trimmedData: trimmedData,
    };
};
