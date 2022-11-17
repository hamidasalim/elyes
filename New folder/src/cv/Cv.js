import { Competences } from './components/Competences'
import { Experiences } from './components/Experiences'
import { Footer } from './components/Footer'
import { Formations } from './components/Formations'
import { Header } from './components/Header'
import { Informations } from './components/Informations'
import { Interets } from './components/Interets'
import './cv.css'

export const Cv = () => {

    const title = "CV Foulen ben Foulen"

    const profile = "Diplômé d'un master 2 En trepreneuriat et Innovation (Programme Grande Ecole EDHEC), je me tourne ensuite vers le développement informatique et les thématiques liées au web comme l'optimisation du référencement (SEO)."
    const user = {
        nom: "Ben Foulen ",
        prenom: "Ali",
        email: "test@gmail.com",
        adresse: "Rue aaa , Sousse , 4000",
        telephone: 25142514,
        permis: 'B',
        social_media: {
            facebook: 'http://facebook.com',
            twitter: 'http://twitter.com',
            google: 'http://google.com'
        }
    }
    const experiences = [
        {
            name: 'Créateur', start_date: 'Avril 2014', end_date: 'Aujourd\'hui',
            description: "Créateur des sites pierre-giraud.f",
            company: {
                name: 'Pierre Giraud',
                logo: 'https://www.pierre-giraud.com/wp-content/uploads/2019/07/pierre.png'
            }
        },
        {
            name: 'Responsable SEO et contenu', start_date: 'Novembre 2017 ', end_date: 'Novembre 2018',
            description: "Créateur des sites pierre-giraud.f"
        },
        {
            name: 'Stage marketing',
            start_date: 'Sep 2014',
            end_date: 'October 2015',
            description: "Créateur des sites pierre-giraud.f",
            company: {
                name: 'Pierre Giraud',
                logo: 'https://www.pierre-giraud.com/wp-content/uploads/2019/07/pierre.png'
            }
        },

    ]
    return (

        <>
            {/* afficher le composant Header avec le nom CV Foulen ben Foulen */}
            <Header nom={title} />

            <Informations profile={profile} user={user}></Informations>
            <Experiences experiences={experiences} />
            <Formations />
            <Competences />
            <Interets />

            <Footer />
        </>
    )
}