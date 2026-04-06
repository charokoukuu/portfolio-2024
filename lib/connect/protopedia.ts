import { Protopedia } from '@/lib/types/prototype';

export const getProtopedia = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_PROTOPEDIA_API_ENDPOINT ?? '',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Protopedia[] = await response.json();

  return data;
};
