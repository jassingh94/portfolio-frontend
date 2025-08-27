import { useQuery, type UseQueryResult } from '@tanstack/react-query'

const baseUrl = import.meta.env.VITE_API;

export const getQuery = ({ question }: {
    question: string
}): UseQueryResult<{
    message: string
}> => useQuery({
    queryKey: ['query', question],
    queryFn: () => question && getQueryResponse({ question })
})

const getQueryResponse = async ({ question }: {
    question: string
}): Promise<any> => {
    const res = await fetch(`${baseUrl}/query?q=${question}`);
    return await res.json();
}