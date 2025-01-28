import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";

const ExperiencesPage = () => {
    return (
       <div>
            <Timeline>
                <TimelineItem
                    date="Septembre 2024 - Aujourd'hui"
                    title="Alternante QA - Tiime (Nancy)"
                    description="En tant qu'alternante QA chez Tiime, je participe activement à l'amélioration continue de la qualité des produits en effectuant des tests fonctionnels et de performance, en identifiant et en signalant les bugs, et en collaborant avec les équipes de développement pour garantir un produit final optimal."
                />
                <TimelineItem
                    date="Janvier 2023 - Août 2024"
                    title="Alternante Architecte Système Réseau et Sécurité - PretUp (Nancy)"
                    description="En tant qu'alternante chez PretUp, j'ai participé au développement, assuré la maintenance et le débogage des plateformes, mené une refonte graphique pour améliorer l'interface utilisateur, et effectué des tests de sécurité."
                />
                <TimelineItem
                    date="Novembre 2022 - Mai 2023"
                    title="Alternante Développement web - DIAMONTIS Informatique (Ay-sur-Moselle)"
                    description="En tant que développeuse web chez DIAMONTIS Informatique, j'ai contribué à la création de sites web en utilisant Symfony 6 et MySQL, mettant en œuvre des solutions techniques adaptées aux besoins clients."
                />
                <TimelineItem
                    date="Ocotbre 2021"
                    title="Employée polyvalente - McDonald's (Nancy)"
                    description="Expérience en travail d'équipe et en gestion des opérations, avec une attention particulière à l'application des normes d'hygiène et de sécurité alimentaire."
                />
                <TimelineItem
                    date="Août 2021"
                    title="Animatrice BAFA - Association Jeunesse Plainfinoise (Mèze)"
                    description="Responsable de l'encadrement et de l'animation d'un groupe d'enfants âgés de 6 à 15 ans au sein d'un centre de vacances, avec pour mission de concevoir et de mettre en place des activités adaptées aux besoins et aux intérêts des participants."
                />
                <TimelineItem
                    date="Octobre 2020 - Juillet 2021"
                    title="Service Civique - École maternelle de Boudonville (Nancy)"
                    description="Assistance aux enseignants dans la gestion des élèves et des activités pédagogiques, prise en charge de missions diverses au sein de l'établissement, et animation d'ateliers éducatifs pour petits groupes d'enfants."
                />
            </Timeline>
       </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: "Julia Jorge - Expériences"
        }
    }
}

export default ExperiencesPage;