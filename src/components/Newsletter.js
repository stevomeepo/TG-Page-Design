export default function Newsletter() {
    return (
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>{' '}
            <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-900">
              We care about your data. Read our{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    )
  }
