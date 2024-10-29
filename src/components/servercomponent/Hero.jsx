// app/components/Hero.js

export default function Hero() {
    return (
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">Welcome to My Personal Blog</h1>
          <p className="text-lg mt-4">Sharing insights, stories, and my journey</p>
          <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100">
            Read the Blog
          </button>
        </div>
      </section>
    );
  }
  