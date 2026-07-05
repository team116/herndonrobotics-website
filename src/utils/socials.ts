export const social_links = [
  {
    social: "facebook",
    link: "https://www.facebook.com/Team.116/",
  },
  {
    social: "x",
    link: "https://x.com/team116",
  },
  {
    social: "github",
    link: "https://github.com/team116/",
  },
  {
    social: "instagram",
    link: "https://www.instagram.com/herndonrobotics",
  },
  {
    social: "tba_lamp",
    link: "https://www.thebluealliance.com/team/116",
  },
  {
    social: "youtube",
    link: "https://www.youtube.com/@herndonrobotics9787",
  },
].map((social) => ({
  social: "/social/" + social.social + ".svg",
  link: social.link,
}));
