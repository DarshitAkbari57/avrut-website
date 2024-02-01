import React from 'react'
import Faq from '@/component/FAQ'
import First from '@/component/First/First'
import ChooseTechnology from '@/component/Technology/ChooseTechnology/ChooseTechnology'
import Process from '@/component/Technology/Process/Process'
import TechnologyServices from '@/component/Technology/TechnologyServices/TechnologyServices'
import WhyThisTechnology from '@/component/Technology/WhyThisTechnology/WhyThisTechnology'
import ImageTech from "../../../assets/technology/adobe-xd.png"

function AdobeXD() {

    const services = [
        {
            numbers: "1",
            main: "UX/UI Design",
            content: "Our experts create visually appealing and user-friendly designs that enhance the user experience and meet business objectives."
        },
        {
            numbers: "2",
            main: "Prototyping",
            content: "Our team designs clickable and interactive prototypes for testing and feedback before the final product is developed."
        },
        {
            numbers: "3",
            main: "Wireframing",
            content: "We develop a skeletal framework of client’s product to establish the basic structure and layout."
        },
        {
            numbers: "4",
            main: "Style Guide Development",
            content: "Our team creates a style guide that provides a comprehensive overview of design elements such as typography, colors, and imagery, ensuring brand consistency across all platforms."
        },
        {
            numbers: "5",
            main: "Design System Development",
            content: "We build a comprehensive design system for your organization, including reusable components and guidelines to ensure consistent design across all products."
        },
        {
            numbers: "6",
            main: "Collaboration and Sharing",
            content: "Our team uses AdobeXD's collaboration and sharing features to streamline feedback, revisions, and approvals, improving the design process and reducing turnaround time."
        }
    ]

    const whyTechnoloy = [
        {
            numbers: "1",
            main: "Consistency",
            content: "XD enables one to maintain a consistent and responsive design, which is essential to achieve business success."
        },
        {
            numbers: "2",
            main: "Intuitive User Experience Design",
            content: "Adobe XD offers an intuitive and user-friendly interface, enabling designers to effortlessly create interactive and visually appealing user experiences. Its drag-and-drop features, streamlined tools, and real-time collaboration capabilities make the design process efficient and enjoyable."
        },
        {
            numbers: "3",
            main: "Rapid Prototyping and Testing",
            content: "With Adobe XD's powerful prototyping features, designers can quickly turn their concepts into interactive prototypes. This allows for swift testing and validation of design ideas, helping to identify user experience issues early in the design phase and saving valuable time in the development cycle."
        },
        {
            numbers: "4",
            main: "Seamless Workflow",
            content: "Adobe XD facilitates a smooth transition from design to development with its robust integration capabilities. Designers can easily share design assets, specifications, and interactions with developers, ensuring that the final product matches the envisioned design without discrepancies."
        },
        {
            numbers: "5",
            main: "Constant Updates",
            content: "Adobe is committed to continuous improvement, regularly updating Adobe XD with new features and enhancements based on user feedback and industry trends. By choosing Adobe XD, designers benefit from staying up-to-date with the latest design tools and techniques, ensuring their designs remain cutting-edge and relevant."
        },
    ]


    const process = [
        {
            no: "01",
            main: "Requirement gathering",
            content: "At this stage, our team meets the clients to gather detailed information about the application's features, user flows, and design preferences."
        },
        {
            no: "02",
            main: "Wireframing & Information Architecture",
            content: "At this stage, Using Adobe XD, our design team creates wireframes that represents the layout and structure of the application."
        },
        {
            no: "03",
            main: "Visual Design",
            content: "During this stage, our design team translates wireframes into visually appealing mockups using Adobe XD. This includes selecting color schemes, typography, images, icons, and other visual elements that align with the brand identity and enhance the overall aesthetics of the application."
        },
        {
            no: "04",
            main: "Interactive Prototyping",
            content: "Here, we create interactive prototypes which includes adding clickable elements, transitions, animations, and gestures to showcase how users will interact with the application."
        },
        {
            no: "05",
            main: "Clients Feedback",
            content: "Here we collect Feedback from client to identify any usability issues, design flaws, or areas for improvement. The design is refined based on this feedback."
        },
        {
            no: "06",
            main: "Handoff to Development",
            content: "Once the design is finalized, Adobe XD offers features for design handoff. The design files, assets, and specifications are shared with the development team."
        },
        {
            no: "07",
            main: "Frontend Development",
            content: "The development team uses the design assets and specifications to start coding the frontend of the application using Adobe XD's design specs."
        },
        {
            no: "08",
            main: "Backend Development & Integration",
            content: "Our backend developers work on building the application's logic, databases, and APIs. The frontend and backend components are integrated to create a functional and cohesive application."
        },
        {
            no: "09",
            main: "Quality Assurance and Testing",
            content: "The developed application undergoes rigorous testing to identify and resolve bugs, compatibility issues, and performance bottlenecks."
        },
        {
            no: "10",
            main: "Deployment and Launch",
            content: "Once testing is successfully completed, the application is deployed to the production environment and made available to users."
        },
        {
            no: "11",
            main: "Post-Launch Monitoring",
            content: "After launch, our team continues to monitor the application's performance and gather user feedback."
        },
    ]

    const accordionItems = [
        { title: '01.  What is Adobe XD mainly used for?', content: "Designers and design teams around the world use Adobe XD for collaborating through the design process, from ideation and wireframing to developer handoff." },
        {
            title: '02.  What file type does Adobe XD use?', content: 'Files are saved locally with the file extension . xd. Cloud documents are not saved to your local file system, but are in the . xdc document format.'
        },
        {
            title: '03. Is Adobe XD a prototype tool?', content: 'Adobe XD supports dynamic and interactive prototypes for the designs to interact between different layouts.'
        },
        {
            title: '04. Is Adobe XD good for app design?', content: 'You can easily design a mobile app with adobe xd. It is used to create prototypes and wireframes quickly'
        },
        {
            title: '05. Is Adobe XD a vector design tool?',
            content: "Adobe XD is a vector-based design tool specifically for UX design. It was released in 2016 with UX-specific features that were not available to designers using Photoshop or Illustrator."
        },
    ];


    return (
        <>

            <First title="Adobe XD" subtitle="Avrut Solutions Adobe XD design services enables businesses to build appealing digital products with intuitive user interfaces." />

            <ChooseTechnology title="Why choose us as Adobe XD for design service?" content="We have a team of skilled and creative designers who excel in Adobe XD. Our designers are pro at crafting visually stunning and user-centric designs. With a strong focus on innovation, we instill unique perspectives to every project, ensuring your application stands out in competitive digital landscape." />

            <TechnologyServices title="Adobe XD" titleSpan="Service We offer" content="Adobe XD offers a range of design services, including prototyping, wireframing, and user experience (UX) design. Our team of experts can help bring your creative vision to life. Contact us today for innovative design solutions." services={services} />

            <WhyThisTechnology why="Why" title="Adobe XD ?" content="Adobe XD provides cutting-edge design services. Contact us for expert help in prototyping, wireframing, and UX design. Elevate your creative projects today." technologies={whyTechnoloy} ImageTech={ImageTech.src} />

            <Process process={process} />


            <Faq accordionItems={accordionItems} />


        </>
    )
}

export default AdobeXD

