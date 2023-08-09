import React, { useCallback } from 'react';
import { IDKitWidget } from "@worldcoin/idkit";
import styles from "../../styles/Home.module.css";
import sty from '../../styles/styles.module.scss';
import type { ISuccessResult } from "@worldcoin/idkit";
import { useRouter } from 'next/navigation';


export default function Home() {
	const router = useRouter();
	const handleProof = useCallback((result: ISuccessResult) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), 3000);
			// NOTE: Example of how to decline the verification request and show an error message to the user
		});
	}, []);

	const onSuccess = (result: ISuccessResult) => {
		console.log(result);
		router.push('/presentation');
	};

	return (
		<div className={styles.box}>
		<div className={sty.div}>WELCOME TO THE CLUB  </div>
		<div className={styles.container}>
			 <link rel="stylesheet" href="/styles.css" />
			
			
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60%" }}>
		
				<IDKitWidget
					action="entrance"
					signal="my_signal"
					onSuccess={onSuccess}
					handleVerify={handleProof}
					app_id="app_161cdf0a7bd156bc5aa00d14ee9f7083"
					// walletConnectProjectId="get_this_from_walletconnect_portal"
				>
					
					{({ open }) => <button className="glow-on-hover" type="button" onClick={open}>THE ENTRANCE IS HERE !</button>}
				</IDKitWidget>


			</div>
			</div>
		</div>
	);
}
