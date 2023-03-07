import { useRouter } from 'next/router';
import React from 'react';

const Detail = () => {
  const {
    query: { travelogueId },
  } = useRouter();

  console.log(travelogueId, typeof travelogueId);

  return <div>Detail</div>;
};

export default Detail;
