import { useEffect, useState, useRef } from "react";
import Head from "next/head";

const Home = () => {
  const countDownDate = new Date("Jun 17, 2020 15:00:00 MDT").getTime();
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

      <img className="logo-bg" src="logo-headphones-bg.png" />
      <main>
        <p className="subtitle">live coding... podcast style!</p>
        <div className="guests">
          <a href="https://twitter.com/tannerlinsley" target="_blank">
            <div className="guest">
              <p>June 10, 2020</p>
              <h3>Tanner Linsley</h3>
              <p>react-query</p>
              <img src="tanner.png" alt="Tanner Linsley" />
            </div>
          </a>
          <a href="https://twitter.com/coffeecraftcode" target="_blank">
            <div className="guest">
              <p>June 17, 2020</p>
              <h3>Christina Gorton</h3>
              <p>React + Greensock</p>
              <img src="christina.png" alt="Christina Gorton" />
            </div>
          </a>
          <a href="https://twitter.com/swoleengineer" target="_blank">
            <div className="guest">
              <p>July 1, 2020</p>
              <h3>Joram Clervius</h3>
              <p>Getting into tech</p>
              <img src="joram-transparent.png" alt="Joram Clervius" />
            </div>
          </a>
          <a href="https://twitter.com/swyx" target="_blank">
            <div className="guest">
              <p>July 15, 2020</p>
              <h3>Shawn Wang</h3>
              <p>The coding interview</p>
              <img src="swyx.png" alt="Shawn Wang" />
            </div>
          </a>
        </div>
        <div className="flex-grow" />
        <p className="timer-wrapper">
          Launching in <span className="timer">{counter}</span>
          (Jun 10, 3pm MDT)
        </p>
      </main>

      <p>
        Follow and subscribe now on{" "}
        <a
          href="https://twitch.tv/snowkid314"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitch
        </a>{" "}
        to be notified
      </p>

      <style jsx>{`
        .container {
          height: calc(100vh - 86px);
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .logo-bg {
          position: fixed;
          bottom: -5%;
          right: -8%;
          width: 80%;
          max-width: 600px;
          overflow: hidden;
          z-index: -1;
          opacity: .7;
        }

        main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        a {
          color: #e12c9d;
          font-weight: bold;
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

        .guests {
          display: flex;
          flex-flow: row wrap;
          height: 100%;
          align-items: center;
          justify-content: center;
        }

        .guest {
          width: 250px;
          padding: 16px 16px 0;
          margin: 32px;
          text-align: center;
          cursor: pointer;
          background-color: #161e5a;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }

        main a {
          color: #fff;
          text-decoration: none;
          font-weight: normal;
        }

        .guest > img {
          width: 100%;
        }

        .guest > p {
          margin: 0;
        }

        .guest > h3 {
          margin: .6em;
          font-size: 1.5em;
        }

        @media (max-width: 1273px) {
          .guest {
            width: 200px;
            margin: 16px;
          }

          .guest > p {
            font-size: .8em;
          }

          .guest > h3 {
            font-size: 1em;
          }
        }

        @media (max-width: 830px) {
          .timer {
            font-size: 2rem;
          }
          .subtitle {
            font-size: 1.8rem;
          }
          .timer-wrapper {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 945px) {
          .container {
            overflow-y: scroll;
          }
        }

        @media (max-width: 600px) {
          .timer {
            font-size: 1.5rem;
          }
          .subtitle {
            font-size: 1.5rem;
          }
          .container {
            height: auto;
            overflow: hidden;
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
