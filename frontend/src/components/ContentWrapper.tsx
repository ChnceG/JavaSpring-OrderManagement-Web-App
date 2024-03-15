export default function MainContentWrapper({ children } : { children: React.ReactNode }) : JSX.Element {
    return (
        <div className="h-screen">
            {children}
        </div>
    );
}