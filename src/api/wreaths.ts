import { Wreath } from "@/types/wreath";
import { fetchAPI } from "./lib";

export async function getWreaths(first = 10) {
  const data = await fetchAPI(
    `query FetchWreaths($first: Int = 10) {
        wreaths(first: $first) {
          nodes {
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            wreathGroup{
              wreathDiameter
              wreathDescription
            }
          }
        }
      }`,
    {
      variables: {
        first,
      },
    }
  );
  const wreaths: Wreath[] = data?.wreaths?.nodes.map((wreath: any) => {
    return {
      name: wreath.title,
      description: wreath.wreathGroup.wreathDescription,
      price: wreath.wreathGroup.wreathPrice,
      diameter: wreath.wreathGroup.wreathDiameter,
      image: wreath.featuredImage.node.sourceUrl,
    };
  });

  return wreaths;
}
