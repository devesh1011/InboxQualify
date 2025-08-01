// 'use client';

// import { ReactNode, useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Loader from './ui/loader';
// import Offline from './offline';
// import { Plan } from '@/lib/types';

// interface ProtectedRouteProps {
// 	children: ReactNode;
// 	requiredPlan?: Plan;
// }

// export const ProtectedRoute = ({ children, requiredPlan = 'starter' }: ProtectedRouteProps) => {
// 	const { user, authLoading } = useAuth();
// 	const { getUser } = useFirestore();
// 	const router = useRouter();
// 	const onlineStatus = useOnlineStatus();
// 	const [accessAllowed, setAccessAllowed] = useState(requiredPlan === 'starter');

// 	useEffect(() => {
// 		if (!authLoading && !user) {
// 			router.replace('/login');
// 		}
// 	}, [user, authLoading, router]);

// 	useEffect(() => {
// 		const fetchUserData = async () => {
// 			if (requiredPlan !== 'starter') {
// 				const userData = await getUser();
// 				if (userData?.plan === requiredPlan) {
// 					setAccessAllowed(true);
// 				} else {
// 					toast({
// 						title: 'Access Denied',
// 						description: `You are not allowed to access this page. Please upgrade your plan to access this page.`,
// 						variant: 'destructive',
// 					});
// 					router.replace('/pricing');
// 				}
// 			}
// 		};

// 		fetchUserData();
// 	}, [requiredPlan, router]);

// 	if (authLoading) {
// 		return <Loader />;
// 	}

// 	if (!onlineStatus) {
// 		return <Offline />;
// 	}

// 	if (!accessAllowed) {
// 		return null;
// 	}

// 	return children;
// };
