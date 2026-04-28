"use server";

import { z } from "zod";
import { actionClient } from "../../../../lib/safe-action";
import { getArticlesByCategory } from "../../../../lib/cms";

const loadMoreArticlesSchema = z.object({
  skip: z.number(),
  limit: z.number(),
  category: z.array(z.string()).optional(),
});

export const loadMoreArticlesAction = actionClient
  .inputSchema(loadMoreArticlesSchema)
  .action(async ({ parsedInput: { skip, limit, category } }) => {
    return getArticlesByCategory({
      categorySlug: category,
      skip,
      limit,
    });
  });
