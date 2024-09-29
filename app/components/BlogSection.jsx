import React from "react";
import {
  AnimatedCard,
  AnimatedHeader,
  AnimatedSmallText,
} from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const blogPosts = [
  {
    id: 1,
    title: "Top 10 AI Girlfriend Websites in 2024",
    excerpt:
      "Discover how Soulmaite's AI companions can significantly enhance your emotional well-being through consistent support, personalized interactions, and stress reduction, all while providing a non-judgmental space for self-expression.",
    author: "Marc Vuissoz",
    date: "July 31, 2024",
    readTime: "10 min read",
    image: "/blog.png",
    category: "Business",
    imgSrc: "/review.jpg", // Update with your actual image paths
  },
  {
    id: 2,
    title: "The Future of AI Companionship",
    excerpt:
      "Explore the evolving landscape of AI companions and their potential impact on human relationships and emotional well-being.",
    author: "Emma Johnson",
    date: "August 5, 2024",
    readTime: "8 min read",
    image: "/blog.png",
    category: "Technology",
    imgSrc: "/review.jpg", // Update with your actual image paths
  },
  {
    id: 3,
    title: "Ethical Considerations in AI Relationships",
    excerpt:
      "Delve into the complex ethical questions surrounding AI companionship and its implications for society.",
    author: "Dr. Alex Chen",
    date: "August 12, 2024",
    readTime: "12 min read",
    image: "/blog.png",
    category: "Ethics",
    imgSrc: "/review.jpg", // Update with your actual image paths
  },
];

const BlogSection = () => {
  return (
    <section className=" p-2 lg:p-12 pb-0 text-white">
      <AnimatedHeader className="text-center text-5xl font-bold mb-6">
        Latest Blog Posts
      </AnimatedHeader>
      <AnimatedSmallText className="text-center text-lg text-gray-400 mb-12">
        Stay updated with the latest trends and insights in AI companionship
      </AnimatedSmallText>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto lg:px-4">
        {blogPosts.map((post, index) => (
          <AnimatedCard key={post.id} custom={index + 1}>
            <FeaturedCard post={post} />
          </AnimatedCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href={`/blog/${blogPosts[0].id}`}>
          <button className="mt-8 px-12 text-lg py-3 rounded-[32px]  transition text-white  border">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

const FeaturedCard = ({ post }) => (
  <Link href={`/blog/${post.id}`}>
    <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgb(167, 112, 239), rgb(253, 185, 155))",
        }}
        className="p-[2px] rounded-xl"
      >
        <div className="overflow-hidden rounded-xl">
          {" "}
          {/* Wrap Image with overflow-hidden */}
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-52 object-cover rounded-xl transition-transform duration-500 ease-out hover:scale-110" // Added scale effect
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div className="py-6 flex flex-col gap-4">
        <span className="text-sm font-semibold text-[#C488D3]">
          {post.category}
        </span>
        <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <Image
              src={post.imgSrc}
              alt={post.title}
              className="w-12 h-12 object-cover rounded-full"
              width={100}
              height={100}
            />
            <div className="flex flex-col">
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm text-gray-500">
                {post.date} · {post.readTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default BlogSection;
