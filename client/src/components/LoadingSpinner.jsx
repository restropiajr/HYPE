import { Vortex } from 'react-loader-spinner';

export function LoadingSpinner() {
  return (
    <div className="fixed left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2">
      <Vortex
        visible={true}
        height="150"
        width="150"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'black', 'red', 'black', 'red', 'black']}
      />
    </div>
  );
}
