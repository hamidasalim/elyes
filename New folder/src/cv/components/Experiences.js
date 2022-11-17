import React from 'react'

export const Experiences = ({ experiences }) => {
    console.log(experiences)
    return (
        <section>
            <h2>Expériences professionnelles</h2>
            {
                /* parcour du tableau experiences
                pour chaque experience (exp)
                */
                experiences.map((exp , i) =>

                    <div className="exp" key={i}>
                        <div className="exp-logo">
                            <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/pierre.png" alt="Logo de Pierre Giraud" /></a>
                        </div>
                        <div className="exp-info">
                            <h3>{exp.name}</h3>
                            <h4>{exp.company ? exp.company.name : ''}</h4>
                            <h4>{exp.company && exp.company.name }</h4>

                            <h4>{exp.start_date}- {exp.end_date}</h4>
                        </div>
                        <div className="exp-desc">
                            <p>
                                {exp.description}
                            </p>
                        </div>
                    </div>

                )
            }


        </section>
    )
}
