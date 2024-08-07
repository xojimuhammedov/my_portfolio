import { cn, getReadingTime } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import BlogImage from '../../public/blogs/blog.jpg'
import AvatarIcon from '../../public/blogs/123.jpg';

function BlogCard() {
  return (
    <div
      className={cn(
        "grid gap-4 group grid-cols-1 md:grid-cols-2",
      )}>
      <Link href={`/`}>
        <div>
          <div className="relative bg-secondary rounded-md !max-w-[650px] !max-h-[335px]">
            <Image
              width={650}
              height={335}
              src={BlogImage}
              alt={'BlogImage'}
              className="px-2 !max-w-[250px] md:!max-w-[550px] md:!max-h-[380px] md:px-7 !rounded-xl group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3"
            />
          </div>
        </div>
      </Link>
      <div className="flex flex-col space-y-4">
        <Link href={`/`} className="flex flex-col space-y-4">
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
            Create Business Website
          </h2>
          <p className="text-muted-foreground line-clamp-3">
            We create busines website for you
          </p>
        </Link>

        {/* Author */}
        <div className="flex items-center gap-3">
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
            <Link href={`/`}>
              <Badge variant={"secondary"} role="button">
                <Tag className="w-3 h-3 me-2" />
                 busines
              </Badge>
            </Link>
            <Dot />
            <Link href={`/`}>
              <Badge variant={"outline"} role="button">
                <Layers2 className="w-3 h-3 me-2" />
                 seo
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
