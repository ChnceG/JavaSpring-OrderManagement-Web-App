import InfoBox from "../components/InfoBox";
import spoon from "../assets/spoon.png";
import tank from "../assets/tank.png";
import giraffe from "../assets/giraffe.png";

export default function Home() : JSX.Element {
    return (
        <div className="mx-20">
            <div className="flex">
                <InfoBox className="m-auto">
                    <h1 className="m-2 text-xl">Welcome to the Online Order Management System</h1>
                    <h1 className="text-center"> Please buy our various products we sell legally </h1>
                </InfoBox>
            </div>
            <div className="flex justify-evenly mt-10">
                <InfoBox> 
                    <img src={spoon} alt="spoon" />
                </InfoBox>
                <InfoBox>
                    <img src={tank} alt="tank" />
                </InfoBox>
                <InfoBox>
                    <img src={giraffe} alt="giraffe" />
                </InfoBox>
            </div>
        </div>
    );
}