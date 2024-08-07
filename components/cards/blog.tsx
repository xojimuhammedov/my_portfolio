import { cn, getReadingTime } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import BlogImage from "../../public/blogs/blog.jpg";
import AvatarIcon from "../../public/blogs/123.jpg";

function BlogCard({ img, title, subtitle, pathname }: any) {
  return (
    <div className={cn("grid gap-4 group grid-cols-1 md:grid-cols-2")}>
      <Link target="_blank" href={pathname}>
        <div>
          <div className="relative bg-secondary rounded-md !max-w-[650px] !max-h-[450px]">
            <Image
              src={img}
              alt={"BlogImage"}
              className="px-2 !max-w-100 md:!max-w-[550px] md:!max-h-[450px] xs:h-[300px] lg:h-[420px] md:px-7 !rounded-xl group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3"
            />
          </div>
        </div>
      </Link>
      <div className="flex flex-col space-y-4">
        <Link target="_blank" href={pathname} className="flex flex-col space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5" />
              <p>Aug 1, 2024</p>
            </div>
            <Minus />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <p>20 min read</p>
            </div>
          </div>

          <h2 className="text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors">
            {title}
          </h2>
          <p className="text-muted-foreground line-clamp-3">{subtitle}</p>
        </Link>

        {/* Author */}
        <div className="flex items-center flex-wrap	 gap-3">
          <div className="flex items-center gap-2">
            <Image
              src={AvatarIcon}
              alt="author"
              width={30}
              height={30}
              className="object-cover rounded-sm"
            />
            <p>by Muhammadislom</p>
          </div>
          <Dot />
          <div className="flex items-center gap-2">
            <Link target="_blank" href={pathname}>
              <Badge variant={"secondary"} role="button">
                <Tag className="w-3 h-3 me-2" />
                busines
              </Badge>
            </Link>
            <Dot />
            <Link target="_blank" href={pathname}>
              <Badge variant={"outline"} role="button">
                <Layers2 className="w-3 h-3 me-2" />
                seo
              </Badge>
            </Link>
          </div>
        </div>
          <Link
            href={pathname}
            target="_blank"
            className={cn(
              "hover:bg-blue-400/20 py-1 px-3 w-[108px] cursor-pointer text-blue-400 rounded-sm transition-colors"
            )}>
            Read More
          </Link>
      </div>
    </div>
  );
}

export default BlogCard;
