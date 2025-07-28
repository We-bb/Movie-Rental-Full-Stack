export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-8 text-center text-sm select-none">
        <p>Internet Movies Rental Company (IMR)</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
