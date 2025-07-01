export const Post21277 = () => {
    return (
        <div class="w-full text-left">
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/competing-in-a-digital-first-industry-webinar-series-image1.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            <p className="mt-4">
            Digital Insurance Leaders are Investing in a New Vision for Claims. That vision embraces Digital First customers, processes, technology, & workforces and changing industry roles. Join our Thought Leaders as they share insights on what Claims organizations must do to keep pace.
            </p>
            <div className="mt-4 mx-auto w-full text-center" >
                <img fetchpriority="high" decoding="async" width="600" height="434" title="Machine Learning Thrives on Unstructured and Structured Data image 2" src="/blog-photos/competing-in-a-digital-first-industry-webinar-series.png" alt="" class=" mx-auto img-responsive wp-image-20830" sizes="(max-width: 640px) 100vw, 600px" />
            </div>
            <h2 className="mt-8 text-[22px] font-bold">Request a Demo:</h2>
            <form action="https://charlee.ai/part-4-simplifying-the-underlying-technology-behind-unstructured-data-analysis/" method="post" className="mt-4">
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
                            <input type="checkbox" name="product[]" value="Learn more about the Free POC *" className="mr-2" />
                            Learn more about the Free POC *
                        </label>
                        <label>
                            <input type="checkbox" name="product[]" value="Receive Product Information" className="mr-2" />
                            Receive Product Information
                        </label>
                        <label>
                            <input type="checkbox" name="product[]" value="Request a Demo" className="mr-2" />
                            Request a Demo
                        </label>
                        <label>
                            <input type="checkbox" name="product[]" value="Receive your Whitepaper" className="mr-2" />
                            Receive your Whitepaper
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