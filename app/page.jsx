import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/main-header/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Foodie Fuel: Feed Your Obsession</h1>
            <p>
              Embark on a culinary quest. Explore dishes from every corner of
              the earth.
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Foodies Community </Link>
            <Link href="/meals"> Explore meals </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Welcome to the Global Kitchen: Your Gateway to Culinary Adventures!
          </p>
          <p>
            NextLevel Food isn&apos;t a recipe book, it&apos;s a passport to a
            world of flavors! Share your heritage dishes, discover exotic
            cuisines, and connect with food lovers across the globe.
          </p>
        </section>
        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>Because Food is the Best Kind of Travel.</p>
          <p>
            Embark on a delicious journey with NextLevel Food. Explore new
            cultures through their cuisine, share your own culinary traditions,
            and connect with fellow food explorers.
          </p>
        </section>
      </main>
    </>
  );
}
