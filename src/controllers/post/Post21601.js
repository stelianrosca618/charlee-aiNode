export const Post21601 = () => {
    return (
        <div className="w-full text-left">
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Natural-Language-Processing-and-Semantic-Analytics-for-Insurance-image1.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <p className="mt-4">This is PART 3 of a Three-part series.</p>
            <p className="mt-4">What would be your reaction if you found a chatbot that could understand your emotional intent with a few words, a search engine that not just searched for you but understood the purpose behind the search, or a voice bot that deduced the tone of your voice?</p>
            <p className="mt-4">As familiar as we are with natural language, the above is like something out of science fiction!</p>
            <p className="mt-4">But semantic analysis is already being used to figure out how humans and machines feel and give context and depth to their words. The grammatical analysis and recognition connection between words in a given context enables algorithms to comprehend and interpret phrases, sentences, and all forms of data.</p>
            <p className="mt-4">In its simplest form, semantic analysis is the process that extracts meaning from text. While it is already being used to drive chatbots, search engines, and text analysis using machine learning, its niche applications are effectively utilized in underwriting risk prediction and claims outcome prediction in the InsureTech domain by Charlee.ai, a patented insight-driven NLP engine.</p>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Natural-Language-Processing-and-Semantic-Analytics-for-Insurance-image2.webp)`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h2 className="mt-4 text-[22px] font-bold">Units of semantic analysis</h2>
            <p className="mt-4">1. Entity – This refers to a particular unit or an individual, such as a person or location. For example, Charlee, claims</p>
            <p className="mt-4">2. Concept – This is a broad generalization of entities or a more general class of individual units. For example, engine, portfolio</p>
            <p className="mt-4">3. Relations – This establishes the relationship between different concepts and entities. For example, Charlee is an NLP-based engine; the Claims portfolio is manageable.</p>
            <p className="mt-4">4. Predicate – These represent the verb structures of the sentences.</p>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Natural-Language-Processing-and-Semantic-Analytics-for-Insurance-image3.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h2 className="mt-4 text-[22px] font-bold">Semantic Analysis techniques</h2>
            <p className="mt-4"><strong>Text Classification:</strong></p>
            <p className="mt-4">In ‘Text Classification,’ the aim is to label the text according to the insights gained from the textual data.</p>
            <p className="mt-4">For instance:</p>
            <ul className="mt-4 list-disc list-inside">
                <li>In Sentiment Analysis, the text is labeled according to its prominent emotion. This can help in analyzing customer reviews for improving products or solutions.</li>
                <li>In Topic Classification, texts are categorized into some predefined categories. For example, they identify whether a book is sci-fi, autobiographical, or fiction.</li>
                <li>In Intent Classification, we are trying to know the intent behind the text message and, for example, identifying whether an email query received by a customer was a complaint, question, or request.</li>
            </ul>
            <p className="mt-4"><strong>Text Extraction</strong></p>
            <p className="mt-4">Text extraction involves drawing out specific information from the text.</p>
            <p className="mt-4">In Keyword Extraction, we try getting essential words that capture the gist of the entire document.</p>
            <p className="mt-4">In Entity Extraction, we try to draw out all entities involved in a document.</p>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Natural-Language-Processing-and-Semantic-Analytics-for-Insurance-image4.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h2 className="mt-4 text-[22px] font-bold">CONCLUSION</h2>
            <p className="mt-4">Businesses are already using Semantic Analysis in various ways for social listening, such as Uber releasing new versions of its app, which picks up users’ assessment and feedback from how they post about it on social media.</p>
            <p className="mt-4">Google’s Humming Bird algorithm, made in 2013, uses semantic analysis to make search results more relevant, improving organic and natural referencing (SEO) to build quality content on website pages.</p>
            <p className="mt-4">In the InsurTech industry, NLP-based semantic analysis in conjunction with other Machine Learning techniques, as demonstrated by Charlee.ai, uses unstructured data such as claim notes, PDF documents, comments, and files to accurately understand behavioral patterns from a corpus of past unstructured data and look for the same in new data, accurately predict insurance claims cycle times and foresee user behavior.</p>
            
            <h2 className="mt-4 text-[22px] font-bold">Request a Demo:</h2>
            <form action="https://charlee.ai/part-3-nlp-and-semantic-analytics-for-insurance/" method="post" className="mt-4">
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
