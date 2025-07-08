const singleBlog = ({ params }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Blog Post: {params.slug}</h1>
      <p className="text-lg">This is the blog post with slug: {params.slug}</p>
    </div>
  );
};

export default singleBlog;