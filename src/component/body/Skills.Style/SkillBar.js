import { Bar, BarPercentage, Percentage, SkillTitle } from './'

const SkillBar = (props) => {
    

    return (    

        <div className="text-capitalize position-relative" style={{marginBottom: 2+"%"}}>
            <SkillTitle>{props.skillName}</SkillTitle>
            <Bar><BarPercentage percentageProps={props.percentage}></BarPercentage></Bar>
            <Percentage>{props.percentage}%</Percentage>
        </div>

    )
}

export default SkillBar
