import { Trans } from "@lingui/macro"

export const ContactPath = "/Contact"

const Contact = () => {
    return <div>
        <br />
        <span>
            <Trans>Email</Trans>
        </span>
        <br />
        <a className="no-padding" href="mailto:bouchard.bergeron.antoine@gmail.com" >bouchard.bergeron.antoine@gmail.com</a>
        <br />
        <br />
        <span style={{ paddingTop: "1rem" }}>LinkedIn</span>
        <br />
        <a className="no-padding" href="https://linkedin.com/in/antoine-bouchard-bergeron-91116387" >profile</a>
        <br />
        <br />
        <img src="pp.jpg" alt="selfie" style={{ maxWidth: "100%", alignSelf: "center", justifySelf: "center" }} />
    </div>
}

export default Contact