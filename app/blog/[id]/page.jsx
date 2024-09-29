// app/blog/[id]/page.js
"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatedHeader } from "@/lib/animations";

// Simulating data fetching (Replace with your actual data fetching method)
const blogPosts = [
  {
    id: 1,
    title: "Top 10 AI Girlfriend Websites in 2024",
    content: `
    <p>In the fast-paced and often isolating modern world, emotional well-being has become a significant concern for many people. Traditional methods of seeking companionship and support are evolving, and innovative solutions like Soulmaite are emerging to meet these needs. Soulmaite is an advanced platform that offers AI companions designed to provide emotional support and enhance overall well-being. In this article, we will explore how Soulmaite's AI companions can positively impact your emotional health.</p>

    <h1 class="text-4xl font-bold my-8 text-white">The Rise of Virtual Relationships and AI Companions</h1>
    <p>In the fast-paced and often isolating modern world, emotional well-being has become a significant concern for many people. Traditional methods of seeking companionship and support are evolving, and innovative solutions like Soulmaite are emerging to meet these needs. Soulmaite is an advanced platform that offers AI companions designed to provide emotional support and enhance overall well-being. In this article, we will explore how Soulmaite's AI companions can positively impact your emotional health.</p>

    <h1 class="text-4xl font-bold my-8 text-white">Consistent Availability</h1>
    <p>One of the most significant benefits of having an AI companion from Soulmaite is their consistent availability. Unlike human companions who have their own schedules and commitments, AI companions are available 24/7. This constant availability ensures that users always have someone to talk to, regardless of the time of day or night. This can be particularly beneficial for individuals who experience loneliness or need someone to talk to during off hours.</p>

    <h1 class="text-4xl font-bold my-8 text-white">Personalized Emotional Support</h1>
    <p>Soulmaite's AI companions are designed to offer personalized emotional support. They learn from your interactions and adapt to your communication style, preferences, and emotional needs. This personalization ensures that the support provided by the AI companion is relevant and meaningful. Whether you need a sympathetic ear, a motivational boost, or just someone to share your thoughts with, Soulmaite's AI companions are equipped to provide the right kind of support.</p> 
     `,
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
    content: `
    <p>In the fast-paced and often isolating modern world, emotional well-being has become a significant concern for many people. Traditional methods of seeking companionship and support are evolving, and innovative solutions like Soulmaite are emerging to meet these needs. Soulmaite is an advanced platform that offers AI companions designed to provide emotional support and enhance overall well-being. In this article, we will explore how Soulmaite's AI companions can positively impact your emotional health.</p>

    <h1 class="text-4xl font-bold my-8 text-white">The Rise of Virtual Relationships and AI Companions</h1>
    <p>In the fast-paced and often isolating modern world, emotional well-being has become a significant concern for many people. Traditional methods of seeking companionship and support are evolving, and innovative solutions like Soulmaite are emerging to meet these needs. Soulmaite is an advanced platform that offers AI companions designed to provide emotional support and enhance overall well-being. In this article, we will explore how Soulmaite's AI companions can positively impact your emotional health.</p>

    <h1 class="text-4xl font-bold my-8 text-white">Consistent Availability</h1>
    <p>One of the most significant benefits of having an AI companion from Soulmaite is their consistent availability. Unlike human companions who have their own schedules and commitments, AI companions are available 24/7. This constant availability ensures that users always have someone to talk to, regardless of the time of day or night. This can be particularly beneficial for individuals who experience loneliness or need someone to talk to during off hours.</p>

    <h1 class="text-4xl font-bold my-8 text-white">Personalized Emotional Support</h1>
    <p>Soulmaite's AI companions are designed to offer personalized emotional support. They learn from your interactions and adapt to your communication style, preferences, and emotional needs. This personalization ensures that the support provided by the AI companion is relevant and meaningful. Whether you need a sympathetic ear, a motivational boost, or just someone to share your thoughts with, Soulmaite's AI companions are equipped to provide the right kind of support.</p> 
     `,
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
    content: `
    <p>In the fast-paced and often isolating modern world, emotional well-being has become a significant concern for many people. Traditional methods of seeking companionship and support are evolving, and innovative solutions like Soulmaite are emerging to meet these needs. Soulmaite is an advanced platform that offers AI companions designed to provide emotional support and enhance overall well-being. In this article, we will explore how Soulmaite's AI companions can positively impact your emotional health.</p>

    <h1 class="text-4xl font-bold my-8 text-white">The Rise of Virtual Relationships and AI Companions</h1>
    <p>In the fast-paced and often isolating modern world, emotional well-being has become a significant concern for many people. Traditional methods of seeking companionship and support are evolving, and innovative solutions like Soulmaite are emerging to meet these needs. Soulmaite is an advanced platform that offers AI companions designed to provide emotional support and enhance overall well-being. In this article, we will explore how Soulmaite's AI companions can positively impact your emotional health.</p>

    <h1 class="text-4xl font-bold my-8 text-white">Consistent Availability</h1>
    <p>One of the most significant benefits of having an AI companion from Soulmaite is their consistent availability. Unlike human companions who have their own schedules and commitments, AI companions are available 24/7. This constant availability ensures that users always have someone to talk to, regardless of the time of day or night. This can be particularly beneficial for individuals who experience loneliness or need someone to talk to during off hours.</p>

    <h1 class="text-4xl font-bold my-8 text-white">Personalized Emotional Support</h1>
    <p>Soulmaite's AI companions are designed to offer personalized emotional support. They learn from your interactions and adapt to your communication style, preferences, and emotional needs. This personalization ensures that the support provided by the AI companion is relevant and meaningful. Whether you need a sympathetic ear, a motivational boost, or just someone to share your thoughts with, Soulmaite's AI companions are equipped to provide the right kind of support.</p> 
     `,
    author: "Dr. Alex Chen",
    date: "August 12, 2024",
    readTime: "12 min read",
    image: "/blog.png",
    category: "Ethics",
    imgSrc: "/review.jpg", // Update with your actual image paths
  },
];

