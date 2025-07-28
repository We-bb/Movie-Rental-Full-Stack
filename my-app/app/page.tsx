export default function HomePage() {
  return (
    <section className="flex items-center justify-center min-h-[80vh] px-4 bg-gray-900">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-white tracking-wide">
          Welcome to IMR Movie Portal
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Manage your movie collection easily. Navigate to the Movies page to view,
          add, or edit your movie database.
        </p>
      </div>
    </section>
  );
}
