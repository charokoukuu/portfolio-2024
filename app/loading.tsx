import HexagonLoader from '@/components/ui/HexagonLoader';

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <HexagonLoader />
    </div>
  );
}
