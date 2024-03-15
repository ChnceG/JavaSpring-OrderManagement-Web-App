import InfoBox from "../components/InfoBox";
import Login from "../components/Login";

export default function Auth() : JSX.Element {
    return (
        <div>
            <InfoBox className="w-[500px] m-auto">
                <Login className="p-4" />
            </InfoBox>
        </div>
    );
}