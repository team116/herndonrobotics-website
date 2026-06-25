export const social_links = [
  {
    social: "facebook",
    link: "https://example.com"
  },
  {
    social: "x",
    link: "https://example.com"
  },
  {
    social: "github",
    link: "https://example.com"
  },
  {
    social: "instagram",
    link: "https://example.com"
  },
].map((social)=>({
  social: "/src/images/social/"+social.social+".svg",
  link: social.link,
}))