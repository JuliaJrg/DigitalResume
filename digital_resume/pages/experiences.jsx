import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";

const ExperiencesPage = () => {
    return (
       <div>
            <Timeline>
                <TimelineItem
                    date="Novembre 2022 - Mai 2023"
                    title="Alternante Développement web - DIAMONTIS Informatique (Ay-sur-Moselle)"
                    description="Développeuse web chez DIAMONTIS Informatique. Réalisations de sites web avec utilisation de Symfony 6 et MySQL. "
                />
                <TimelineItem
                    date="Ocotbre 2021"
                    title="Employée polyvalente - McDonald's (Nancy)"
                    description="Travail d'équipe et adaptabilité. Gestion des produits et règles d'hygiènes et de sécurité alimentaire."
                />
                <TimelineItem
                    date="Août 2021"
                    title="Animatrice BAFA - Association Jeunesse Plainfinoise (Mèze)"
                    description="Animation dans un centre de vacance, encadrement et animation d'un groupe d'enfants de 6 à 15 ans."
                />
                <TimelineItem
                    date="Octobre 2020 - Juillet 2021"
                    title="Service Civique - École maternelle de Boudonville (Nancy)"
                    description="Aider les professeurs avec les élèves. Remplir des missions au sein de l'école. Gérer des ateliers avec des petits groupes d'élèves"
                />
            </Timeline>
       </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: "À propos"
        }
    }
}

export default ExperiencesPage;