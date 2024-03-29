import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
      <div className="relative isolate pt-24 ">
        <div
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80a2ff] to-[#aafc89] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Your Path to Recovery Starts Here.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                You do your excercise,{" "}
                <span className="text-accent dark:text-primary">
                  Let AI handle the monitoring.
                </span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/dashboard"
                  className="rounded-md bg-primary-foreground px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-primary focus:outline-none focus:ring focus:border-indigo-600"
                >
                  Get started
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
                >
                  View Pricing <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] -z-10 transform-gpu"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}
