import '../styles/socials.css';

export default function SocialsComponent({ socialsList }) {

    const availableSocials = ["Instagram", "Spotify", "Twitter"];
    const filteredSocials = socialsList.filter((item) => availableSocials.includes(item.title));

    return (
        <div className="socials-row">
            {
                filteredSocials.map((social) => {
                    return (
                        <div className="socials-col">
                            <a href={social.link} target="_blank"><i class={"fab fa-2x fa-" + social.title.toLowerCase() + " " + social.title.toLowerCase() + "-icon"}></i></a> {social.count}
                        </div>
                    );
                })
            }
        </div>
    );
}