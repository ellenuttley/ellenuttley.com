import React from "react";
import BeforeAfterCarousel from "../BeforeAfterCarousel";
import DelvemailBefore from "../../images/DelvemailBefore.png";
import DelvemailAfter from "../../images/DelvemailAfter.png";
import AdminLoginBefore from "../../images/AdminLoginBefore.png";
import AdminLoginAfter from "../../images/AdminLoginAfter.png";
import EventManagerBefore from "../../images/EventManagerBefore.png";
import EventManagerAfter from "../../images/EventManagerAfter.png";

const RedesignContent = () => {
	return (
		<div className="">
			<div className="box -translate-y-2 *:space-y-2">
				<div className="box">
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
				<div className="box mt-2 p-0">
					<BeforeAfterCarousel
								beforeImage={DelvemailBefore}
								afterImage={DelvemailAfter}
					/>
				</div>
			</div>

			<div className="box *:space-y-2">
				<div className="box">
					<p>
						At my current role, I have been slowly upgrading the current
						softwares frontend.
					</p>
					<p>
						Adding polish, and a cohesive brand styling across the different
						parts of the user story.
					</p>{" "}
				</div>
				<div className="box mt-2 max-h-screen p-0">
					<BeforeAfterCarousel
						beforeImage={AdminLoginBefore}
						afterImage={AdminLoginAfter}
					/>
				</div>
			</div>

			<div className="box translate-y-2 *:space-y-2">
				<div className="box">
					<p>This transformation was done by only changing Tailwind classes.</p>
					<p>
						Although it is hard to tell, because I somehow do not have a before
						image that includes the original footer and event boxes.
					</p>{" "}
					<p>
						But I still wanted to share, as I feel like it is a real testament
						to what Tailwind can do if it is implemented well!
					</p>
				</div>
				<div className="box mt-2 max-h-screen p-0">
					<BeforeAfterCarousel
						beforeImage={EventManagerBefore}
						afterImage={EventManagerAfter}
					/>
				</div>
			</div>
		</div>
	);
};

export default RedesignContent;
