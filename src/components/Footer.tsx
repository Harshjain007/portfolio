import { siteConfig } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name} &middot; Built with React.js &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
