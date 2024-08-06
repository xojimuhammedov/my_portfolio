import Image from "next/image";
import Link from "next/link";

function AuthorsCard({ authors }: any) {
  return (
    <div>
      <Link
        href={`/author/${authors.id}`}
        className="flex flex-col w-52 text-center">
        <div className="w-full h-52 relative">
          <Image
            src={authors.image.url}
            fill
            alt="author"
            className="object-cover rounded-md cursor-pointer grayscale hover:grayscale-0 transition-all"
          />
        </div>
        <h2 className="text-2xl font-creteRound">{authors.name}</h2>
        <p className="text-muted-foreground">
          <span className="font-bold text-white">0{authors.blogs.length}</span>{" "}
          Published posts
        </p>
      </Link>
    </div>
  );
}

export default AuthorsCard;
