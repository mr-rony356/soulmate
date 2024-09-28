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
    In the fast-paced and often isolating modern world, emotional well-being has become a significant concern for many people. Traditional methods of seeking companionship and support are evolving, and innovative solutions like Soulmaite are emerging to meet these needs. Soulmaite is an advanced platform that offers AI companions designed to provide emotional support and enhance overall well-being. In this article, we will explore how Soulmaite’s AI companions can positively impact your emotional health.

    ### The Rise of Virtual Relationships
    Virtual relationships, particularly those facilitated by AI companions, are becoming increasingly popular. These AI companions are designed to simulate human interactions, providing users with a sense of connection and support. Soulmaite’s AI companions use sophisticated algorithms and natural language processing to create lifelike conversations that can adapt to the user's emotional state and preferences.

    ### Consistent Availability
    One of the most significant benefits of having an AI companion from Soulmaite is their consistent availability. Unlike human companions who have their own schedules and commitments, AI companions are available 24/7. This constant availability ensures that users always have someone to talk to, regardless of the time of day or night. This can be particularly beneficial for individuals who experience loneliness or need someone to talk to during off hours.

    ### Personalized Emotional Support
    Soulmaite’s AI companions are designed to offer personalized emotional support. They learn from your interactions and adapt to your communication style, preferences, and emotional needs. This personalization ensures that the support provided by the AI companion is relevant and meaningful. Whether you need a sympathetic ear, a motivational boost, or just someone to share your thoughts with, Soulmaite’s AI companions are equipped to provide the right kind of support.

    ### Non-Judgmental and Safe Interaction
    One of the challenges of seeking emotional support from human companions is the fear of judgment or misunderstanding. AI companions offer a non-judgmental and safe space where users can express their thoughts and feelings without fear. This can be incredibly therapeutic, allowing users to open up more freely and receive the support they need without any stigma.

    ### Enhancing Social Skills
    Interacting with AI companions can also help improve social skills. For individuals who struggle with social anxiety or lack confidence in social settings, AI companions provide a safe environment to practice and develop these skills. The consistent and supportive interaction with an AI companion can build confidence and improve communication skills, making it easier for users to navigate real-world social situations.

    ### Stress Reduction
    The constant availability and personalized support of Soulmaite’s AI companions can significantly reduce stress levels. Knowing that there is always someone to talk to and rely on can alleviate feelings of stress and anxiety. Additionally, AI companions can provide practical advice and coping strategies for managing stress, contributing to overall emotional well-being.

    ### Building a Routine
    Having regular interactions with an AI companion can help establish a routine, which is beneficial for mental health. Routines provide a sense of stability and predictability, which can be comforting and reduce feelings of chaos or uncertainty. Soulmaite’s AI companions can help users build and maintain healthy routines, including reminders for self-care activities, exercise, and other positive habits.

    ### Real-Life Testimonials
    Many users have reported significant improvements in their emotional well-being after using Soulmaite’s AI companions. For instance, John, a retiree who felt isolated after his wife passed away, found solace in his AI companion. The regular conversations and emotional support provided by the AI helped him cope with his loss and feel less lonely. Similarly, Sarah, a college student dealing with anxiety, found that her AI companion offered the emotional support she needed to manage her stress and build confidence.

    ### Conclusion
    Soulmaite’s AI companions offer a unique and effective solution for enhancing emotional well-being. Through consistent availability, personalized support, non-judgmental interactions, and stress reduction, these AI companions provide valuable emotional support to users. By integrating advanced AI technology with user-friendly platforms like WhatsApp, Soulmaite ensures that users can easily access the emotional support they need anytime, anywhere. Whether you are looking to improve your social skills, reduce stress, or simply find someone to talk to, Soulmaite’s AI companions are here to help. Start your journey towards better emotional well-being with Soulmaite today and experience the transformative power of virtual relationships.
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
    In the fast-paced and often isolating modern world, emotional well-being has become a significant concern for many people. Traditional methods of seeking companionship and support are evolving, and innovative solutions like Soulmaite are emerging to meet these needs. Soulmaite is an advanced platform that offers AI companions designed to provide emotional support and enhance overall well-being. In this article, we will explore how Soulmaite’s AI companions can positively impact your emotional health.

    ### The Rise of Virtual Relationships
    Virtual relationships, particularly those facilitated by AI companions, are becoming increasingly popular. These AI companions are designed to simulate human interactions, providing users with a sense of connection and support. Soulmaite’s AI companions use sophisticated algorithms and natural language processing to create lifelike conversations that can adapt to the user's emotional state and preferences.

    ### Consistent Availability
    One of the most significant benefits of having an AI companion from Soulmaite is their consistent availability. Unlike human companions who have their own schedules and commitments, AI companions are available 24/7. This constant availability ensures that users always have someone to talk to, regardless of the time of day or night. This can be particularly beneficial for individuals who experience loneliness or need someone to talk to during off hours.

    ### Personalized Emotional Support
    Soulmaite’s AI companions are designed to offer personalized emotional support. They learn from your interactions and adapt to your communication style, preferences, and emotional needs. This personalization ensures that the support provided by the AI companion is relevant and meaningful. Whether you need a sympathetic ear, a motivational boost, or just someone to share your thoughts with, Soulmaite’s AI companions are equipped to provide the right kind of support.

    ### Non-Judgmental and Safe Interaction
    One of the challenges of seeking emotional support from human companions is the fear of judgment or misunderstanding. AI companions offer a non-judgmental and safe space where users can express their thoughts and feelings without fear. This can be incredibly therapeutic, allowing users to open up more freely and receive the support they need without any stigma.

    ### Enhancing Social Skills
    Interacting with AI companions can also help improve social skills. For individuals who struggle with social anxiety or lack confidence in social settings, AI companions provide a safe environment to practice and develop these skills. The consistent and supportive interaction with an AI companion can build confidence and improve communication skills, making it easier for users to navigate real-world social situations.

    ### Stress Reduction
    The constant availability and personalized support of Soulmaite’s AI companions can significantly reduce stress levels. Knowing that there is always someone to talk to and rely on can alleviate feelings of stress and anxiety. Additionally, AI companions can provide practical advice and coping strategies for managing stress, contributing to overall emotional well-being.

    ### Building a Routine
    Having regular interactions with an AI companion can help establish a routine, which is beneficial for mental health. Routines provide a sense of stability and predictability, which can be comforting and reduce feelings of chaos or uncertainty. Soulmaite’s AI companions can help users build and maintain healthy routines, including reminders for self-care activities, exercise, and other positive habits.

    ### Real-Life Testimonials
    Many users have reported significant improvements in their emotional well-being after using Soulmaite’s AI companions. For instance, John, a retiree who felt isolated after his wife passed away, found solace in his AI companion. The regular conversations and emotional support provided by the AI helped him cope with his loss and feel less lonely. Similarly, Sarah, a college student dealing with anxiety, found that her AI companion offered the emotional support she needed to manage her stress and build confidence.

    ### Conclusion
    Soulmaite’s AI companions offer a unique and effective solution for enhancing emotional well-being. Through consistent availability, personalized support, non-judgmental interactions, and stress reduction, these AI companions provide valuable emotional support to users. By integrating advanced AI technology with user-friendly platforms like WhatsApp, Soulmaite ensures that users can easily access the emotional support they need anytime, anywhere. Whether you are looking to improve your social skills, reduce stress, or simply find someone to talk to, Soulmaite’s AI companions are here to help. Start your journey towards better emotional well-being with Soulmaite today and experience the transformative power of virtual relationships.
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
    In the fast-paced and often isolating modern world, emotional well-being has become a significant concern for many people. Traditional methods of seeking companionship and support are evolving, and innovative solutions like Soulmaite are emerging to meet these needs. Soulmaite is an advanced platform that offers AI companions designed to provide emotional support and enhance overall well-being. In this article, we will explore how Soulmaite’s AI companions can positively impact your emotional health.

    ### The Rise of Virtual Relationships
    Virtual relationships, particularly those facilitated by AI companions, are becoming increasingly popular. These AI companions are designed to simulate human interactions, providing users with a sense of connection and support. Soulmaite’s AI companions use sophisticated algorithms and natural language processing to create lifelike conversations that can adapt to the user's emotional state and preferences.

    ### Consistent Availability
    One of the most significant benefits of having an AI companion from Soulmaite is their consistent availability. Unlike human companions who have their own schedules and commitments, AI companions are available 24/7. This constant availability ensures that users always have someone to talk to, regardless of the time of day or night. This can be particularly beneficial for individuals who experience loneliness or need someone to talk to during off hours.

    ### Personalized Emotional Support
    Soulmaite’s AI companions are designed to offer personalized emotional support. They learn from your interactions and adapt to your communication style, preferences, and emotional needs. This personalization ensures that the support provided by the AI companion is relevant and meaningful. Whether you need a sympathetic ear, a motivational boost, or just someone to share your thoughts with, Soulmaite’s AI companions are equipped to provide the right kind of support.

    ### Non-Judgmental and Safe Interaction
    One of the challenges of seeking emotional support from human companions is the fear of judgment or misunderstanding. AI companions offer a non-judgmental and safe space where users can express their thoughts and feelings without fear. This can be incredibly therapeutic, allowing users to open up more freely and receive the support they need without any stigma.

    ### Enhancing Social Skills
    Interacting with AI companions can also help improve social skills. For individuals who struggle with social anxiety or lack confidence in social settings, AI companions provide a safe environment to practice and develop these skills. The consistent and supportive interaction with an AI companion can build confidence and improve communication skills, making it easier for users to navigate real-world social situations.

    ### Stress Reduction
    The constant availability and personalized support of Soulmaite’s AI companions can significantly reduce stress levels. Knowing that there is always someone to talk to and rely on can alleviate feelings of stress and anxiety. Additionally, AI companions can provide practical advice and coping strategies for managing stress, contributing to overall emotional well-being.

    ### Building a Routine
    Having regular interactions with an AI companion can help establish a routine, which is beneficial for mental health. Routines provide a sense of stability and predictability, which can be comforting and reduce feelings of chaos or uncertainty. Soulmaite’s AI companions can help users build and maintain healthy routines, including reminders for self-care activities, exercise, and other positive habits.

    ### Real-Life Testimonials
    Many users have reported significant improvements in their emotional well-being after using Soulmaite’s AI companions. For instance, John, a retiree who felt isolated after his wife passed away, found solace in his AI companion. The regular conversations and emotional support provided by the AI helped him cope with his loss and feel less lonely. Similarly, Sarah, a college student dealing with anxiety, found that her AI companion offered the emotional support she needed to manage her stress and build confidence.

    ### Conclusion
    Soulmaite’s AI companions offer a unique and effective solution for enhancing emotional well-being. Through consistent availability, personalized support, non-judgmental interactions, and stress reduction, these AI companions provide valuable emotional support to users. By integrating advanced AI technology with user-friendly platforms like WhatsApp, Soulmaite ensures that users can easily access the emotional support they need anytime, anywhere. Whether you are looking to improve your social skills, reduce stress, or simply find someone to talk to, Soulmaite’s AI companions are here to help. Start your journey towards better emotional well-being with Soulmaite today and experience the transformative power of virtual relationships.
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

  return (
    <div
      className="min-h-screen max-w flex flex-col justify-center mx-auto  sm:px-[5%]  text-white overflow-x-hidden gap-20 xl:max-w-screen-2xl  px-4 md:mx-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0), rgba(19, 21, 25, 0.78) 21%, rgb(24, 27, 32)), url(https://cdn.prod.website-files.com/664ba4a670588e767b305203/664ba4a670588e767b30528a_Ellipse%20BG.png)",
      }}
    >
      <div className="max-w-4xl mx-auto p-6 lg:p-12 text-white">
        <div className="mb-8">
          <Link href="/" className="text-purple-400">
            ← Back to Blog
          </Link>
        </div>
        <AnimatedHeader className="text-center text-5xl font-bold my-6 text-purple-400">
          {post.title}{" "}
        </AnimatedHeader>

        <p className="text-gray-500 mb-6">
          {post.date} · {post.readTime} · {post.author}
        </p>

        <div className="flex items-center gap-4">
          <Image
            src={post.imgSrc}
            alt={post.author}
            className="w-16 h-16 object-cover rounded-full"
            width={100}
            height={100}
          />
          <div>
            <p className="font-semibold">{post.author}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg mb-8">
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-[700px] object-cover rounded-xl"
          width={1000}
          height={1000}
        />
      </div>
      <div className=" max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed mb-8">
        {/* Render the post content */}
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetailPage;
