import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { FaReddit, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/mohammed-shahid1/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Shahid0324-GIT"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <div>
          <a
            href="https://instagram.com/shahid_jameel1?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
      <div>
        <div>
          <a
            href="https://reddit.com/u/gomugomupirate/s/dNDKnjmUFB"
            target="_blank"
            rel="noreferrer"
          >
            <FaReddit />
          </a>
        </div>
      </div>
      <div>
        <div>
          <a
            href="https://youtube.com/@piratekingpencil4352?si=YyFNPXZ-p0JyUDG3"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
