import React from "react";

const HoverText = () => (
	<div className="flex flex-grow items-center justify-center max-xl:mb-5 ">
		<div className="*:whiteHeader group relative inline-block cursor-pointer leading-normal before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#61087F]">
			<h2 className="whiteHeader relative inline-block whitespace-break-spaces group-hover:hidden">
				over the top
			</h2>
			<h2 className="whiteHeader relative hidden whitespace-break-spaces opacity-0 group-hover:inline-block  group-hover:opacity-100">
				impressive
			</h2>
		</div>
	</div>
);

export default HoverText;
