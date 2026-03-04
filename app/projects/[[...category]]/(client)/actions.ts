"use server";

import { z } from "zod";
import { actionClient } from "../../../../lib/safe-action";
import { getProjectsByCategory } from "../../../../lib/cms";

const loadMoreProjectsSchema = z.object({
  skip: z.number(),
  limit: z.number(),
  category: z.array(z.string()).optional(),
});

export const loadMoreProjectsAction = actionClient
  .inputSchema(loadMoreProjectsSchema)
  .action(async ({ parsedInput: { skip, limit, category } }) => {
    return getProjectsByCategory({
      categorySlug: category,
      skip,
      limit,
    });
  });
