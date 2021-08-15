import React from 'react'
import {Skill, SkillBox, SkillComp} from './Skills.Style'
import SkillBar from './Skills.Style/SkillBar'

const Skills = () => {
    return (
        <Skill className="vh-100 vw-100 d-flex align-items-center justify-content-center">
            <SkillBox className="container-fluid d-flex justify-content-center py-3 ">
                <SkillComp className="text-black">
                    <h1 className="text-center text-uppercase" style={{fontFamily: 'cursive'}}>Skills</h1>
                    <SkillBar skillName="html" percentage={80}/>
                    <SkillBar skillName="css" percentage={70}/>
                    <SkillBar skillName="php" percentage={60}/>
                    <SkillBar skillName="javascript" percentage={80}/>
                    <SkillBar skillName="reactjs" percentage={70}/>
                </SkillComp>
            </SkillBox>
        </Skill>
    )
}

export default Skills;
