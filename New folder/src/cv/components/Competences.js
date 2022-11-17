import React from 'react'

export const Competences = () => {
    return (
        <section>
            <h2>Compétences</h2>
            <h3 className="h3gauche">Professionnelles</h3>
            <div className="comp">
                <p>HTML / CSS</p>
                <div className="conteneur-barre"><span className="barre c100"></span></div>
            </div>
            <div className="comp">
                <p>PHP / MySQL</p>
                <div className="conteneur-barre"><span className="barre c95"></span></div>
            </div>
            <div className="comp">
                <p>JavaScript</p>
                <div className="conteneur-barre"><span className="barre c90"></span></div>
            </div>
            <div className="comp">
                <p>SEO</p>
                <div className="conteneur-barre"><span className="barre c100"></span></div>
            </div>
            <h3 className="h3gauche">Personnelles</h3>
            <div className="comp2">
                <p>Créativité</p>
                <p>90%</p>
                <div className="conteneur-barre2"><span className="barre c90"></span></div>
            </div>
            <div className="comp2">
                <p>Adaptation</p>
                <p>85%</p>
                <div className="conteneur-barre2"><span className="barre c85"></span></div>
            </div>
            <div className="comp2">
                <p>Sérieux</p>
                <p>95%</p>
                <div className="conteneur-barre2"><span className="barre c95"></span></div>
            </div>
            <div className="comp2">
                <p>Pédagogie</p>
                <p>95%</p>
                <div className="conteneur-barre2"><span className="barre c95"></span></div>
            </div>
        </section>
    )
}
