"use client";

import Count from "@/components/shared/Count";
import { Button } from "@/components/ui/button";
import { getPost } from "@/lib/api/client-api/homeApi";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<Post[]>({
    queryKey: ["post"],
    queryFn: getPost,
    staleTime: 1000 * 60 * 1,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main>
      <Button>hello</Button>
      <h2 className="font-lora">hello world lora</h2>
      <h2 className="font-sans">hello world sana</h2>
      <Count />
      <div className="">
        {data?.length > 0 ? (
          data.map((item) => (
            <div className="">
              <h1 key={item.id}>{item.title}</h1>
              <Link href={`/${item.id}`}>Click</Link>
            </div>
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
    </main>
  );
}
