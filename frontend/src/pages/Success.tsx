import InfoBox from '../components/InfoBox';

export default function Success() : JSX.Element {
    return (
        <div>
            <InfoBox className="w-[500px] m-auto text-center">
                <h1 className="text-3xl">Success!</h1>
                <p>Your order has been placed.</p>
            </InfoBox>
        </div>
    );
}