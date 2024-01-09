import BoxWithImage from '@/components/BoxWithImage';
import ChooseUsCard from '@/components/ChooseUsCard';
import DigitalServiceCard from '@/components/DigitalServiceCard';
import Navbar from '@/components/Navbar';
import SeoInfo from '@/components/SeoInfo';
import ServicesCard from '@/components/ServicesCard';

export default function Homepage() {
  return (
    <div className="mainDiv p-16">
      <BoxWithImage
        heading={'Diversifying the Designs of Digital World'}
        para1={
          'Explorogent International Services Private Limited (EISPL) is one of the most famous companies in the sector of Web and Mobile Development. In the market, EISPL has a strong presence in providing quality services to its clients.'
        }
        para2={
          'EISPL is convinced that one should diversify the offering, given the changing needs of the clients. That is why we engage in multiple projects and activities. We also possess knowledge in web development, app development, UI/UX design, as well as digital marketing.'
        }
        button={'Book a Call'}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
          >
            <path
              d="M11.3342 3.55688L12.9048 3.05521C14.3748 2.58563 15.9469 3.34542 16.5769 4.83L17.831 7.7875C18.3779 9.07521 18.0746 10.5904 17.0815 11.5325L14.3208 14.1546C14.4915 15.7238 15.0179 17.2681 15.9017 18.7877C16.7414 20.258 17.8676 21.5448 19.2135 22.5721L22.5327 21.4638C23.7898 21.0452 25.1592 21.5279 25.9306 22.661L27.7273 25.3006C28.6256 26.619 28.4638 28.436 27.351 29.5531L26.1581 30.7504C24.971 31.9419 23.2765 32.375 21.7073 31.885C18.0046 30.73 14.6008 27.3015 11.4946 21.5994C8.38396 15.8885 7.28729 11.041 8.20167 7.06271C8.58667 5.38854 9.77958 4.05417 11.3371 3.55688"
              fill="white"
            />
          </svg>
        }
        image={'/image1.png'}
      />
      <div className="text-center my-16">
        <p className="text-[#36454F] font-bold my-4">
          In the realm of digital solutions, we offer expertise in
        </p>
        <div className="flex flex-col md:flex-row md:justify-between gap-2 my-4">
          <button className="text-[#0A56F1] px-3 py-2 font-semibold text-sm rounded-3xl border-solid border-2 border-[#0A56F1] bg-white">
            Website Development
          </button>
          <button className="text-[#0A56F1] px-3 py-2 font-semibold text-sm rounded-3xl border-solid border-2 border-[#0A56F1] bg-white">
            App Development
          </button>
          <button className="text-[#0A56F1] px-3 py-2 font-semibold text-sm rounded-3xl border-solid border-2 border-[#0A56F1] bg-white">
            UI/UX Design
          </button>
          <button className="text-[#0A56F1] px-3 py-2 font-semibold text-sm rounded-3xl border-solid border-2 border-[#0A56F1] bg-white">
            Digital Marketing
          </button>
          <button className="text-[#0A56F1] px-3 py-2 font-semibold text-sm rounded-3xl border-solid border-2 border-[#0A56F1] bg-white">
            SEO Optimization
          </button>
        </div>
        <p className="text-[#36454F] font-bold my-4">
          showcasing our proficiency across various facets of the digital
          platform{' '}
        </p>
      </div>
      <div className="text-center my-16">
        <p className="text-[#E68F50] font-bold text-3xl">Stay Ahead!</p>
        <p className="text-[#E68F50] font-bold text-3xl">
          Launch Your Next Project with Stackkaroo
        </p>
      </div>
      <BoxWithImage
        heading={'Our Story'}
        para1={
          'Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans. Our team is fueled by innovation, continually striving to exceed customer expectations.'
        }
        para2={
          'Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN). Our active status and an authorized share capital of Rs 10.00 lac are a source of pride.'
        }
        button={'Get Estimated Project Cost'}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M19.9999 36.6667C29.2049 36.6667 36.6666 29.205 36.6666 20C36.6666 10.795 29.2049 3.33337 19.9999 3.33337C10.7949 3.33337 3.33325 10.795 3.33325 20C3.33325 29.205 10.7949 36.6667 19.9999 36.6667ZM22.4999 13.3334C23.0466 14.06 23.4383 14.91 23.6249 15.8334H26.6666V18.3334H23.6249C23.3365 19.7449 22.5693 21.0135 21.4532 21.9246C20.3372 22.8357 18.9407 23.3334 17.4999 23.3334H17.1833L23.3833 29.5334L21.6166 31.3L13.3333 23.0167V20.8334H17.4999C18.2756 20.8336 19.0323 20.5933 19.6657 20.1456C20.2991 19.6978 20.778 19.0647 21.0366 18.3334H13.3333V15.8334H21.0366C20.7778 15.1022 20.2988 14.4692 19.6654 14.0215C19.0321 13.5738 18.2755 13.3334 17.4999 13.3334H13.3333V10.8334H26.6666V13.3334H22.4999Z"
              fill="white"
            />
          </svg>
        }
        image={'/image2.png'}
      />
      <div className="text-center my-16">
        <p className="text-[#E68F50] font-bold text-3xl">Why Choose Us?</p>
        <p className="text-[#36454F] font-bold my-4">
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
        </p>
        <p className="text-[#36454F] font-bold my-4">
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </p>
      </div>
      <div className="p-4 my-8">
        <div className="flex justify-center gap-12 mb-8">
          <ChooseUsCard image={'/1.svg'} title={'User-Centric Approach'} />
          <ChooseUsCard image={'/2.svg'} title={'Customer Satisfaction'} />
          <ChooseUsCard image={'/3.svg'} title={'Integrating Feedback'} />
        </div>
        <div className="flex justify-center gap-12 ">
          <ChooseUsCard image={'/4.svg'} title={'High Quality Products'} />
          <ChooseUsCard image={'/5.svg'} title={'On-Time Product Delivery'} />
        </div>
      </div>

      <div className="text-center my-16">
        {' '}
        <p className="text-[#E68F50] font-bold text-3xl">
          Stackkaroo&apos;s Digital Services
        </p>
        <p className="text-[#36454F] font-bold my-4">
          We excel with reliability, innovation and customer-centric approach
          for our quality products.
        </p>
        <p className="text-[#36454F] font-bold my-4">
          Our dedicated team ensures that the solutions provided are dependable
          and long-term
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-32">
        <DigitalServiceCard
          image={'/a.png'}
          title={'Website Development'}
          content={
            'We specialize in responsive website development, ensuring optimal performance across various devices.'
          }
        />
        <DigitalServiceCard
          image={'/b.png'}
          title={'App Development'}
          content={
            'We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.'
          }
        />{' '}
        <DigitalServiceCard
          image={'/c.png'}
          title={'Software Development'}
          content={
            ' We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.'
          }
        />{' '}
        <DigitalServiceCard
          image={'/d.png'}
          title={'UI/UX Design'}
          content={
            ' We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.'
          }
        />{' '}
        <DigitalServiceCard
          image={'/d.png'}
          title={'Digital Marketing'}
          content={
            'We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.'
          }
        />{' '}
        <DigitalServiceCard
          image={'/f.png'}
          title={'SEO Optimization'}
          content={
            'We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience.'
          }
        />
      </div>

      {/* SEO Section */}
      <div className="rounded-xl my-16 px-8 pt-8 pb-0 bg-gradient-to-r from-[#f6f8fd] to-[#FFFFFF00]">
        <p className="text-[#E68F50] font-bold text-3xl text-center">
          SEO Services
        </p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
          <div>
            <SeoInfo
              title={'Customized SEO Services'}
              content={
                'We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business.'
              }
              image={'/tick.svg'}
            />
            <SeoInfo
              title={'On-Page SEO Services'}
              content={
                'We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.'
              }
              image={'/tick.svg'}
            />
            <SeoInfo
              title={'Off-Page SEO Services'}
              content={
                'We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.'
              }
              image={'/tick.svg'}
            />
          </div>
          <div>
            <SeoInfo
              title={'Mobile SEO Services'}
              content={
                'We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.'
              }
              image={'/tick.svg'}
            />
            <SeoInfo
              title={'Free Website Audit and Strategies'}
              content={
                'We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services.'
              }
              image={'/tick.svg'}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center my-16">
        {' '}
        <p className="text-[#E68F50] font-bold text-3xl">
          Stackkaroo&apos;s Talent Hiring & Job Placement Services{' '}
        </p>
        <p className="text-[#36454F] font-bold my-4">
          We are a talent searching platform that redesigns how companies hire
          talents. It is a cost-effective solution for industries.
        </p>
        <p className="text-[#36454F] font-bold my-4">
          We also provide global job opportunities with good salaries, support,
          and professional development.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-32">
        <ServicesCard
          title={'Unleashing Top Talent Globally'}
          content={
            'We offer 5% top talents and supports companies hiring from various time zones.'
          }
          image={'/z.png'}
        />{' '}
        <ServicesCard
          title={'Securing Success'}
          content={
            'The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.'
          }
          image={'/y.png'}
        />{' '}
        <ServicesCard
          title={'Beyond Borders'}
          content={'We provide both, flexible full-time and part-time jobs'}
          image={'/x.png'}
        />{' '}
        <ServicesCard
          title={'End-to-End Excellence'}
          content={
            'In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.'
          }
          image={'/w.png'}
        />{' '}
        <ServicesCard
          title={'Efficiency Redefined'}
          content={
            'The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.'
          }
          image={'/v.png'}
        />{' '}
        <ServicesCard
          title={'Simplified Contracts & Satisfied Partnerships'}
          content={
            'The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.'
          }
          image={'/u.png'}
        />
      </div>
    </div>
  );
}
