import Head from "next/head"
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Design Solo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="content">
        <h1>16 WAYS TO MAKE MORE MONEY AS A FREELANCE UI/UX DESIGNER</h1>
        <p>Learn how the top 1% of UI/UX freelancers earn money.</p>
        <p>Most of these free idea list are things you never thought about.</p>

        <form>
          <input type="email" className="email" placeholder="Enter your email" />
          <input type="submit" value="READ NOW" className="btn" />
        </form>
      </div>

      <div className="footer">
        <a href="/about">
          About
        </a>
        <a href="/articles">
          Articles          
        </a>
        <a href="free-guides">
          Free Guides
        </a>
      </div>


    </div>
  );
}
