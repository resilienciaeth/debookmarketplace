import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import  from '@thirdweb-dev/sdk'

function Collection() {
  const router = useRouter();
  const { provider } = useWeb3();
  const collectionId = router.query;
  const [collection, setCollection] = useState({});
  const [nfts, setNfts] = useState([]);
  const [listings, setListings] = useState([]);

  const nftModule = useMemo(() => {
    if (!provider) return;

    const sdk = getNFTModule(collectionId);
  }, [provider]);
  return (
    <Link>
      {router.query.collectionId}
    </Link>
  );
}

export default Collection;
