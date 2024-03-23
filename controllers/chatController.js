

const natural = require('natural');

// Create a new classifier
const classifier = new natural.BayesClassifier();

// Define training data for greetings
const greetingTrainingData = [
  { input: 'Hi there', output: `Hello! Welcome to CIT Forum chat support. You can choose a category from the following options to get started: 1. Select FAQ category 2. Choose Forum category 3. Pick Guidelines category
  ` },
  { input: 'Hello', output: `Hi! Welcome to CIT Forum chat support. You can choose a category from the following options to get started: 1. Select FAQ category 2. Choose Forum category 3. Pick Guidelines category`
   },
  { input: 'Good morning', output: `Good morning! Welcome to CIT Forum chat support. You can choose a category from the following options to get started: 1. Select FAQ category 2. Choose Forum category 3. Pick Guidelines category` },
  { input: 'Hey', output: `Hello! Welcome to CIT Forum chat support. You can choose a category from the following options to get started: 1. Select FAQ category 2. Choose Forum category 3. Pick Guidelines category` },
  { input: 'Hi', output: `Hi! Welcome to CIT Forum chat support. You can choose a category from the following options to get started: 1. Select FAQ category 2. Choose Forum category 3. Pick Guidelines category` },
  { input: 'Greetings', output: `Greetings! Welcome to CIT Forum chat support. You can choose a category from the following options to get started: 1. Select FAQ category 2. Choose Forum category 3. Pick Guidelines category` },
];


greetingTrainingData.forEach(item => classifier.addDocument(item.input, item.output));


const categoryTrainingData = [
  { input: 'Select FAQ category', output: 'Choose a question from the following frequently asked questions: 1. How can I update my profile? 2. What is the purpose of the top forums? 3. How to comment on a specific forum? 4. What is the privacy policy of CIT forum? 5. Can I comment on the forum? 6. Can I freely publish a forum?' },
  { input: 'Choose Forum category', output: 'Select a question from the following forum category: 1. How do I create a new forum post? 2. Can I edit my forum post after publishing it? 3. Can I delete the forum that I publish? 4. What should I do if I encounter a problem with a forum post? 5. How can I search for a specific topic on the forum?' },
  { input: 'Pick Guidelines category', output: 'Pick a question from the following guidelines category: 1. What are the community guidelines? 2. Where can I find the terms of service? 3. What is acceptable behavior on the forum?' },
];


categoryTrainingData.forEach(item => classifier.addDocument(item.input, item.output));



const additionalTrainingData = [
  { input: 'Who are you?', output: `I'm a virtual CIT Forum Chat Support, ask me anything about the frequently asked questions by the users` },
  { input: 'Where do you live?', output: 'Sorry, I cannot answer that :)' },
  { input: 'What is my name?', output: 'Sorry, I cannot answer that :)' },
]

additionalTrainingData.forEach(item => classifier.addDocument(item.input, item.output));

const faqTrainingData = [
  { input: 'How can I update my profile?', output: 'To update your profile, go to your account settings and select the option to edit profile details.' },
  { input: 'What is the purpose of the top forums?', output: 'Top forums typically refer to the discussion boards with the highest engagement, often characterized by a significant number of comments and active participation from users.' },
  { input: 'How to comment on a specific forum?', output: 'To comment on a forum post, navigate to the post and look for the comment section. Then, type your comment and submit it.' },
  { input: 'What is the privacy policy of CIT forum?', output: 'The privacy policy of CIT forum outlines how your personal information is collected, used, and protected. You can find the detailed privacy policy on the CIT forum website.' },
  { input: 'Can I comment on the forum?', output: 'Yes, you can comment on the forum. Simply navigate to the post where you want to comment and follow the instructions to submit your comment.' },
  { input: 'Can I freely publish a forum?', output: 'Yes, you can create and publish a forum on the CIT platform. However, please ensure that your forum adheres to the community guidelines and terms of service.' },
];

faqTrainingData.forEach(item => classifier.addDocument(item.input, item.output));


const forumTrainingData = [
  { input: 'How do I create a new forum post?', output: 'To create a new forum post, navigate to the forum section you want to post in. Then, click on the "New Post" button and fill out the required information such as title, content, and category before submitting your post.' },
  { input: 'Can I edit my forum post after publishing it?', output: 'Yes, you can edit your forum post after publishing it. Simply navigate to your post and click on the "Edit" button. Make your changes and save them before closing the editor.' },
  { input: 'Can I delete the forum that I publish?', output: 'Yes, you can delete the forum you posted. Simply navigate to your account click on the "delete" button.' },
  { input: 'What should I do if I encounter a problem with a forum post?', output: 'If you encounter a problem with a forum post, such as inappropriate content or technical issues, you can report the post to the forum moderators.' },
  { input: 'How can I search for a specific topic on the forum?', output: `To search for a specific topic on the forum, use the search bar by navigating to search bar page. Enter keywords related to the topic you're interested in and press Enter to see relevant search results. You can also use the filter options.`},
 
];

forumTrainingData.forEach(item => classifier.addDocument(item.input, item.output));



const guidelinesTrainingData = [
  { input: 'What are the community guidelines?', output: 'The community guidelines outline the expected behavior and rules for interacting on the CIT forum. They cover topics such as respectful communication, appropriate content, and moderation policies.' },
  { input: 'Where can I find the terms of service?', output: 'You can find the terms of service for the CIT forum on our website. They detail the terms and conditions that govern your use of the forum, including rights and responsibilities, privacy policies, and dispute resolution.' },
  { input: 'What is acceptable behavior on the forum?', output: `Acceptable behavior on the forum includes treating others with respect, refraining from harassment or hate speech, and following the community guidelines and terms of service. It's important to create a positive and inclusive environment for all members.` },
];

guidelinesTrainingData.forEach(item => classifier.addDocument(item.input, item.output));

const goodbyeTrainingData = [
  { input: 'Goodbye', output: 'Goodbye! Have a great day!' },
  { input: 'See you later', output: 'See you later! Take care!' },
  { input: 'Bye', output: 'Bye! Until next time!' },
  { input: 'Take care', output: 'Take care! Goodbye!' },
  { input: 'Farewell', output: 'Farewell! Until we meet again!' },
];

goodbyeTrainingData.forEach(item => classifier.addDocument(item.input, item.output));


// Train the classifier
classifier.train();

// Handle incoming messages
const handleMessage = async (req, res) => {
    const message = req.body.message;
    const response = classifier.classify(message);

    res.json({ response });
};



module.exports = {
  handleMessage
};
