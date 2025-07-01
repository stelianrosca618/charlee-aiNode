export const Post22469 = () => {
    return (
        <div className="w-full text-left">
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Understanding-Accuracy-in-Machine-Learning-image1.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <p className="mt-4">Artificial Intelligence is ubiquitous in everyday tasks in today’s busy life, inseparable from Mac and Cheese or Uber and travel. It simplifies how our needs are met and addressed, from being integrated into driverless automobiles to being indispensable in mental health apps and taking over the basic tasks in business, work, and even personal lives. AI was built to aid and extract intelligence from data to foresee, predict, and give meaningful insights that can facilitate or ease human tasks.</p>
            <p className="mt-4">Built upon Machine Learning (ML) algorithms and deep learning techniques such as Large Language Models (LLMs) and convolutional neural networks, artificial intelligence is slowly fulfilling its promise of reasoning, learning, perceiving, and problem-solving for humans. When applied to a volatile and high-risk industry like insurance, AI is transforming the way we intervene in everyday processes, from claims management to litigation management, while shifting the industry from the current “react and respond” phase to more of a “predict and prevent” strategy to ensure better preparedness. The pace at which AI is taking over is already accelerating, which will be further fuelled by stakeholders such as brokers, attorneys, financial diaries, policyholders, and insurers becoming more attuned to the benefits of technology and the ways decision-making, productivity, and customer experience are getting enhanced.</p>
            <p className="mt-4">To understand how AI helps further the insurance industry and becomes deeply integrated into everyday processes, carriers must be the foremost people in a position to address and respond to the changing business landscape. This is especially true given that AI reshapes everyday insurance processes like claims, underwriting, distribution, and pricing.</p>
            
            <h3 className="mt-4 text-[22px] font-bold">Machine Learning and its Key Indicators</h3>
            <p className="mt-4">Understanding technology requires knowing what drives it, and this is where the conceptual basis of machine learning comes into play. By its very definition, machine learning works on algorithms or rules and processes that perform tasks. These algorithms are pre-trained based on their intended purpose to determine certain classifications or make predictions while uncovering key insights in individual data mining projects. Thus, they perform tasks that analyze data to predict trends and help us make decisions.</p>
            <p className="mt-4">Accuracy, precision, and recall are the three key indicators that help evaluate the quality of classification models in machine learning. Each metric assesses a different element of the model’s quality. Although their significance varies from one use case to another, they can be measured, and their impact can be calculated to understand how good an AI engine is and what work it does.</p>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Understanding-Accuracy-in-Machine-Learning-image2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h3 className="mt-4 text-[22px] font-bold">What are Classification Models?</h3>
            <p className="mt-4">Classification models assign a pre-determined label to a set of objects in the input data. For example, your requirement as a claims manager may be to know whether a bunch of claims in a particular jurisdiction required attorney intervention.</p>
            <p className="mt-4">An ML model can then classify all users into ‘Intervene’ and ‘Not Intervene’ categories. Once the actual labels are determined, it is easy to measure the quality of the classification model based on accuracy, precision, and recall.</p>
            <p className="mt-4">To summarize;</p>
            <ul className="mt-4 list-disc list-inside">
                <li>Accuracy is the overall correctness of a classification ML model</li>
                <li>Precision defines how often a model is correct when predicting a target class</li>
                <li>Recall is when an ML model can find all objects of the target class.</li>
            </ul>
            
            <h3 className="mt-4 text-[22px] font-bold">1. ACCURACY</h3>
            <p className="mt-4">Accuracy is a crucial metric critical for classification models. It defines how often an ML model correctly predicts the outcome. This metric can be obtained by dividing the number of correct predictions by the total number of predictions made. Accuracy defines how often the model is accurate.</p>
            <p className="mt-4">Accuracy is measurable on a scale of 0 to 1 or as a percentage. The higher the accuracy, the better the model. A perfect accuracy of 1.0 is achieved when every prediction the model makes is accurate.</p>
            <p className="mt-4">This method of calculating accuracy aligns with our general understanding of this metric. Humans have an intuitive perception of accuracy, which helps us assess the model’s ability to classify data points correctly.</p>
            <p className="mt-4"><em>Explaining this metric through a business example sheds more light on its application.</em></p>
            <p className="mt-4">Let us take an example of severity prediction on insurance claims. At a macro level, let’s say you train a model to predict the severity of a claim using one of three labels – low, medium, and high. Low severity is anywhere from $0 to $25K. Medium severity is $25K to $100K, and high severity is over $100K. You present 1000 claims to the model for prediction, and you know the outcomes of each of those 1000 claims. Let’s assume that the severity ranges across the claims are evenly distributed, with 400 claims at low severity, 300 at medium, and 300 at high.</p>
            <p className="mt-4">The model makes its prediction on each of the 1000 claims. We would count all the correct predictions and divide by 1000 to measure the model’s accuracy. For example, among the 400 known low severity claims, the model predicts 340 of them to be low severity; among the 300 medium severity claims, it predicts 280 at medium severity; and it correctly predicts 250 out of the 300 high severity claims. Total number of claims correctly predicted is 340 + 280 + 250 = 870. Model accuracy is (870/1000)*100 = 87%.</p>
            <p className="mt-4">As straightforward as accuracy is in its measurement of judging model quality and showing overall correctness, this measure is not always unbiased or valuable.</p>
            <p className="mt-4"><strong>Accuracy Paradox – </strong>The downside to treating accuracy as a primary metric is that all classes are treated equally, and only correct predictions are looked at.</p>
            <p className="mt-4">When two different data classes with reasonably well-balanced datasets come together, accuracy as a metric is beneficial. However, real-world applications in the insurance domain have a high imbalance of classes.</p>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Understanding-Accuracy-in-Machine-Learning-image3.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h3 className="mt-4 text-[22px] font-bold">2. PRECISION</h3>
            <p className="mt-4">This metric predicts how often the machine learning model correctly predicts the positive class. In lay terms, it means getting it right every time. It can be calculated by dividing true positives or the number of correct optimistic predictions by the total number of true and false positives—instances the model predicted as positive.</p>
            <p className="mt-4">Precision is measurable on a scale of 0 to 1 or as a percentage. The higher the precision, the better the model. A perfect precision of 1.0 is achieved when every prediction of the target class made by the model is correct, and nothing is flagged as an error.</p>
            <p className="mt-4"><em>Explaining this metric through a business example sheds more light on its application.</em></p>
            <p className="mt-4">Let’s go back to the litigation prediction use case. Your data scientist understands their fallacy and retrains the model. This time, the model predicts some claims will go into litigation. Let’s say the new model now predicted eight claims as likely to go into litigation. Seven out of those eight claims did indeed go into litigation. The model missed predicting 17 of the litigation claims, but that is a topic of discussion in the next section. The model correctly predicted 7 out of 8 and thus has a precision of 87.5%.</p>
            <p className="mt-4">The earlier model (87% accurate) has a precision of 0% since it predicted 0 claims for litigation.</p>
            
            <h3 className="mt-4 text-[22px] font-bold">Positives of Precision Metric:</h3>
            <ul className="mt-4 list-disc list-inside">
                <li>Precision works well for imbalanced classes, demonstrating the model’s correctness in identifying the target class.</li>
                <li>Precision is also functional when the cost of false positives is high, and you need to be confident in the results’ identification of the target classes.</li>
            </ul>
            
            <h3 className="mt-4 text-[22px] font-bold">Negatives of Precision Metric:</h3>
            <ul className="mt-4 list-disc list-inside">
                <li>One drawback of precision is that it cannot consider false negatives. It does not account for cases where the target event is missed.</li>
            </ul>
            
            <h3 className="mt-4 text-[22px] font-bold">3. RECALL</h3>
            <p className="mt-4">This metric measures how often a machine learning model correctly identifies positive instances or true positives from all the actual positive dataset samples. It is calculated by dividing the number of true positives by the overall positive instances.</p>
            <p className="mt-4">Recall is measurable on a scale of 0 to 1 or as a percentage. The higher the recall, the better the model. A perfect recall of 1.0 is achieved when all instances of the target class in the model can be found in the dataset.</p>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Understanding-Accuracy-in-Machine-Learning-image3-2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <p className="mt-4"><em>Explaining this metric through a business example sheds more light on its application.</em></p>
            <p className="mt-4">Let’s go back to our litigation prediction example. The new model trained by the data scientist identified 7 of the 24 claims that went into litigation. Therefore, its recall is 29%. Your data scientist now trains a third model that predicts 50 claims to go into litigation. 23 of the 24 litigated claims are part of these 50 claims. This third model has a recall of 23/24 = 96%. However, its precision will suffer. Of the 50 claims it predicted for litigation, only 23 ended up in litigation. Hence, its precision is 23/50 = 46%.</p>
            
            <h3 className="mt-4 text-[22px] font-bold">Positives of Recall Metric:</h3>
            <ul className="mt-4 list-disc list-inside">
                <li>Regarding imbalanced classes, recall works well with such problems because of its focus on the model’s ability to find the target class objects.</li>
                <li>When the cost of false negatives is too high, recall is used.</li>
            </ul>
            
            <h3 className="mt-4 text-[22px] font-bold">Negatives of Recall Metric:</h3>
            <ul className="mt-4 list-disc list-inside">
                <li>One of the drawbacks of recall is that it does not account for the cost of false positives.</li>
            </ul>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Understanding-Accuracy-in-Machine-Learning-image4.webp)`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            <h3 className="mt-4 text-[22px] font-bold">What do you think is better: Accuracy, Precision, or Recall?</h3>
            <p className="mt-4">Whether accuracy, precision, or recall is a better metric depends on your use case.</p>
            <p className="mt-4"><strong>Accuracy</strong> is a good metric when your different data classes are well balanced, and it is equally important in your use to identify each of the classes. For example, let’s say you have three adjusters in your team skilled in handling different claims. Jordan is adept at handling low-severity claims, Alex is great with medium-severity claims, and Taylor does an excellent job with high-severity claims. You want to use your model’s severity prediction for automated adjuster assignment. Any claims predicted for low severity will automatically get assigned to Jordan, medium to Alex, and high to Taylor. In this case, each of the 3 data classes is equally important, and assuming the data classes are balanced, accuracy will be the right metric to use.</p>
            <p className="mt-4"><strong>Precision</strong> is an excellent metric when your use case is tolerant to false negatives but sensitive to false positives. Say your use case is to identify claims likely to go into litigation and get your defense counsel to jump on them quickly. Even if you can identify and address just a few litigation-like claims, that’s a big win. You don’t care how many litigated claims you miss at this stage, but what matters is wanting to catch a handful. However, your defense counsel is an expensive resource, and the cost of sending a claim to them that is unlikely to go into litigation is very high. In such a scenario, precision is the more critical metric.</p>
            <p className="mt-4"><strong>Recall</strong> is an excellent metric to use when your use case is tolerant to false positives but sensitive to false negatives. Returning to the litigation prediction use case, say your defense counsel is in-house and can effectively handle a relatively large volume of claims thrown at them. There is no added cost per claim. You now want to catch as many litigation-like claims as possible and address them early on. Even one claim missed can get expensive as your jurisdiction is very litigious and plaintiff-friendly. In such a use case, recall is the more critical metric.</p>
            <p className="mt-4">Pick the most critical metric based on your use case, and ensure the model provides a reasonable value for the other metrics. For example, a model that predicts almost all claims to go into litigation will have 100% recall but 1% precision. This model only provides a little value since it dramatically increases the workload of the adjuster and defense counsel. A model that offers 88% recall with 65% precision will, in most cases, work better for the last use case above than the 100% recall with 1% precision model.</p>
            <p className="mt-4">This brings us to other model metrics, such as the F1 score and other custom metrics that may be more relevant to the use case. Defining and selecting custom metrics is a topic for another blog.</p>
            
            <h3 className="mt-4 text-[22px] font-bold">CONCLUSION</h3>
            <p className="mt-4">Metrics such as accuracy, precision, and recall are crucial for continuously evaluating the performance of an ML model. Either taken jointly or choosing one that is more suitable than the other, one can address different unique scenarios. In the case of the Charlee AI platform, our KPIs for various use cases are defined by weighing the model for particular scenarios and qualitatively checking them against these metrics.</p>
            
            <h3 className="mt-4 text-[22px] font-bold">About the Author</h3>
            <p className="mt-4"><strong>Dr. Charmaine Kenita</strong></p>
            <p className="mt-4"><em>Technology and Business Writer</em></p>
        </div>
    );
};
