import { Vortex } from 'react-loader-spinner';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bottom-[30%] flex items-center justify-center">
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
