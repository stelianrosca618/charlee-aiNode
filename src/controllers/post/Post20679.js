export const Post20679 = () => {
    return (
        <div className="w-full text-left">
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/AI-and-Machine-Learning-change-Insurance-and-Health-Care-image-1.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            <p className="mt-4">John Standish Co-founder and CIO of Charlee.ai was live at <a href="https://clicksandbrickspodcast.com/" target="_blank" rel="noopener">Clicks and Bricks podcast</a>. It was a great session with the host Ken Cox. John shared how his domain experience from his vast career has resulted in Charlee’s Artificial Intelligence. In this podcast with good questions and commentary from Ken Cox, John Standish was able to touch on all the aspects where Charlee.ai is able to help the insurance industry as a whole. John Standish talked a little bit about the development of Charlee.ai all the way up to the products like our <a href="https://charlee.ai/litigation-management/" target="_blank" rel="noopener">Litigation Management Dashboard</a> that we offer today.</p>
            <p className="mt-4">While the role of technology in claims and litigation management is getting critical and urgent, the advantage Charlee.ai has is its board of advisors, an eclectic mix of legal experts, data architects, law mavericks, and deep domain experts from government and practitioner areas. Charlee does not just provide consistent inputs in shaping the technology but helps make it sharper and better predictive. Enormous costs are thus saved for insurers in claims litigation, ensuring customer retention and leveraging patterns and data to predict positive outcomes for everyone concerned.</p>
            <p className="mt-4"><strong>Watch the whole podcast here:</strong></p>
            <div className="mt-8 w-full min-h-[400px] md:min-h-[500px] rounded-xl">
                <iframe title="AI and Machine Learning change Insurance and Health Care - Ep 197" src="https://www.youtube.com/embed/qYszzFsABJs?autoplay=0&amp;enablejsapi=1&amp;wmode=opaque" width="100%" height="500" allowFullScreen></iframe>
            </div>
            <h2 className="mt-4 text-[22px] font-bold">Request a Demo:</h2>
            <form action="https://charlee.ai/ai-and-machine-learning-change-insurance-and-health-care/" method="post" className="mt-4">
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
}
