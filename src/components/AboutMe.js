import profilePic from "../assets/my_photo.jpg";

export default function AboutMe(props) {
  return (
    <section className="about-me" id="about_me">
      <div className="about-me heading">
        <h2>{props.aboutMe.heading}</h2>
      </div>
      <div className="about-me content">
        <img src={profilePic} alt="my profile pic" />
        <p>{props.aboutMe.general}</p>
      </div>
    </section>
  );
}
