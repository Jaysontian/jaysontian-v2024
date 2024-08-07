import { Client } from "@notionhq/client";
import * as Notion from "types-notion-api";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId : string, tag : string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
        "property": "Tags",
        multi_select: {'contains': tag}
    }
  });
  return response.results;
};

export const getPage = async (pageId : any) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId : string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });
  return response.results;
};