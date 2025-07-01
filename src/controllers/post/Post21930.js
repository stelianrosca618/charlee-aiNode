export const Post21930 = () => {
    return (
        <div className="w-full text-left">
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Ethical-AI-The-Six-Pillars-For-Insurance-part1-image1.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <p className="mt-4">Artificial intelligence (AI) is mentioned daily in the news media. The popularity of AI is exponentially increasing every month as new ideas and products are introduced in the marketplace. These new products are exciting and innovative, but will they stand up to scrutiny and authorization by regulatory agencies overseeing technology in their specific business domain? In the insurance business, regulators have tackled the task of drafting model bulletins and regulations governing the use of AI in the underwriting and claims processes. The regulators are viewing the concern of biased AI and the consequences that will harm consumers.</p>
            <p className="mt-4">Ethical AI is a popular topic in the InsureTech Community, and it must stay at the forefront of innovation and deployment of solutions for insurance carriers and stakeholders. The NAIC H Committee has drafted a model bulletin for insurance carriers to follow using AI with specific points on how the carriers can be held accountable.</p>
            <p className="mt-4">In 2019, the Health Ethics and Policy Lab defined ethical AI from a global convergence of moral principles: 1. Transparency; 2. Justice; 3. Fairness; 4. Non-maleficence; 5. Responsibility; and 6. Privacy. These principles are on point and very important in developing and deploying AI solutions in our society.</p>
            <p className="mt-4">Ethics is defined as moral principles that govern a person’s behavior or the conduct of an activity. A typical example of ethics daily is “Do the right thing even when nobody is watching!” InsureTech companies cannot take shortcuts in developing their solutions, and insurance carriers must be ready to ask pointed questions regarding models and insights delivered by AI.</p>
            
            <h3 className="mt-4 text-[22px] font-bold">For the context of InsureTech, the basic principles for ethical AI are:</h3>
            <ul className="mt-4 list-disc list-outside pl-4">
                <li><strong>Factual</strong>. The data AI analyzes for insights and predictions must be accurate and related to the information in the policy, claim file, and any external (third-party) data applicable to the facts of the loss or the underwriting process.</li>
                <li><strong>Accurate</strong>. The AI algorithms must be tested, vetted, and continuously checked for accuracy. Bias exists everywhere and must be recognized and tuned for precise analysis and predictions.</li>
                <li><strong>Explainable</strong>. The highly regulated insurance business has no “Black Box” in AI for underwriting or claims. The consumer and the insurance carrier need to know how the AI makes decisions, predictions, and recommendations throughout the underwriting and claims process.</li>
                <li><strong>Articulate</strong>. The AI must articulate how and where the insight, pattern, and recommendation will help the underwriter and claims examiner.</li>
                <li><strong>Transparent</strong>. The AI must be transparent in its process so the practitioner and end user can understand how it works and how the user arrives at the decision.</li>
                <li><strong>Testable</strong>. The AI must be able to be tested automatically to generate better results as it continuously analyzes data. This is one of the basic concepts of machine learning.</li>
            </ul>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Ethical-AI-The-Six-Pillars-For-Insurance-part1-image2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h3 className="mt-4 text-[22px] font-bold">CONCLUSION</h3>
            <p className="mt-4">Therefore, we can define ethical AI in insurance as the principal governance of machine learning and natural language processing to analyze data for insights that will safeguard consumers and insurance carriers accurately, transparently, and factually. The growth of AI is exponentially expanding in our lives and must be appropriately created, governed, and continuously monitored.</p>
            <p className="mt-4">While ethics in InsureTech AI are defined by a set of rules, ensuring their technological integration is equally important. Translating human-centric theoretical principles into technology-led practical applications requires the building of AI Engines that ensure transparency and trust throughout the claims management process without compromising on regulatory frameworks at any point in time. In <a href="https://charlee.ai/how-to-build-ai-ethically/">Part 2</a> we explore how <strong>To Build AI Ethically</strong> and what does this entail.</p>
            <p className="mt-4"><a href="https://arxiv.org/ftp/arxiv/papers/1906/1906.11668.pdf">[1]</a> https://arxiv.org/ftp/arxiv/papers/1906/1906.11668.pdf</p>
            
            <h3 className="mt-4 text-[22px] font-bold">Request a Demo:</h3>
            <form action="https://charlee.ai/part-1-ethical-ai-he-six-pillars-for-insurance/" method="post" className="mt-4">
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
                    <p>I would like to:</p>
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
