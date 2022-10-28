import Image from "next/image";
import LOGO from "../public/logo.png";
import Head from "next/head"

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Design Solo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="navbar">
        <div className="navbar-item">
          <Image src={LOGO} alt="logo goes here" width={200} />
        </div>
        <div className="navbar-item">
          <a href="#">Free Guide</a>
        </div>
      </div>

      <div className="content">
        <h1>16 WAYS TO MAKE MORE MONEY AS A FREELANCE UI/UX DESIGNER</h1>
        <p>Learn how the top 1% of UI/UX freelancers earn money.</p>
        <p>Most of these free idea list are things you never thought about.</p>

        <form>
          <input type="email" className="email" placeholder="Enter your email" />
          <input type="submit" value="READ NOW" className="btn" />
        </form>
      </div>
    </div>
  );
}
