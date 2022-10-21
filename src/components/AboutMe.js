import profilePic from "../assets/my_photo.jpg";

export default function AboutMe({ aboutMe }) {
  return (
    <section className="about-me" id="about_me">
      <div className="about-me heading">
        <h2>{aboutMe.heading}</h2>
      </div>
      <div className="about-me content">
        <img src={profilePic} alt="my profile pic" />
        <p>{aboutMe.general}</p>
      </div>
    </section>
  );
}
