import MissedGoal from "./MissedGoal";
import MadeGoal from './MadeGoal';

function Goal(Props)
{
    const isGoal = Props.isGoal;
    return(
        <>
        {isGoal ? <MadeGoal/> : <MissedGoal/>}
        </>
    )
}

export default Goal;