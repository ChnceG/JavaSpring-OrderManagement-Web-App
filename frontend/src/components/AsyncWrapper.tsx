export type AsyncWrapperProps = {
    children: React.ReactNode;
    requests: {
      loading: boolean;
      error?: Error | null;
    }[],
  };
  
  export function AsyncWrapper({
    children,
    requests,
  }: AsyncWrapperProps): JSX.Element {
    const loading = requests.some((req) => req.loading);
  
    if (loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
  
    return (
      <div>
        {children}
      </div>
    );
  }
  