import Application from '../ApplicationButton/Application'
import './Lower.css'
function Lower() {
    const ArrayOfObject = [
        { AppName: "GitHub" },
        { AppName: "Frontend Mentor" },
        { AppName: "LinkedIn" },
        { AppName: "Twitter" },
        { AppName: "Instagram" },
    ]
    return (
        <div id="Lower">
            {ArrayOfObject.map((Item) => {
                return (
                    <Application AppName={Item.AppName}></Application>
                );
            })}







            {/* <Application AppName="GitHub"></Application>
            <Application AppName="Frontend Mentor"></Application>
            <Application AppName="LinkedIn"></Application>
            <Application AppName="Twitter"></Application>
            <Application AppName="Instagram"></Application> */}
        </div>
    )
}
export default Lower