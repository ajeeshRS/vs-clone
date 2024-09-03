// Integration icons
import driveIcon from '../public/integration-icons/google-drive.svg';
import notionIcon from '../public/integration-icons/notion.svg';
import oneDriveIcon from '../public/integration-icons/ms-onedrive.svg';
import salesforceIcon from '../public/integration-icons/salesforce.svg';
import hubspotIcon from '../public/integration-icons/hubspot.png';
import airtableIcon from '../public/integration-icons/airtable.svg';

// LLM icons
import openaiIcon from '../public/llm-icons/openai.svg';
import metaIcon from '../public/llm-icons/meta-line-logo.svg';
import googleIcon from '../public/llm-icons/google.svg';
import awsIcon from '../public/llm-icons/aws.svg';
import hugginFaceIcon from '../public/llm-icons/hugging-face-emoji.svg';

// AI overview section
export const qna = [
  {
    q: 'When was this contract started?',
    a: 'The contract started on January 1, 2023.',
  },
  {
    q: 'When was this contract last modified?',
    a: 'The contract was last modified by John D. on June 13, 2023. The modifications were done on page 3,4 and 16.',
  },
  {
    q: "What's the contract ceiling?",
    a: 'The contract ceiling is USD$1,000,000.',
  },
];

export const workflows = [
  { workflow: 'Outbound' },
  { workflow: 'Copy' },
  { workflow: 'Summaries' },
  { workflow: 'Analytics' },
];

// FAQs
export const FAQs = [
  {
    question: 'Who can use VectorShift?',
    answer:
      'VectorShift is designed for teams looking to automate tasks with custom generative AI applications or to incorporate generative AI into their products. We work with companies ranging from Fortune 500 companies to startups – and hopefully you too!',
  },
  {
    question: 'Can I try VectorShift for free?',
    answer:
      'Yes – please click here to get started. Our free version gives you access to our AI application builder and 50 runs per month.',
  },
  {
    question: 'Is there a monthly plan available?',
    answer:
      'Yes – please view our pricing plans here. We offer both monthly subscriptions (can be canceled anytime) or annual subscriptions (20% discount).',
  },
  {
    question: 'Can I use my own LLM API key?',
    answer:
      'Yes – you can provide your own LLM API key directly in our application builder (when you utilize a LLM component).',
  },
  {
    question: 'Is VectorShift secure?',
    answer:
      "We take data security seriously and built our platform with security in mind. User data is end-to-end encrypted and uploaded files are securely stored in encrypted S3 buckets. We have 'zero data retention' agreements with our model providers (OpenAI) to ensure that data is not stored or used for training purposes.",
  },
  {
    question: 'Where can I learn more about how to use VectorShift?',
    answer:
      'Visit our knowledge base, join our Discord, watch our tutorials, or book a demo!',
  },
  {
    question: 'Can VectorShift integrate with my data?',
    answer:
      'Most likely, yes! VectorShift integrates with many common data sources such as Notion, Airtable, Google Drive, and OneDrive. Can’t find an integration you need? Contact us here.',
  },
  {
    question: 'Can VectorShift help build a solution for my organization?',
    answer:
      'Yes – we have developed and implemented turn-key AI applications for companies ranging from Fortune 500 to startups. Contact our sales team here for more information.',
  },
];

// Integrations
export const integrations = [
  {
    icon: driveIcon,
    text: 'Google Drive',
  },
  {
    icon: oneDriveIcon,
    text: 'OneDrive',
  },
  {
    icon: salesforceIcon,
    text: 'SalesForce',
  },
  {
    icon: hubspotIcon,
    text: 'Hubspot',
  },
  {
    icon: notionIcon,
    text: 'Notion',
  },
  {
    icon: airtableIcon,
    text: 'Airtable',
  },
];

//LLMs
export const llms = [
  {
    icon: openaiIcon,
    text: 'Open AI',
  },
  {
    icon: hugginFaceIcon,
    text: 'Huggingface',
  },
  {
    icon: googleIcon,
    text: 'Google',
  },
  {
    icon: metaIcon,
    text: 'LLAMA',
  },
  {
    icon: awsIcon,
    text: 'AWS',
  },
];

//Navbar
export const navItems = [
  'Enterprise',
  'Pricing',
  'Tutorials',
  'Docs',
  'Blog',
  'Discord',
  'Log in',
];

// PopupNav
export const MenuBarItems = [
  'Enterprise',
  'Pricing',
  'Tutorials',
  'Docs',
  'Blog',
  'Discord',
];

// PlatformCards
export const platformCardsData = [
  {
    title: 'Marketplace : pre-built use cases',
    content:
      "In today's fast-paced digital economy, businesses need to be agile, responsive, and ready to scale. A pre-built marketplace solution offers a powerful use case for companies looking to establish an online platform quickly without the extensive time and resource investment .",
  },
  {
    title: 'Agents : execute complex tasks',
    content:
      'In the world of automation and AI, agents are specialized software entities designed to perform complex tasks autonomously. These intelligent agents are becoming indispensable in various industries, where they handle intricate processes, manage workflows, and make decisions with minimal human intervention.',
  },
  {
    title: 'Search : use the optimal data retrieval method',
    content:
      'In the age of information overload, the ability to retrieve the right data efficiently is more critical than ever. Optimal data retrieval methods ensure that users can quickly and accurately access the information they need, whether from large databases, complex systems, or vast online resources.',
  },
];

// WorkflowCards
export const workFlowData = [
  {
    title: 'Start with a \ntemplate',
    content:
      'Leverage dozens of pre-built templates for end use cases - ranging from research report generators to resume screeners.',
  },
  {
    title: 'Connect \ndata',
    content:
      'Allow your AI application to leverage raw data in any format (websites, documents, or CSVs) or directly connect with your database.',
  },
  {
    title: 'Intuitive drag and drop \nbuilder',
    content:
      'Build and rapidly iterate on your application’s architecture with a large library of drag and drop components. Transfer your work seamlessly between no-code and our python SDK.',
  },
  {
    title: 'Customize and deploy to \nend users',
    content:
      'Export a chatbot or generate an API endpoint instantly. Customize the look and feel of the application.',
  },
];
