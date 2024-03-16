import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection'
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri';


export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 8
  })

  const testimonials = [
    {
      name: "John Doe",
      quote: "EventFlix helped me discover amazing events in my area. Highly recommended!",
      image: "/assets/testimonial/testimonial1.jpg",
    },
    {
      name: "Jane Smith",
      quote: "I've been using EventFlix for booking events, and it's been a seamless experience!",
      image: "/assets/testimonial/testimonial2.jpg",
    },
    {
      name: "Michael Johnson",
      quote: "Thanks to EventFlix, I've had the chance to attend some incredible events that I wouldn't have found otherwise.",
      image: "/assets/testimonial/testimonial3.jpg",
    },
  ];

  const getRandomEmoji = () => {
    const emojis = ['😊', '👍', '🌟', '💖', '🎉', '🔥', '😍'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="text-base md:text-lg">Where Events Come to Life!</p>
              <h1 className="h2-bold md:h1-bold">Discover, Create, and Experience. Start Your Adventure Today.</h1>
            </div>
            <p className="p-regular-18 md:p-regular-22">Access insights from top-tier mentors worldwide. Join our community to elevate your skills.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
                <RiArrowRightSLine className="ml-2" />
              </Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>


      <section className="text-center wrapper my-8 md:my-12 mb-16 flex flex-col gap-2 md:gap-8 md:gap-12">
        <div>
          <h3 className="h3-bold">Who we are?</h3>
          <p className="text-lg">Discover, Create, and Experience with EventFlix</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <span role="img" aria-label="Create Event" className="text-[50px] md:text-[70px]">✨</span>
            </div>
            <h3 className="text-lg font-bold mt-4">Create Events</h3>
            <p className="text-gray-600 text-center mt-2">Host your own events and share your passion with the world.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <span role="img" aria-label="Book Event" className="text-[50px] md:text-[65px]">🎟️</span>
            </div>
            <h3 className="text-lg font-bold mt-4">Book Events</h3>
            <p className="text-gray-600 text-center mt-2">Discover exciting events and book your tickets hassle-free.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <div className="rounded-full flex items-center justify-center">
              <span role="img" aria-label="Experience Event" className="text-[45px] md:text-[60px]">🎉</span>
            </div>
            <h3 className="text-lg font-bold mt-4">Experience Events</h3>
            <p className="text-gray-600 text-center mt-2">Immerse yourself in unforgettable experiences and make memories.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="wrapper text-center">
          <div className='mb-12'>
            <h3 className="h3-bold">Testimonials</h3>
            <p className="text-lg">Our Support Speaks!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center ">
                <div className=" mb-4 relative">
                  <Image src={testimonial.image} alt={testimonial.name} width={96} height={96} className="rounded-full w-[100px] h-[100px] object-cover" />
                  <div className="absolute top-[-40px] left-[40px] flex items-center justify-center w-full h-full">
                    <span role="img" aria-label="Random Emoji" className="text-3xl">{getRandomEmoji()}</span>
                  </div>
                </div>
                <p className="text-gray-800 text-center">{testimonial.quote}</p>
                <p className="text-gray-600 text-center mt-2">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Separator />

      <section id="events" className="wrapper my-12 flex flex-col gap-8 md:gap-12">
        <div>
          <p className="text-lg">Book your ticket now!</p>
          <h3 className="h3-bold">Secure your best future</h3>
        </div>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          totalPages={events?.totalPages}
          limit={10}
          page={page}
        />
      </section>
    </>
  )
}
