import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";

const EducationPage = () => {
    return (
        <div>
            <Timeline>
                <TimelineItem
                    date="Septembre 2023 - Aujourd'hui"
                    title="Pré-MSc à Epitech (Nancy)"
                    description="Cette année rapproche la promotion, prépare aux besoins de l’entreprise et apprend à chacun à valoriser ses compétences."
                />
                <TimelineItem
                    date="Novembre 2021 - Septembre 2023"
                    title="Web@cadémie by Epitech (Nancy)"
                    description="Titre RNCP de niveau 5 (Bac+2) Intégrateur – développeur web"
                />
                <TimelineItem
                    date="Septembre 2015 - Juillet 2018"
                    title="Baccalauréat Littéraire à Lycée Jacques Prévert (Longjumeau)"
                    description="Baccalauréat Littéraire option Anglais renforcé"
                />
            </Timeline>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: "Éducation"
        }
    }
}

export default EducationPage;