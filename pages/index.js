import { useEffect, useState, useRef } from "react";
import Head from "next/head";

const Home = () => {
  const countDownDate = new Date("Jun 03, 2020 15:00:00 MDT").getTime();
  const [counter, setCounter] = useState();

  useInterval(() => {
    const now = new Date().getTime();
    const timeleft = countDownDate - now;
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setCounter(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  }, 1000);

  return (
    <div className="container">
      <Head>
        <title>DevCasts</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta
          name="msapplication-TileImage"
          content="/ms-icon-144x144.png"
        ></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <main>
        <img className="logo-image" src="/logo-clean.png" alt="devcasts logo" />
        {/* <p className="subtitle">podcast (w/guests) + live coding</p> */}
        <div className="flex-grow" />
        <p className="timer-wrapper">
          <span className="timer">{counter}</span>
          (Jun 3, 3pm MDT)
        </p>
      </main>

      <footer>
        <p>
          Subscribe now on{" "}
          <a
            href="https://twitch.tv/snowkid314"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </a>{" "}
          to be notified
        </p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: url(neon-pixels.jpg) no-repeat center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          color: #ff30aa;
        }

        main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .flex-grow {
          flex-grow: 1;
        }

        .subtitle {
          font-size: 2rem;
        }

        .timer-wrapper {
          font-size: 1.8rem;
          text-align: center;
        }

        .timer {
          display: block;
          font-size: 2.5rem;
          padding: 16px 0;
          font-weight: bold;
        }

        .logo-image {
          width: 800px;
          max-width: 80%;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
        }

        @media (max-width: 830px) {
          .timer {
            font-size: 2rem;
          }
          .timer-wrapper {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 600px) {
          .timer {
            font-size: 1.5rem;
          }
          .timer-wrapper,
          footer {
            font-size: 1rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Home;
