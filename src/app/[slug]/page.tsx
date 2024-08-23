"use client";

import { IPrams } from "@/interfaces/global.interface";
import { getPostById } from "@/lib/api//client-api/homeApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Post } from "../page";

const page = ({ params: { slug } }: IPrams) => {
  const { data, isLoading, error, isError, isSuccess } = useQuery<Post>({
    queryKey: ["post", slug],
    queryFn: () => getPostById(slug),
    staleTime: 1000 * 60 * 1,
  });

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>{data?.title}</h1>
    </div>
  );
};

export default page;
