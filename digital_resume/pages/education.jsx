import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";

const EducationPage = () => {
    return (
        <div>
            <Timeline>
                <TimelineItem
                    date="Septembre 2024 - Aujourd'hui"
                    title="MSc1 à Epitech (Nancy)"
                    description="Cette première année de Master me permet de me spécialiser en Cybersécurité, tout en développant des compétences complémentaires dans le domaine du Cloud, afin de répondre aux enjeux modernes des entreprises."
                />
                <TimelineItem
                    date="Septembre 2023 - Septembre 2024"
                    title="Pré-MSc à Epitech (Nancy)"
                    description="Cette année de Pré-MSc met l'accent sur le développement de compétences professionnelles, la préparation aux exigences du monde de l'entreprise et la valorisation des expertises individuelles au sein d'une promotion."
                />
                <TimelineItem
                    date="Novembre 2021 - Septembre 2023"
                    title="Web@cadémie by Epitech (Nancy)"
                    description="Titre RNCP de niveau 5 (Bac+2) en Intégration et Développement Web, axé sur la conception, le développement et l’optimisation de solutions numériques modernes."
                />
                <TimelineItem
                    date="Septembre 2015 - Juillet 2018"
                    title="Baccalauréat Littéraire à Lycée Jacques Prévert (Longjumeau)"
                    description="Baccalauréat Littéraire – Option Anglais Renforcé : Cette spécialisation m'a permis de développer une maîtrise approfondie de la langue anglaise, en enrichissant mes compétences en littérature, tout en renforçant mon esprit d'analyse critique."
                />
            </Timeline>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: "Julia Jorge - Éducation"
        }
    }
}

export default EducationPage;