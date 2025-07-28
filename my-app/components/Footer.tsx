export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-8 text-center text-sm select-none space-y-2">
        <p className="font-semibold">Internet Movies Rental Company (IMR)</p>
        <p>© {new Date().getFullYear()} IMR, Inc. All rights reserved.</p>
        <p>1234 Movie Lane, Suite 100, Film City, CA 90001</p>
        <p>Email: support@imrmovies.com | Phone: (999) 123-4567</p>
        <p>
          Follow us on{' '}
          <a href="#" className="underline hover:text-white">
            Twitter
          </a>{' '}
          |{' '}
          <a href="#" className="underline hover:text-white">
            Facebook
          </a>{' '}
          |{' '}
          <a href="#" className="underline hover:text-white">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}