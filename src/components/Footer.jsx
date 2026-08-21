import Logo from "../assets/logo.png";
import TitleCard from "../controllers/TitleCard";

const linkClass = "mb-2 font-light text-white/50 hover:text-accent transition-colors duration-200";

const Footer = () => {
  return (
    <div className="w-full flex justify-center border-t border-ink-border mt-32">
      <div className="grid grid-flow-row md:grid-flow-col w-full max-w-7xl p-12 gap-10">
        <div>
          <img src={Logo} alt="logo" className="h-12 w-full md:w-max object-contain" />
        </div>
        <div className="flex w-full justify-between flex-wrap gap-10">
          <TitleCard animation={false} title="#rabbithole" titleSize="md" titleWeight="600">
            <div className="mt-4 flex flex-col">
              <p className={linkClass}><a href="#">Memex</a></p>
              <p className={linkClass}><a href="#">Niklas Luhmann&apos;s Zettelkasten</a></p>
              <p className={linkClass}><a href="#">Collective IQ</a></p>
              <p className={linkClass}><a href="#">Intelligence amplification</a></p>
              <p className={linkClass}><a href="#">Tim Berners-Lee&apos;s Giant Global Graph</a></p>
              <p className={linkClass}><a href="#">Polymath Project</a></p>
              <p className={linkClass}><a href="#">Category Theory for Scientists</a></p>
              <p className={linkClass}><a href="#">Ideaflowplan.jacobcole.net</a></p>
              <p className={linkClass}><a href="#">Privacy Policy</a></p>
            </div>
          </TitleCard>
          <TitleCard animation={false} title="Latest Updates" titleSize="md" titleWeight="600">
            <div className="mt-4 flex flex-col">
              <p className={linkClass}><a href="#">Blog</a></p>
              <p className={linkClass}><a href="#">Funding</a></p>
              <p className={linkClass}><a href="#">Bullet View Video</a></p>
            </div>
          </TitleCard>
          <TitleCard animation={false} title="Contact" titleSize="md" titleWeight="600">
            <div className="mt-4 flex flex-col">
              <p className={linkClass}><a href="#">Email</a></p>
              <p className={linkClass}><a href="#">LinkedIn</a></p>
              <p className={linkClass}><a href="#">Facebook</a></p>
              <p className={linkClass}><a href="#">Twitter</a></p>
            </div>
          </TitleCard>
        </div>
      </div>
    </div>
  );
};

export default Footer;
