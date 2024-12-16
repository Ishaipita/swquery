import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import HorizontalLogo from "../../../assets/images/logo-horizontal.png";

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
				isScrolled
					? "bg-black bg-opacity-70 backdrop-blur-md"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-6 py-4 flex justify-between items-center h-full">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="flex items-center space-x-4"
				>
					<Image
						src={HorizontalLogo}
						alt="Logo"
						width={150}
						unoptimized
						className="cursor-pointer"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="space-x-4 flex items-center"
				>
					<motion.button
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="bg-[#1A1A1A] bg-opacity-50 text-gray-400 px-4 py-2 rounded-full border border-[#14F195] hover:opacity-80 transition-all"
					>
						<a
							href="https://bretasarthur1.gitbook.io/swquery/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Docs
						</a>
					</motion.button>

					<WalletMultiButton
						style={{
							width: "auto",
							color: "black",
							background:
								"linear-gradient(90deg, #14F195 0%, #00D1FF 100%)",
							padding: "0.5rem 1rem",
							borderRadius: "1rem",
							boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
							cursor: "pointer",
							border: "none",
							outline: "none",
							fontSize: "1rem",
							fontWeight: "bold",
							transition: "opacity 0.3s ease",
						}}
						disabled={false}
						tabIndex={0}
					/>
				</motion.div>
			</div>
		</nav>
	);
};
