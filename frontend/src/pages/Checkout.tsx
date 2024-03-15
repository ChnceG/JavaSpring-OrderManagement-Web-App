import CheckoutCard from '../components/CheckoutCard';
import InfoBox from '../components/InfoBox';

export default function Checkout() : JSX.Element {
    return (
        <InfoBox className="w-[500px] m-auto p-2">
            <CheckoutCard />
        </InfoBox>
    );
}