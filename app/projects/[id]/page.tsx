
import Link from "next/link";
import { Fragment } from "react";
import { getDatabase, getPage, getBlocks } from "@/lib/notion";
import { Text } from '@/app/projects/[id]/text'

const databaseId = process.env.NOTION_DATABASE_ID

export async function generateStaticParams() {
  const database = await getDatabase(databaseId, '');
  return database.map((post) => ({id: post.id}))
}

const renderBlock = (block : any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.rich_text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.rich_text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {value.children?.map((block : any) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
        const src = value.type === "external" ? value.external.url : value.file.url;
        const caption = value.caption.length != 0 ? value.caption[0].plain_text : "";
      return (
        <figure>
          <img src={src} />
          {/* {caption && <figcaption>{caption}</figcaption>} */}
        </figure>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};


export default async function Page({ params } : {params: {id : string}}) {
    const id = params.id;
    console.log('statically generated page: ', id);
    const page = await getPage(id);
    const blocks = await getBlocks(id);

    const childBlocks = await Promise.all(
        blocks
        .filter((block : any) => block.has_children)
        .map(async (block : any) => {
            return {
            id: block.id,
            children: await getBlocks(block.id),
            };
        })
    );
    const blocksWithChildren = blocks.map((block : any) => {
        if (block.has_children && !block[block.type].children) {
            block[block.type]["children"] = childBlocks.find(
                (x) => x.id === block.id
            )?.children;
        }
        return block;
    });

    if (!page || !blocks) {
        return <div />;
    }
    return (
        <main className="proj-page text-prim mb-24">
            <div className="my-10">
                <h1 className="text-2xl font-semibold">
                    <Text text={page.properties.Name.title} />
                </h1>
            </div>
            {blocks.map((block) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
        </main>
    );
}