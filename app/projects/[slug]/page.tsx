
import Link from "next/link";


export default function Page({ params }) {
    console.log(params);
  return (
    <ol>
        <p>Hi</p>
      {/* {params.map((post) => (
        <li key={post.id}>
          <Link href={`/${post.id}`}>
             <h1>{post.properties.Name.title}</h1>
          </Link>
        </li>
      ))} */}
    </ol> 
  );
}