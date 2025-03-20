import { getProjectBySlug } from "@/constants/all-projects";
import DetailProjectModule from "@/modules/projects/detail/DetailProjectModule";
import { notFound } from "next/navigation";
import React from "react";

export default function DetailProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  return <DetailProjectModule project={project} />;
}
