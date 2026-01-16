

import i from "../../../assets/ourProcess/icon-i.png";
import ii from "../../../assets/ourProcess/icon-ii.png";
import iii from "../../../assets/ourProcess/icon-iii.png";
import iv from "../../../assets/ourProcess/icon-iv.png";

import dividerArrowi from '../../../assets/ourProcess/arrow-i.png'
import dividerArrowii from '../../../assets/ourProcess/arrow-ii.png'
import dividerArrowiii from '../../../assets/ourProcess/arrow-iii.png'

const ProcessData = [
  {
    title:"Strategy",
    description:
      "We start by understanding your business, goals, and audience. We analyze your market and competitors, then build a clear strategy tailored to your specific needs.",
    icon: i,
    dividerArrow:dividerArrowi
  },
  {
    title: "Execution",
    description:"Our team implements and optimizes all elements according to the strategy for conversions.Campaigns are launched and monitored.",
    icon: ii,
    dividerArrow:dividerArrowii,
    isDown:true
  },
  {
    title: "Results & Reporting",
    description:
      "We track all relevant metrics.You see exactly what is working and what needs adjustment.Regular reports keep you informed.There is no guesswork,only data.",
    icon: iii,
    dividerArrow:dividerArrowiii
  },
  {
    title: "Optimization & Support",
    description: "Digital marketing is an ongoing process. We continuously test,optimize,and improve. You receive 30 days of complimentary post-launch support.",
    icon: iv,
  }
 
];

export default ProcessData;