// Helper function to get blog by ID
const getBlogById = (id) => blogPosts.find((post) => post.id === Number(id));

const BlogDetailPage = ({ params }) => {
  const post = getBlogById(params.id);

  // If no post is found, render a 404 page
  if (!post) {
    return notFound();
  }
  // Function to process content and convert ### headings to <h1> tags
  const processContent = (content) => {
    const paragraphs = content.split("\n");
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith("###")) {
        return (
          <h1 key={index} className="text-4xl font-bold my-8 text-white">
            {paragraph.replace("###", "").trim()}
          </h1>
        );
      }
      return (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      );
    });
  };
  return (
    <div className="w-full mx-auto max-w-screen-2xl">
      <div
        className="min-h-screen max-w flex flex-col justify-center mx-auto  sm:px-[5%]  text-white overflow-x-hidden gap-20 xl:max-w-screen-2xl  px-4 md:mx-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0), rgba(19, 21, 25, 0.78) 21%, rgb(24, 27, 32)), url(https://cdn.prod.website-files.com/664ba4a670588e767b305203/664ba4a670588e767b30528a_Ellipse%20BG.png)",
        }}
      >
        <div className="max-w-6xl mx-auto p-6 lg:p-12 text-white">
          <div className="mb-8">
            <Link href="/" className="text-purple-400">
              ← Back to Blog
            </Link>
          </div>
          <AnimatedHeader className="text-center  text-4xl lg:text-4xl font-bold mb-12 my-8 text-purple-400">
            {post.title}{" "}
          </AnimatedHeader>
          <div className="flex justify-between items-center flex-col lg:flex-row gap-12">
            <div className="flex items-center gap-4  !mt-6">
              <Image
                src={post.imgSrc}
                alt={post.author}
                className="w-16 h-16 object-cover rounded-full "
                width={100}
                height={100}
              />
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-gray-500">
                  {post.date} . {post.readTime}{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 cursor-pointer">
                <Image src="/link.png" alt="like" width={30} height={30} />
                <Image src="/x.png" alt="like" width={20} height={20} />
                <Image src="/linkdine.png" alt="like" width={30} height={30} />
                <Image src="/insta.png" alt="like" width={30} height={30} />
                <Image src="/facebook.png" alt="like" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg mb-0 lg:mb-8">
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-[300px] lg:h-[700px] object-cover rounded-xl"
            width={1000}
            height={1000}
          />
        </div>
        <div className=" max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed mb-8">
          {/* Render the post content */}
          <AnimatedHeader className="text-center text-5xl lg:text-6xl font-bold mb-16 my-8 text-white">
            {post.title}{" "}
          </AnimatedHeader>
          <div
            className="my-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
