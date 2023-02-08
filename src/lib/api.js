import useSWRImmutable from "swr/immutable";

export const fetcher = url => fetch(url).then(r => r.json());

export const useMockAPI = (id, options) => useSWRImmutable(`https://run.mocky.io/v3/${id}`, fetcher, options);

export const useGroupFilters = () => useMockAPI("9e343425-c47c-4c7f-a1ac-972c099be0ed");
export const useReportsData = ({ groupId }) => useMockAPI(groupId, { keepPreviousData: true });
