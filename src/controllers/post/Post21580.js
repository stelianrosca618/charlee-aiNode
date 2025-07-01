export const Post21580 = () => {
    return (
        <div className="w-full text-left">
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Role-of-Sentiment-Analysis-in-Data-Analysis-image1.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <p className="mt-4">PART 1 of a Three-part series.</p>
            <p className="mt-4">Data analysis is a large part of what we do in our everyday life, from figuring inflows and outflows in business to crunching numbers on grocery item quantities and their purchase. By its very definition, analysis alludes to parsing or running through information to conclude a further course of action while gaining a bird’s eye view of the entire situation. Artificial intelligence technology is a game-changer for insurance and making sense of the mountains of new data, of which unstructured data occupies a significant space. Sentiment analysis, a unique feature of Machine Learning and AI, determines the sentiments of all kinds of data.</p>
            
            <h2 className="mt-4 text-[22px] font-bold">WHAT IS SENTIMENT ANALYSIS</h2>
            <p className="mt-4">Sentiments denote feelings such as attitudes, thoughts, and opinions in their basic form. But these sentiments are in spoken language that the system cannot read. To engage technology to read the same sentiments, Machine Learning uses Natural Language Processing tools to work around the problem. Sentiment Analysis, therefore, analyzes the sentiments behind such feelings by recognizing keywords and phrases within data and correlating them to other associated keywords. Thus, going beyond just identifying the first level of feelings when displayed on digital media (likes, shares, dislikes), sentiment analysis tries to collate and correlate them.</p>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Role-of-Sentiment-Analysis-in-Data-Analysis-image3.webp)`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h2 className="mt-4 text-[22px] font-bold">HOW DOES IT WORK</h2>
            <p className="mt-4">The reading of data with NLP-based sentiment analysis can be seen all around us. ‘Keyword Spotting’ is the most common sentiment analysis technique. Data scientists use various technological design tools and libraries to derive different purpose-driven outcomes. Whether it is the Google Search Engine pulling up datasets based on keywords, or the emojis on social platforms that can be collated based on what a community of people feels, these are all relevant examples.</p>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Role-of-Sentiment-Analysis-in-Data-Analysis-image2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h2 className="mt-4 text-[22px] font-bold">SHORTCOMINGS OF SENTIMENT ANALYSIS</h2>
            <p className="mt-4">While sentiment analysis on the surface deciphers sentiments quickly, the technique must be improved when the idea becomes complex. Some key takeaways:</p>
            <ul className="mt-4 list-disc list-inside">
                <li>It cannot reveal specific insights because it works with a small data set</li>
                <li>Majorly picks up sentiments but no other data insights, which must be paired with emotions to reveal the data’s true nature.</li>
                <li>Decisions depend only on the statistical confidence of the data, the source of which could be more questionable or known.</li>
            </ul>
            <p className="mt-4">Since sentiment analysis can be significantly limiting in analyzing data, of which almost 90% is significant and unstructured, it can impact the insights and learning derived from the said data.</p>
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Role-of-Sentiment-Analysis-in-Data-Analysis-image4.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            <h2 className="mt-4 text-[22px] font-bold">SEMANTIC ANALYSIS</h2>
            <p className="mt-4">A much more statistically reliable NLP technique is Semantic Analysis. Drawing out the plain meaning from text, understanding and interpreting text based on context, patterns, and structure, and identifying relationships between words open the field to understanding and working on structured and unstructured data more deeply.</p>
            <p className="mt-4">A semantic analytics tool like Charlee™ is pre-trained for personal and commercial automobile and general liability insurance management. It can automatically extract meaningful information from unstructured data such as claim notes, PDFs, and news articles to provide unique data insights that will help make a significant decision. In the InsureTech space, this can predict severity, loss, and other outcomes; offer deeper insights into claims performance, and foresee user behavior patterns to help businesses make real-time, on-the-go, accurate data-driven decisions.</p>
            
            <h2 className="mt-4 text-[22px] font-bold">CONCLUSION</h2>
            <p className="mt-4">NLP-based Sentiment Analysis, also called ‘Opinion Mining,’ is instrumental in deriving data insights in the digital realm, especially in analyzing sentiments from structured text data like emails, chat transcripts, social comments, and reviews. However, complementing it with Semantic Analytics opens immense possibilities to explore meaningful insights in structured and unstructured data, which is critical to better outcomes in claims management.</p>
            
            <h2 className="mt-4 text-[22px] font-bold">Request a Demo:</h2>
            <form action="https://charlee.ai/part-1-role-of-sentiment-analysis-in-data-analysis/" method="post" className="mt-4">
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
};
