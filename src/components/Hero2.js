import Image from 'next/image';

export default function Hero2() {
  return (
    <div className="bg-white">
      <div className="overflow-hidden pt-32 sm:pt-14">
        <div className="bg-mint-green">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative pb-16 pt-48 sm:pb-24">
              <div>
                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl">
                  Final Stock.
                  <br />
                  Up to 50% off.
                </h2>
                <div className="mt-6 text-base">
                  <a href="#" className="font-semibold text-gray-800 hover:text-gray-600">
                    Shop the sale
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>

              <div className="absolute -top-32 left-1/2 min-w-max -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                <div className="ml-24 flex space-x-6 sm:ml-3 lg:space-x-8">
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        src="/hero_1.png"
                        alt="Hero image 1"
                        width={288}
                        height={288}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <Image
                        src="/hero_2.png"
                        alt="Hero image 2"
                        width={288}
                        height={288}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        src="/hero_3.png"
                        alt="Hero image 3"
                        width={288}
                        height={288}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <Image
                        src="/hero_4.png"
                        alt="Hero image 4"
                        width={288}
                        height={288}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  {/* New column */}
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        src="/smart-home.png"
                        alt="Smart Home"
                        width={288}
                        height={288}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <Image
                        src="/TDOS5-HL-W.png"
                        alt="Smart Switch"
                        width={288}
                        height={288}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
