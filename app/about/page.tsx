import Link from 'next/link';
import Image from "next/image"
import { name, about, bio, avatar } from 'lib/info';


export default async function AboutPage() {
  return (
    <section className="">
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          height={100}
          width={100}
          priority
        />
        <p className="mb-8 pl-5">
          {bio()}
        </p>
      </div>
    </section>
  );
}