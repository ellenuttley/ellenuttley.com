import React from "react";
import BeforeAfterCarousel from "./BeforeAfterCarousel";
import DelvemailBefore from "../images/DelvemailBefore.png";
import DelvemailAfter from "../images/DelvemailAfter.png";

const MyDesign = () => {
	return (
		<div className=" m-auto md:pb-8 *:space-y-2 -translate-y-2  space-y-5 snap-proximity snap-y p-2 mt-24 md:mt-4 md:mdbox  ">
			<div className="page">Blah blah my style is ramble ramble</div>

			<div className="py-2 text-center  bg-gradient-to-b  from-myblack from-0%  via-primaryPurple via-25% to-myblack  to-80% rounded-xl shadow-secondary shadow-sm ">

				<h2 className="text-metal py-1">Redesigns</h2>
			</div>

			<div className="ring-4 rounded-md md:ring-8  ring-inset ring-[#AAABAD] shadow-black shadow-sm ">
				<div className="clearPage rounded-sm shadow-black shadow-inner  bg-white ring-4 md:ring-8  ring-black mx-2 md:mx-4 min-w-[60dvw] p-5 ">
					{/* <div className=" bg-[#EDEEEF] -translate-y-2 *:space-y-2 max-md:clearPage md:clearBox md:w-[60dvw]  snap-center pt-2 text-center "> */}
						<div className="ring-8 md:ring-8 rounded-md  ring-inset ring-[#AAABAD] shadow-black shadow-sm ">
							<div className="clearPage shadow-none  bg-white rounded-sm ring-4 md:ring-4  ring-black mx-2 mb-5  ">
								<p>This is one of my rounded-sm current projects.</p>
								<p>
									I am tasked with an entire re-design; new name, new logo, and
									a full UX / UI overhaul.
								</p>{" "}
								<p>
									The brief was : &quot;I want it to feel like it was around in
									the early nineties&quot;
								</p>
							</div>
						</div>

						<div className="mt-2 static">
							<BeforeAfterCarousel
								beforeImage={DelvemailBefore}
								afterImage={DelvemailAfter}
							/>
						</div>
					</div>
				{/* </div> */}
			</div>

			<div className=" -translate-y-2 *:space-y-2 max-md:page md:box md:shadow-[#7E8790] md:shadow-sm md:max-w-[60dvw] snap-center pt-2 text-center bg-gradient-to-b from-[#7E8790] from-40% via-[#FAFDFF] via-60% to-[#CAD2DA] to-65% ">
			<div className="clearPage shadow-inner bg-[#FAFDFF] rounded-none  border-8 border-[#AFBCC7]  border-l-[#5E6E7D] border-r-[#5E6E7D] border-r-8 border-l-8">
					<p>This is one of my current projects.</p>
					<p>
						I am tasked with an entire re-design; new name, new logo, and a full
						UX / UI overhaul.
					</p>{" "}
					<p>
						The brief was : &quot;I want it to feel like it was around in the
						early nineties&quot;
					</p>
				</div>
				<div className="mt-2 static md:shadow-[#7E8790] md:shadow-lg md:rounded-xl">
					<BeforeAfterCarousel
						beforeImage={DelvemailBefore}
						afterImage={DelvemailAfter}
					/>
				</div>
			</div>

			<div className="md:shadow-[#7E8790] md:shadow-inner  border-8 border-[#AFBCC7]  border-r-[#7E8790] border-l-[#7E8790] border-r-8 border-b-[#bea4bc] border-l-8 md:rounded-none rounded-none -translate-y-2 *:space-y-2 max-md:page md:box md:max-w-[60dvw] snap-center pt-2 text-center bg-gradient-to-b from-[#7E8790] from-40% via-[#FAFDFF] via-60% to-[#CAD2DA] to-65% ">
				<div className="clearPage shadow-inner bg-[#FAFDFF] rounded-none  border-8 border-[#AFBCC7]  border-l-[#5E6E7D] border-r-[#5E6E7D] border-r-8 border-l-8">
					<p>This is one of my current projects.</p>
					<p>
						I am tasked with an entire re-design; new name, new logo, and a full
						UX / UI overhaul.
					</p>{" "}
					<p>
						The brief was : &quot;I want it to feel like it was around in the
						early nineties&quot;
					</p>
				</div>
				<div className="mt-2 static">
					<BeforeAfterCarousel
						beforeImage={DelvemailBefore}
						afterImage={DelvemailAfter}
					/>
				</div>
			</div>
		</div>
	);
};
export default MyDesign;
