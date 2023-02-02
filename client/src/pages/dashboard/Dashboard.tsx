import React from "react";
import CardItem from "../../components/card-item/CardItem";
import CardItemTwo from "../../components/card-item/CardItemTwo";
import PremiumMember from "../../components/premium/PremiumMember";
import Services from "../services/Services";

const Dashboard = () => {
  return (
    <>
      <div className="mb-12 md:gap-5 md:mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-8 my-24">
        {[...Array(4)].map((item, i) => (
          <CardItem key={i} />
        ))}
      </div>
      <CardItemTwo />
      <PremiumMember />
      <Services />
    </>
  );
};

export default Dashboard;
