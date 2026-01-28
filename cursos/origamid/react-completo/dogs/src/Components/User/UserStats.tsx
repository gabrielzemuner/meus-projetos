import { STATS_GET } from "@/api";
import Error from "@/Components/Helper/Error";
import Head from "@/Components/Helper/Head";
import Loading from "@/Components/Helper/Loading";
import useFetch from "@/Hooks/useFetch";
import { lazy, Suspense, useEffect } from "react";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

export default function UserStats() {
  const { data, error, loading, request } = useFetch();
  // console.log('UserStats')

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();

      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return null;
  return (
    <Suspense fallback={<div></div>}>
      <Head title="Estatísticas" />
      <UserStatsGraphs data={data} />
    </Suspense>
  );
}
