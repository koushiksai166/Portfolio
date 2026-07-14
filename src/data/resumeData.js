export const resumeData = {
  name: 'Koushik Sai Prakash Valluru',
  location: 'Hyderabad, Telangana',
  contact: {
    phone: '+91 9059856466',
    email: 'saikoushik166@gmail.com',
    linkedin: 'https://www.linkedin.com/in/koushik-sai-prakash-valluru',
    github: 'https://github.com/koushik166',
  },
  resumeUrl: '/Koushik_Valluru_Resume.pdf',
  summary:
    "Full-stack developer with proven expertise building scalable web and mobile applications. Demonstrated success architecting and deploying production-ready CRM, e-commerce, and business management platforms. Proficient in React.js, React Native, FastAPI, Node.js, and MongoDB with strong focus on system design, API optimization, and real-time features.",
  tagline: ['Full Stack Developer', 'React Native Engineer', 'System Architect'],
  valueProp:
    'Full-stack developer building production healthcare, web, and mobile applications with React.js, React Native, FastAPI, Node.js, and MongoDB.',
  stats: [
    { label: 'Roles in Full-Stack Development', value: 3, suffix: '+' },
    { label: 'Building Production Apps', value: 1, suffix: '+' },
    { label: 'Core Technologies', value: 5, suffix: '+' },
    { label: 'AI/ML Research Project', value: 1, suffix: '' },
  ],
  education: [
    { degree: 'MTech (Pursuing) — Computer Science', institution: 'Gokula Krishna College of Engineering' },
    { degree: 'BTech — Computer Science', institution: 'Sree Venkateswara College of Engineering', detail: 'CGPA 7.2' },
  ],
  certifications: [
    'NPTEL Cloud Computing',
    'IBM SkillsBuild Front-End Development',
    'Microsoft Certified Azure Data Fundamentals',
    'AI with Image Processing Internship — BrainOvision Solutions India Pvt. Ltd.',
  ],
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Lasarkaali Life Sciences Pvt. Ltd.',
      location: 'Hyderabad',
      period: 'Sep 2025 – Present',
      current: true,
      points: [
        'Develop and maintain healthcare web and mobile applications using React.js, React Native, FastAPI, Node.js, and MongoDB',
        'Build secure authentication systems, REST APIs, and role-based access control',
        'Develop real-time features using Socket.IO for notifications and communication',
        'Deploy and maintain applications using Docker, Nginx, and Linux servers',
        'Integrate third-party services including payment gateways and messaging platforms',
      ],
    },
    {
      role: 'Junior Full Stack Developer',
      company: 'SnapTics Branding Agency',
      location: 'Hyderabad',
      period: 'Jul 2025 – Sep 2025',
      points: [
        'Developed responsive web applications using React.js, JavaScript, and Tailwind CSS',
        'Built backend APIs using Node.js and Express.js',
        'Integrated third-party APIs and authentication services',
        'Worked with Git for version control and participated in deployment workflows',
        'Collaborated with designers and developers to deliver client requirements',
      ],
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'SnapTics Business Solutions',
      location: 'Hyderabad',
      period: 'Jan 2025 – Jun 2025',
      points: [
        'Built responsive web interfaces using React.js, HTML, CSS, and JavaScript',
        'Assisted in backend API development using Node.js and Express.js',
        'Worked on database integration and application testing',
        'Participated in deployment and maintenance of web applications',
        'Collaborated with senior developers to enhance application performance',
      ],
    },
  ],
  projects: [
    {
      title: 'AI-Based Knee Osteoarthritis Progression Prediction from 3D MRI Data',
      badge: 'AI/ML',
      description:
        'Developed an AI-based medical image analysis system to predict the progression of knee osteoarthritis using 3D MRI data.',
      points: [
        'Applied image preprocessing and machine learning techniques to improve disease prediction',
        'Worked with medical imaging datasets for feature extraction and classification',
        'Built during an AI with Image Processing internship covering machine learning, TensorFlow, OpenCV, and medical image analysis concepts',
      ],
      stack: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning', 'Image Processing'],
    },
  ],
  skills: [
    { category: 'Frontend', color: 'cyan', items: ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Expo'] },
    { category: 'Backend', color: 'violet', items: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Socket.IO'] },
    { category: 'Database & DevOps', color: 'green', items: ['MongoDB', 'Docker', 'Nginx', 'Linux', 'CI/CD', 'Production Deployment'] },
    { category: 'Integrations & Tools', color: 'amber', items: ['Razorpay', 'Twilio', 'JWT Auth', 'Nodemailer', 'Chart.js', 'Recharts', 'Git'] },
    { category: 'AI / ML', color: 'teal', items: ['Python', 'TensorFlow', 'OpenCV', 'Image Processing', 'Machine Learning'] },
  ],
};

export default resumeData;
