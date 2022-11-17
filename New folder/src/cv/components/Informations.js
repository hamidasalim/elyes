import React from 'react'

export const Informations = ({ profile, user }) => {

    /* 
    Methode 1 
    const profile = props.profile;
    const user = props.user
     */
    /* 
    Méthode 2 
    const {profile , user} = props 
    */

    return (
        <section>
            <div className="photo">
                <img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/cv-profil.jpg" alt="Ma" />
            </div>
            <div className="prez">
                <h2>Qui suis-je ?</h2>
                <p>{profile}</p>
                <a href="/#" download>Télécharger mon CV</a>
            </div>
            <div className="contact">
                <h2>Informations de contact</h2>
                <div className="contact-flex">
                    <p>Nom : </p>
                    <p>GIRAUD Pierre</p>
                </div>
                <div className="contact-flex">
                    <p>Adresse : </p>
                    <p>115 Avenue des Lilas - 83000 Toulon</p>
                </div>
                <div className="contact-flex">
                    <p>Téléphone :</p>
                    <p>06 36 65 65 65</p>
                </div>
                <div className="contact-flex">
                    <p>Mail : </p>
                    <p><a href="mailto:pierre.giraud@edhec.com">pierre.giraud@edhec.com</a></p>
                </div>
                <div className="contact-flex">
                    <p>Permis :</p>
                    <p>B</p>
                </div>
                <div className="social">
                    <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/fb.png" alt="Logo Fb" /></a>
                    <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/tw.png" alt="Logo Tw" /></a>
                    <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/lk.png" alt="Logo Lk" /></a>
                    <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/yt.png" alt="Logo Yt" /></a>
                </div>
            </div>
        </section>
    )
}
