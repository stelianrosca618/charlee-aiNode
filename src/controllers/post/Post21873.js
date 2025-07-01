export const Post21873 = () => {
    return (
        <div className="w-full text-left">
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" >
                <iframe title="Does Regulation Stand in the Way of Innovation? AI in Insurance" src="https://www.youtube.com/embed/IC1Sjq8Dmx8?autoplay=0&amp;enablejsapi=1&amp;wmode=opaque" width="800" height="450" allowfullscreen="" allow="autoplay; fullscreen" id="player_1" data-lf-form-tracking-inspected-ywvko4xvj5z8z6bj="true" data-lf-yt-playback-inspected-ywvko4xvj5z8z6bj="true" data-lf-vimeo-playback-inspected-ywvko4xvj5z8z6bj="true" data-gtm-yt-inspected-8="true"></iframe>
            </div>
            <h2 className="mt-4 text-[22px] font-bold">Request a Demo:</h2>
            <form action="https://charlee.ai/part-2-claims-large-language-models-and-their-value/" method="post" className="mt-4">
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
