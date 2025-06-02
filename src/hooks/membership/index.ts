import { useState, useEffect } from 'react';
import { MembershipService, Membership } from '@/src/services/membership';

export interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  description: string;
  popular?: boolean;
}

const convertMembershipToPlan = (membership: Membership): Plan => {
  return {
    id: membership.id,
    name: membership.name,
    monthlyPrice: Math.round(membership.pricePerMonth * 100),
    yearlyPrice: Math.round(membership.pricePerYear * 100),
    description: membership.description,
    features: [],
    popular: membership.name === 'Pro',
  };
};

export const useMemberships = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        const memberships = await MembershipService.getAllMemberships();
        // Filter out the free plan and convert remaining plans
        const convertedPlans = memberships
          .filter(membership => membership.name !== 'Free')
          .map(convertMembershipToPlan);
        
        setPlans(convertedPlans);
        
        // Set Pro plan as default selected plan
        const proPlan = convertedPlans.find(plan => plan.name === 'Pro');
        setSelectedPlan(proPlan || convertedPlans[0]);
        setError(null);
      } catch (err) {
        console.error('Error fetching memberships:', err);
        setError('Failed to load membership plans');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemberships();
  }, []);

  return {
    plans,
    selectedPlan,
    setSelectedPlan,
    isLoading,
    error
  };
}; 