export const Post20701 = () => {
    return (
        <div className="w-full text-left">
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Introducing-Artificial-Intelligence-Technology-for-Lowering-Claim-Expenses.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            <p className="mt-4"><strong>June 7 at 2pm ET</strong></p>
            <p className="mt-4">The insurance claim ecosystem and its processes are complex, unwieldy, outdated, and time-consuming. Processing a claim is a very tedious process, with millions of data points either never accessed or insufficiently explored, resulting in avoidable delays and inconvenience to the customer. While the long-term impact of this affects all stakeholders over time, the more concerning outcome is the inability of claims professionals to make more informed decisions, handle claims purposefully, preempt litigation, and maximize time and costs.</p>
            <p className="mt-4">Artificial intelligence, machine learning, and natural language processing are the breakthroughs that give a new spin to claims management. Besides being intuitive technologies, they work on data to plug critical claims management gaps, assess and explore past data cues and help in quick resolutions by claim examiners.</p>
            <p className="mt-4">Register for this tech talk to hear two of the best innovative and recognized industry leaders share their insights into InsureTech, get started with A.I. technologies, and simplify the claim process.</p>
            <div className="mt-8 text-center">
                <a className="bg-teal-500 text-white py-2 px-4 rounded" target="_blank" rel="noopener noreferrer" href="https://event.on24.com/wcc/r/3795907/D4382E5AED365B974E1718EB5B4F3C61?utm_campaign=2155288_TechTalk%20June%207%282%29%20-%20053122&amp;utm_medium=email&amp;utm_source=CLM&amp;dm_i=37P3,1A714,2V6DNK,5012L,1">
                    Reserve Your Spot
                </a>
            </div>
            <h2 className="mt-4 text-[22px] font-bold">Request a Demo:</h2>
            <form action="https://charlee.ai/introducing-artificial-intelligence-technology-for-lowering-claim-expenses-and-improving-reserves/" method="post" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstname" className="block">First Name <abbr title="required">*</abbr></label>
                        <input type="text" name="firstname" id="firstname" className="w-full border rounded p-2" required placeholder="First Name *" />
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block">Last Name <abbr title="required">*</abbr></label>
                        <input type="text" name="lastname" id="lastname" className="w-full border rounded p-2" required placeholder="Last Name *" />
                    </div>
                    <div>
                        <label htmlFor="phone_number" className="block">Phone Number</label>
                        <input type="tel" name="phone_number" id="phone_number" className="w-full border rounded p-2" placeholder="888-888-8888" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block">Email <abbr title="required">*</abbr></label>
                        <input type="email" name="email" id="email" className="w-full border rounded p-2" required placeholder="@email *" />
                    </div>
                </div>
                <div className="mt-4">
                    <p>What Products Are You Interested In?</p>
                    <div className="flex flex-col">
                        <label>
                            <input type="checkbox" name="product[]" value="LITIGATION MANAGMENT DASHBOARD" className="mr-2" />
                            LITIGATION MANAGMENT DASHBOARD
                        </label>
                        <label>
                            <input type="checkbox" name="product[]" value="SEVERITY MANAGMENT DASHBOARD" className="mr-2" />
                            SEVERITY MANAGMENT DASHBOARD
                        </label>
                        <label>
                            <input type="checkbox" name="product[]" value="CLAIMS PORTFOLIO MANAGEMENT DASHBOARD" className="mr-2" />
                            CLAIMS PORTFOLIO MANAGEMENT DASHBOARD
                        </label>
                    </div>
                </div>
                <div className="mt-4 text-right">
                    <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded">Submit</button>
                </div>
            </form>
        </div>
    );
};
   