import React from "react";
import { useParams, useLocation } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../../pages/collection/collection.component";

const ShopPage = () => {
  const { pathname } = useLocation();
  const { collectionId } = useParams();

  return (
    <div className="shop-page">
      {pathname === "/shop" ? (
        <CollectionsOverview />
      ) : (
        <CollectionPage collectionId={collectionId} />
      )}
    </div>
  );
};

export default ShopPage;
