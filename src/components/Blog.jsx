const blogPosts = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJkDOryZoKFG26JuOvVKMdo59EHbML3gtspX3autEu6jqqu5UUfgLg6Gqjx5EVO6Axwr2-CRavcYncjkDwaTGYLhBWk3bGwQFri1LUbGSETD7ofSfxEI1XcR0YGe9LAC7pcy-MfxfypSF0P8HVsje-38ka-qF9xjXVihFrfTFPBSpzThKiIsji8EDi8Z4auQX6l-YcK8RruXFJpsuoY1NGDDXQq0tVz0IdkeLscUtzvb-1t9GcN1VclH7WV-9cH8VWaB9CXVeruKoPjcprPr9RwEIfhVOJTOywzynKfxEHTpfF6TbeRvq1fiWzmR9PXxmjUF8MIzuFVaNxsooaXCkQ__",
    author: "Prabhash Mishra",
    date: "1 Jan 2023",
    title: "Small business & Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/908f/6e6d/adefff9c6fad99774e0aa7808b2270ab?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ph57srMQWbAydr4LSdQnl7z4Ezyk6OX2AB1girJiDy-3M3r449F9HjiCsQOH0AWRZt0Uw7fle1DXZAOjfERsZXMEjJR0BJ5ldH9YvavsvMAvSMSZox~yius7a3QZiUvjndBJzvwx-iCarcU3wP3v1mH82zF7MQNt~wCKTUGEbmqsHO7MJ0IzJyxucu-TNPa9SE6ddhrBL4xxW3Moq7l-4x1FRzjqVn5YnNkVkvB777odSsw23YXFZE0c7oY5MEG4SkiQHR6KuzHtwoLhq44InwLuK3UMjXoPUDly~DkrseXIpBnQIuM2BcUVgJICwWuTdjLFV9Ce-3c6JO0l0BdoOQ__",
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Tax", "Research", "Compliance"],
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJkDOryZoKFG26JuOvVKMdo59EHbML3gtspX3autEu6jqqu5UUfgLg6Gqjx5EVO6Axwr2-CRavcYncjkDwaTGYLhBWk3bGwQFri1LUbGSETD7ofSfxEI1XcR0YGe9LAC7pcy-MfxfypSF0P8HVsje-38ka-qF9xjXVihFrfTFPBSpzThKiIsji8EDi8Z4auQX6l-YcK8RruXFJpsuoY1NGDDXQq0tVz0IdkeLscUtzvb-1t9GcN1VclH7WV-9cH8VWaB9CXVeruKoPjcprPr9RwEIfhVOJTOywzynKfxEHTpfF6TbeRvq1fiWzmR9PXxmjUF8MIzuFVaNxsooaXCkQ__",
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Audit", "Money Back"],
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/950f/4305/76ceafadb9f758a56d19a086f7505a80?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjXlXddfCAGMT4b2TIAhIP2V9PmkLptGRI0jUyWOr7qxJFoT3cWHNFw8FyP4DFyj7jWYNoM7boAuIsk55MwPLqGSi6YuXjFbzSgqKdioUqEVVJRBeEfZaCrLIz0EG88g7I81BLluVeWuWcuwP-kfsyaELW3j6IKPSS93Kwec1yvXk~LCvwzQLiwRD1EfLxhC~SKqvHtGXZOLAPmUBgT3R~PUzrYgGps-sVHIS4NT2lzWLciiXT~3d1a~2h9ofHn~5Sboy0MOKcfty2gYA4jTQohYptw68t0Mkau~7VYhXq3t-v-opnw5jHTLvWGgZ2Knuf9AV03qPrfbepDuG8Fdog__",
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Money", "Management"],
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/1155/4089/6b913ddf85158d3f3246fba7da982400?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ms0CpBmWMpZ8D-STwmrYHeXnff~UpT72AhOSV3tS9f0gzgNKpvZuGfR8jsp6J9fdCaQuYRwl1UFcLVysjtWXYJGcvhp5XgFH8hlwCDP0lToUXrHZM8bbxuMoKSxqG48fhPF~RIQFS3kd6BQ38RiJEQbClOxYm3TcSt~i8gGYJcIVVE861rxpd53FpiTH5NQhuUmyRwarMhFiTTPzT5ppYFTxdQ7d~bWEyqSxn1UUJDR7jD~z-ksHHS~KLHzmgKat4xHf2AetQGHIyO58cOjl6dc2C7U32kpm7Ws8G~rtmgIUlL5E3l34N7lNUGhXhjQhalCai1JSm6av9tk8tj2JVA__",
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax Return", "News", "Audit"],
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/b86d/a4b5/ab8c0e971321e0daafdbc3bc3adffb48?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gnq-Cn1MDLQ5z2oQdAnWvI~BXnFNzLXqYd5QzuyGJvhvDS0ujEyoGTGKrpS0J~lJSl3ofyx1EfJu3eTnobM~kLu6cAYqWi7i8ArhXDuYXHctFuk0j4-juFsyziRiEJR3tJDQM51BLkd7M8UAYisROFNmSR2OeloqjXxw63EphPrgeCtcNWsrXM08tKcOhrSbown24iU2Qx-w83MEWkgUXVYz3KNEvJCJvw~M9ASfqbBhE55qJJoPlWOsYIxbEVYM7kcipSRRYgysnzognV6Bqzbj3-gwBGZIFywmN-DGN~dpKaOUSrdNF8vPR0llzJWijjhfOtxvYNZYgsFhgN8m5Q__",
    author: "Prabhash Mishra",
    date: "1 Jan 2023",
    title: "Small business & Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Private Limited Company", "Customer Success"],
  },
];

import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Blog = () => {
  const getTagStyle = (tag) => {
    const styles = {
      "Tax & Audit": { bg: "#F9F5FF", text: "#6941C6" },
      Management: { bg: "#F8F9FC", text: "#363F73" },
      Audit: { bg: "#F9F5FF", text: "#6941C6" },
      Money: { bg: "#F9F5FF", text: "#6941C6" },
      "Money Back": { bg: "#EEF4FF", text: "#3638CD" },
      Tax: { bg: "#F0F9FF", text: "#016BA3" },
      Research: { bg: "#EEF4FF", text: "#3638CD" },
      Compliance: { bg: "#FFF6ED", text: "#C4320A" },
      "Private Limited Company": { bg: "#F9F5FF", text: "#6941C6" },
      "Customer Success": { bg: "#F8F9FC", text: "#363F73" },
      "Tax Return": { bg: "#ECFEF3", text: "#047A49" },
      News: { bg: "#FDF2FB", text: "#C11574" },
    };

    // Default style if tag is not in the map
    return styles[tag] || { bg: "#E5ECF6", text: "#1C4670" };
  };

  return (
    <div className="py-16 md:px-20 px-6">
      <div className="container mx-auto">
        <p className="text-center text-[#F0813C] text-sm mb-2">
          EXPLORE OUR BLOGS
        </p>
        <h2 className="text-center text-3xl font-bold text-[#472D1E] mb-12">
          Accelerate Digital Transformation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden  transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="py-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <a href="/" className="flex justify-between items-center">
                  <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">
                    {post.title}
                  </h3>
                  <ArrowUpRight color="#1A1A1A" />
                </a>

                <p className="text-gray-600 mb-4">{post.description}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => {
                    const tagStyle = getTagStyle(tag);
                    return (
                      <a
                        href="/"
                        key={tagIndex}
                        style={{
                          backgroundColor: tagStyle.bg,
                          color: tagStyle.text,
                        }}
                        className="px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#1c4670] text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-opacity-90 transition-colors">
            Show more blogs
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
