import styles from './BonsaiReview.module.css'

const BonsaiReview = () => {

    // const [data, setData] = useState(null)
    // useEffect(() => {
    //     const reviewData = async () => {
    //         try {
    //             const response = await fetch('../../utils/ReviewData.json')
    //              if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             const jsonData = await response.json()
    //             console.log('jsonData', jsonData);
    //             setData(jsonData)
    //         } catch(error) {
    //             console.error(error);
    //         }
    //    }
    //    reviewData()
    // }, [])

    const reviewData = [
        {
            "img": "",
            "msg1": 'I did a lot of research before switching to Bonsai from another invoicing service. The ability to send and sign contracts was a game changer for me. No one else offers such a seamless process from proposal to contract to invoice. It has saved me a lot of time and lets me focus on creative work',
            "msg2": '',
            "name": 'kevin tudball',
            "job": 'illustrator'
        },
        {
            img: '',
            msg1: `I did a lot of research before switching to Bonsai from another invoicing service. The ability to send and sign contracts was a game changer for me. No one else offers such a seamless process from proposal to contract to invoice. It has saved me a lot of time and lets me focus on creative work`,
            msg2: `bonsai is an efficient, effective, affordable, easy to use and empowering tool that allows me to more important tasks`,
            name: 'jason curay',
            job: 'digital marketer'
        },
        {
            img: '',
            msg1: `i've been a bonsai user for years. it has allowed me to grow my career as a full time freelancer especially with the ease of making contracts and collecting payments. with a variety of of clients that are all on different payment schedules, Bonsai provided options for each client without difficulty. Now I am enjoying Bonsai even more that they have added the additionl  accounting and tax assistance. This quarter I was able to save so much time filling quarterly tax payments thanks to the tax assistance feature. Thanks, Bonsai for understanding what freelancers need at every stage of their freelance career. `,
            msg2: '',
            name: 'diane serra',
            job: ''
        },
        {
            
            img: '',
            msg1: `bonsai has been absolutely essential in taking my freelance work from an amateur side-gig to a full-time business. It pays for itself 2x over in the time I save having everything so seamlessly integrated. I love how I'm able to send professional-looking invoices, track billable and non-billable hours, create to-do lists, track finances/expenses, and even create contracts and proposals all in one place. The integration with Google Calendar is a huge plus, the customer service is beyound stellar, the platform is really intuitive and easy to use... Really can't say enough good things about it  `,
            msg2: '',
            name: 'danica mitchell',
            job: ''
        },
        {
            img: '',
            msg1: `we started a new venture to provide digital services to small businesses. Bonsai helped fast track our operations right away. We built upon contract and proposals templates and were able to sreamline our operations, as if we were already operating for years. our clients have been very impressed with our operations, and we owe a lot of that satisfaction to Bonsai. Thanks! A+ from the Promethean team.`,
            msg2: '',
            name: 'alexander exarchou',
            job: ''
        },
        {
            img: '',
            msg1: `bonsai is the best to consolidate the "other" side of being in business as a freelancer or independent operator. That is what I love about it; proposals, contracts, invoices - all managed under the same umbrealla. This alone has provided a great and streamlined experiencefor my clients. Bonsai is my armor to get what I'm worth. How I benefit most from Bonsai is my armor to get what I'm worth. How I benefit most from Bonsai is having a reliable system to scale system to scale the pieces required inorder to sustain my practice :)`,
            msg2: '',
            name: 'taylor good',
            job: ''
        },
        {
            img: '',
            msg1: `i love the Bonsai app! It has been a game charger for my web consulting business. From the moment I started using it I was hooked because everything is easy to use and just makes sense, and I love that invoices are easily automated with a click of a button. Higly recommended! 10 out of 10! `,
            msg2: '',
            name: 'siska hines',
            job: ''
        },
        {
            img: '',
            msg1: `bonsai has been a complete game changer in the freelance world. I love how automated the product is, allowing me to spend more time designing and less time on mundane tasks`,
            msg2: '',
            name: 'julie west',
            job: ''
        },
        {
            img: '',
            msg1: `the great thing about Bonsai is that there is not one feature that stands out but how everything is tied together in a super intuitive way. If you want to call that a feature, than that is it. Bonsai is a Swiss Wrmy knife for every freelancer and makes me look good. Invoices, proposals, etc they all provide the same level of professionalism I already offer my client`,
            msg2: '',
            name: 'roland van den hout',
            job: ''
        },
        {
            img: '',
            msg1: `Bonsai is a huge help in my freelance writing business. It's robust with features while still being user friendly. I couldn't stay organized an on-track withour it!`,
            msg2: '',
            name: 'elizabeth bienas',
            job: ''
        },
        {
            img: '',
            msg1: `bonsai takes all the stress out running a business. It helps me look professional, does all the hard work, and lets me focus on the aspects of my business that I love. Thanks, Bonsai!`,
            msg2: '',
            name: 'hannah walker',
            job: ''
        },
        {
            img: '',
            msg1: `using Bonsai has been the single best decision I made in streamling my freelance business. I've been able to better manage proposals and contracts, and with the ability to have to have clients cover payment processing fees, my profits have increased. Bonsai has been a big win!`,
            msg2: '',
            name: 'Ash Blankenship',
            job: ''
        },
        {
            img: '',
            msg1: `Bonsai is one of my favorite tools for managing my business. I can send my clients proposals, contracts, and invoices all in one tool. Plus I use it to track time for hourly projects. Takes the headache out of managing my business & clients!`,
            msg2: '',
            name: 'Lara Jordan',
            job: ''
        },
        {
            img: '',
            msg1: `Bonsai is the freelancer's Swiss Army knife! Everything I need for managing my clients is right at my fingertips`,
            msg2: '',
            name: 'Nancy Little',
            job: ''
        },
        {
            img: '',
            msg1: `I found Bonsai the moment I needed a tool to submit a proposal to a client. The app has tracked entire projects from proposal to contract and invoicing, and I can't imagine running my business without it`,
            msg2: '',
            name: 'Tawny Barbarick',
            job: ''
        },
        {
            img: '',
            msg1: `Bonsai is the best service for freelancers. The legal finesse of contracts is pretty rad & has saved me in sticky client situations. Automatic invoicing and invoicing follow-up messages/reminders are just awesome. I don't have the patience for that but I also like to get paid`,
            msg2: '',
            name: 'Becca McCarty',
            job: ''
        },
        {
            img: '',
            msg1: `I use Bonsai in my copywriting business every day. It's an excellent, straightforward, and user-friendly hub for my proposals, contracts, and invoicing, and my clients really seem to enjoy the portal that keeps track of tasks and hours worked. The team is so easy to work with and are quick to answer questions and implement suggestions. I recommend Bonsai to everyone who asks!`,
            msg2: '',
            name: 'Maggie Tyson',
            job: ''
        },
        {
            img: '',
            msg1: `Bonsai has been a game changer for my small business. Being able to send proposals, contracts, and invoices all in the same system is a life saver!! There's no way I could have created and organized all of those documents without losing my sanity or letting something fall through the cracks. Thank you Bonsai! `,
            msg2: '',
            name: 'Alix Kalfin',
            job: ''
        },
        {
            img: '',
            msg1: `As a freelancer, I was recently burned by a client who refused to pay me for two months of very hard work done. After having to hire an attorney, I realized I needed a way to have stronger contracts with my clients. Bonsai helped me with that and so much more. Bonsai is my new favorite platform to help make my life easier: resourceful, easy to understand, aids in organization, and provides some protection for myself and my clients`,
            msg2: '',
            name: 'Caitlin Davis',
            job: ''
        },
        {
            img: '',
            msg1: `Being self-employed is incredibly difficult, but Bonsai took the guesswork out of managing proposals, contracts, and invoicing.  I have saved countless hours using Bonsai and I would recommend it to any freelancer looking to simplify their workflows and focus more time and energy where you need it most, on your customers`,
            msg2: '',
            name: 'Matthew Dunn',
            job: ''
        },
        {
            img: '',
            msg1: `Bonsai is smart, simple and secure! It's amazing how much less you have to worry about boring (but important) paperwork and you get to focus on the actual project, especially for young freelancers with less experience`,
            msg2: '',
            name: 'Uchechukwu Onyeka',
            job: ''
        },
        {
            img: '',
            msg1: `I'm not sure what I did before Bonsai. It already does so much and the Bonsai team is always adding new features to make it even more useful. Sending proposals, writing contracts, and creating invoices has never been easier. It's totally worth the monthly fee for the peace of mind it provides`,
            msg2: '',
            name: 'Elizabeth Jones',
            job: ''
        },
        {
            img: '',
            msg1: `I adore Bonsai for its aesthetics, customization and flow. It’s so design conscious, responsive, clean, intuitive and I love that I now have the ability to send beautiful invoices that really reflect my brand. Unlike some of the clunky accounting tools I’ve used in the past. Plus it’s so easy to use. Clients often comment: LOVE IT!! Thank you.`,
            msg2: '',
            name: `Louise O'Kane`,
            job: ''
        },
        {
            img: '',
            msg1: `Bonsai is my favorite tool for my freelance business. It allows me to stay organized with projects and invoices, and Bonsai is always coming out with new features to make their tools even easier to use`,
            msg2: '',
            name: 'Karlie Jones',
            job: ''
        },
        {
            img: '',
            msg1: `I love using Bonsai, specifically for contracts. There's no printing, scanning and illegible handwriting. Just a smooth process that allows me to get started on a project sooner rather than later and makes me look professional to my clients. I can create my own or use the templates that have already been created, which has saved me so much time and hassle`,
            msg2: '',
            name: 'Claire Brooks',
            job: ''
        },
        {
            img: '',
            msg1: `I'm new to freelancing and Bonsai has made the transition so much easier. It made me and my biz more professional instantly`,
            msg2: '',
            name: 'Amanda Larson',
            job: ''
        },
        {
            img: '',
            msg1: `The folks at @bonsaiinc just made my day. They're definitely committed to #freelancers - even during these crazy, challenging times. Amazing is what I have to say about the company and their service! Check them out!`,
            msg2: '',
            name: 'Katie Schenk',
            job: ''
        },
        {
            img: '',
            msg1: `Really glad I made the switch @bonsaiinc about a year ago. They are ON these features and updates, you hear me?!?!`,
            msg2: '',
            name: 'Ariana Farquharson',
            job: ''
        },
        {
            img: '',
            msg1: `Just wanted to give a shoutout to Matt and the team at @bonsaiinc for the best customer service (more specifically, from a CEO) that I’ve had in a long time. I will be upgrading my plan for sure post-pandemic. Bravo`,
            msg2: '',
            name: 'Helena Lowe',
            job: ''
        },
    ]


  return (
    <div className={styles.reviewContainer}>
        {reviewData.map((review, index) => (
            <div className={styles.reviewWrappers} key={index}>
                
                <p className={styles.msg1}>{review.msg1}</p>
                <p className={styles.msg2}>{review.msg2}</p>
                <div className={styles.section}>
                <p className={styles.name}>{review.name}</p>
                <p className={styles.job}>{review.job}</p>
                </div>
            </div>
        ))}
        
        
    </div>
  )
}

export default BonsaiReview
