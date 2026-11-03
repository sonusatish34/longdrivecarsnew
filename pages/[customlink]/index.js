export default function LegacyRoute() {
  return null;
}

export async function getServerSideProps({ params }) {
  const legacyHomepagePaths = new Set([
    'hyderabad',
    'selfdrivecars_hyderabad',
    'car_rentals_in_hyderabad',
    'index.html',
  ]);
  const customlink = String(params?.customlink || '').toLowerCase();

  if (legacyHomepagePaths.has(customlink)) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  return { notFound: true };
}
