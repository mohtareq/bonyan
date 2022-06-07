import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import { SecDiv, Box, Icon, Title, SubTitle } from './SecondServicesStyle';
import './Style.css'

const SecondServices = () => {
    

    return(
        <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            spaceBetween={50}
            autoplay={{
                delay: 500,
                disableOnInteraction: false
            }}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
                // when window width is >= 640px
                1: {
                    slidesPerView: 2,
                },
                // when window width is >= 768px

                1200: {
                    slidesPerView: 3,
                },
            }}
            className='swiper'
        >
        <SecDiv>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.848 59.848">
                        <path id="icons8_Seo_Text_2" d="M7.175,1A6.162,6.162,0,0,0,1,7.175v47.5a6.162,6.162,0,0,0,6.175,6.175h47.5a6.162,6.162,0,0,0,6.175-6.175V7.175A6.162,6.162,0,0,0,54.673,1Zm0,2.85h47.5A3.3,3.3,0,0,1,58,7.175V14.3H3.85V7.175A3.3,3.3,0,0,1,7.175,3.85Zm1.9,3.8a1.425,1.425,0,1,0,0,2.85h1.9a1.425,1.425,0,1,0,0-2.85Zm7.6,0a1.425,1.425,0,0,0,0,2.85h1.9a1.425,1.425,0,0,0,0-2.85ZM3.85,17.149H58V54.673A3.3,3.3,0,0,1,54.673,58H7.175A3.3,3.3,0,0,1,3.85,54.673Zm9.5,10.925a1.425,1.425,0,1,0,0,2.85H48.5a1.425,1.425,0,0,0,0-2.85Zm0,7.125a1.425,1.425,0,1,0,0,2.85H48.5a1.425,1.425,0,0,0,0-2.85Zm0,7.125a1.425,1.425,0,1,0,0,2.85H38.524a1.425,1.425,0,0,0,0-2.85Zm32.774,0a1.425,1.425,0,0,0,0,2.85H48.5a1.425,1.425,0,0,0,0-2.85Z" transform="translate(-1 -1)" fill="#22274e"/>
                    </Icon>
                    <Title>تهيئة محركات البحث SEO</Title>
                    <SubTitle>
                        نقوم بمساعدتك من خلال خبرتنا في تصدر نتائج محركات البحث بحيث نسمح لك أن تكون في أولى صفحات البحث على جوجل وبذلك تضمن ان نشاطك التجاري يكون دائما في المقدمة والعمل على تحقيق الهدف الذي تريده. 
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 56.092 59.223">
                        <g id="svgexport-6" transform="translate(-13.451 0.15)">
                        <g id="Group_17322" data-name="Group 17322" transform="translate(13.601 16.877)">
                            <g id="Group_17321" data-name="Group 17321">
                            <path id="Path_5475" data-name="Path 5475" d="M68.242,186.4H65.718v-36.65a3.1,3.1,0,0,0-3.094-3.094H56.983a3.1,3.1,0,0,0-3.094,3.094V186.4H47.48V166.353a3.1,3.1,0,0,0-3.094-3.094H38.744a3.1,3.1,0,0,0-3.094,3.094V186.4H29.241V176.017a3.1,3.1,0,0,0-3.094-3.094H20.506a3.1,3.1,0,0,0-3.094,3.094V186.4h-2.66a1.151,1.151,0,1,0,0,2.3H68.242a1.151,1.151,0,1,0,0-2.3Zm-41.3,0H19.714V176.017a.793.793,0,0,1,.792-.792h5.642a.793.793,0,0,1,.792.792V186.4Zm18.239,0H37.952V166.353a.793.793,0,0,1,.792-.792h5.642a.793.793,0,0,1,.792.792Zm18.239,0H56.191v-36.65a.793.793,0,0,1,.792-.792h5.642a.793.793,0,0,1,.792.792V186.4Z" transform="translate(-13.601 -146.654)" fill="#22274e" stroke="#22274e" strokeWidth="0.3"/>
                            </g>
                        </g>
                        <g id="Group_17324" data-name="Group 17324" transform="translate(23.469)">
                            <g id="Group_17323" data-name="Group 17323">
                            <path id="Path_5476" data-name="Path 5476" d="M141.593,1.21A1.147,1.147,0,0,0,140.385,0l-.056,0h-6.963a1.151,1.151,0,0,0,0,2.3h4.3L126.29,13.679,122,9.388a1.151,1.151,0,0,0-1.628,0L99.683,30.077a1.151,1.151,0,0,0,1.628,1.627l19.875-19.875,4.29,4.29a1.151,1.151,0,0,0,1.628,0l12.191-12.19V7.82a1.151,1.151,0,1,0,2.3,0V1.266C141.6,1.247,141.594,1.229,141.593,1.21Z" transform="translate(-99.346)" fill="#22274e" stroke="#22274e" strokeWidth="0.3"/>
                            </g>
                        </g>
                        <g id="Group_17326" data-name="Group 17326" transform="translate(19.59 33.755)">
                            <g id="Group_17325" data-name="Group 17325" transform="translate(0)">
                            <circle id="Ellipse_371" data-name="Ellipse 371" cx="1.151" cy="1.151" r="1.151" fill="#22274e" stroke="#22274e" strokeWidth="0.3"/>
                            </g>
                        </g>
                        </g>
                    </Icon>
                    <Title>الاعلانات الممولة</Title>
                    <SubTitle>
                        نقوم بمساعدتك في تحقيق المبيعات والنجاح الذي تبحث عنه عن طريق فريق عمل مميز يقوم بالعمل بإحترافية من خلال تحدد أهدافك تحدد الميزانية إستهداف جمهورك الصحيح إختيار الوسائل الإعلانية تتبع النتائج وتسجيل الملاحظات    
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 158 158">
                    <defs>
                    <filter id="Ellipse_18" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    </defs>
                    <g id="Group_17007" transform="translate(-872 -2834)">
                    <g transform="matrix(1, 0, 0, 1, 872, 2834)" filter="url(#Ellipse_18)">
                        <circle id="Ellipse_18-2" cx="70" cy="70" r="70" transform="translate(9 6)" fill="#22274e"/>
                    </g>
                    <path id="icons8_code_file_1" d="M60.618,31.987A1.9,1.9,0,0,0,58.7,33.434l-11.4,43.7a1.9,1.9,0,1,0,3.674.958l11.4-43.7a1.9,1.9,0,0,0-1.755-2.4Zm7.559,9.5a1.9,1.9,0,0,0-1.548,3.08l8.61,11.192-8.61,11.192a1.9,1.9,0,1,0,3.013,2.316L80.033,55.763,69.643,42.255A1.9,1.9,0,0,0,68.177,41.491Zm-28.638,0a1.9,1.9,0,0,0-1.41.761L27.738,55.763,38.129,69.271a1.9,1.9,0,1,0,3.013-2.316l-8.61-11.192,8.61-11.192a1.9,1.9,0,0,0-1.6-3.077Z" transform="translate(897.338 2853.921)" fill="#fff"/>
                    </g>
                    </Icon>  
                    <Title>برمجة المواقع والتطبيقات</Title>
                    <SubTitle>
                        نساعدك على إنشاء تطبيقك أو موقعك الإلكتروني لتصل لعملائك بشكل أسرع و بمدة زمنية قصيرة وبسعر منافس كما ونعمل على تحويل فكرتك إلى تطبيق مميز  بإستخدام أفضل التقنيات الحديثة 
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 56.092 59.223">
                        <g id="svgexport-6" transform="translate(-13.451 0.15)">
                        <g id="Group_17322" data-name="Group 17322" transform="translate(13.601 16.877)">
                            <g id="Group_17321" data-name="Group 17321">
                            <path id="Path_5475" data-name="Path 5475" d="M68.242,186.4H65.718v-36.65a3.1,3.1,0,0,0-3.094-3.094H56.983a3.1,3.1,0,0,0-3.094,3.094V186.4H47.48V166.353a3.1,3.1,0,0,0-3.094-3.094H38.744a3.1,3.1,0,0,0-3.094,3.094V186.4H29.241V176.017a3.1,3.1,0,0,0-3.094-3.094H20.506a3.1,3.1,0,0,0-3.094,3.094V186.4h-2.66a1.151,1.151,0,1,0,0,2.3H68.242a1.151,1.151,0,1,0,0-2.3Zm-41.3,0H19.714V176.017a.793.793,0,0,1,.792-.792h5.642a.793.793,0,0,1,.792.792V186.4Zm18.239,0H37.952V166.353a.793.793,0,0,1,.792-.792h5.642a.793.793,0,0,1,.792.792Zm18.239,0H56.191v-36.65a.793.793,0,0,1,.792-.792h5.642a.793.793,0,0,1,.792.792V186.4Z" transform="translate(-13.601 -146.654)" fill="#22274e" stroke="#22274e" strokeWidth="0.3"/>
                            </g>
                        </g>
                        <g id="Group_17324" data-name="Group 17324" transform="translate(23.469)">
                            <g id="Group_17323" data-name="Group 17323">
                            <path id="Path_5476" data-name="Path 5476" d="M141.593,1.21A1.147,1.147,0,0,0,140.385,0l-.056,0h-6.963a1.151,1.151,0,0,0,0,2.3h4.3L126.29,13.679,122,9.388a1.151,1.151,0,0,0-1.628,0L99.683,30.077a1.151,1.151,0,0,0,1.628,1.627l19.875-19.875,4.29,4.29a1.151,1.151,0,0,0,1.628,0l12.191-12.19V7.82a1.151,1.151,0,1,0,2.3,0V1.266C141.6,1.247,141.594,1.229,141.593,1.21Z" transform="translate(-99.346)" fill="#22274e" stroke="#22274e" strokeWidth="0.3"/>
                            </g>
                        </g>
                        <g id="Group_17326" data-name="Group 17326" transform="translate(19.59 33.755)">
                            <g id="Group_17325" data-name="Group 17325" transform="translate(0)">
                            <circle id="Ellipse_371" data-name="Ellipse 371" cx="1.151" cy="1.151" r="1.151" fill="#22274e" stroke="#22274e" strokeWidth="0.3"/>
                            </g>
                        </g>
                        </g>
                    </Icon>
                    <Title>التقارير وتحليل الاداء</Title>
                    <SubTitle>
                        نساعدكم في كتابة التقارير وتحليل الأداء التي تسهم في تحقيق أهداف الشركة والتأكد من سيرها في الإتجاه الصحيح من خلال معرفة كيف تتم إدارة المشاريع وحل المشاكل وتصحيح الأخطاء والكشف عن الخطط المستقبلية 
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 53.228 52.539">
                        <path id="icons8_marketing_1" d="M30.614,3a3.72,3.72,0,0,0-3.8,3.623H7.241A3.21,3.21,0,0,0,4,9.794a3.166,3.166,0,0,0,1.9,2.878V43.083a3.488,3.488,0,0,0,3.564,3.4H26.52l-5.257,7.655a.883.883,0,0,0,.275,1.256.983.983,0,0,0,.52.147.966.966,0,0,0,.8-.409l5.7-8.3a.872.872,0,0,0,.139-.345h.965v5.888a.952.952,0,0,0,1.9,0V46.48h.965a.872.872,0,0,0,.139.345l5.7,8.3a.966.966,0,0,0,.8.409.986.986,0,0,0,.52-.147.883.883,0,0,0,.275-1.256L34.707,46.48H51.762a3.489,3.489,0,0,0,3.564-3.4V12.672a3.166,3.166,0,0,0,1.9-2.878,3.21,3.21,0,0,0-3.241-3.17H34.416A3.72,3.72,0,0,0,30.614,3Zm0,1.812a1.86,1.86,0,0,1,1.9,1.812h-3.8A1.86,1.86,0,0,1,30.614,4.812ZM7.241,8.435H53.986a1.359,1.359,0,0,1,0,2.718.974.974,0,0,0-.28.053.964.964,0,0,0-.28-.053H22.059a.907.907,0,1,0,0,1.812H53.426V43.083a1.627,1.627,0,0,1-1.663,1.585H9.465A1.627,1.627,0,0,1,7.8,43.083V12.964h2.851a.907.907,0,1,0,0-1.812H7.241a1.359,1.359,0,0,1,0-2.718ZM9.7,11.153a.907.907,0,1,0,0,1.812H27.762a.907.907,0,1,0,0-1.812Zm25.663,5.435a.928.928,0,0,0-.95.906v4.529H25.861a.928.928,0,0,0-.95.906v3.623H16.356a.928.928,0,0,0-.95.906V40.139H11.6a.907.907,0,1,0,0,1.812h38.02a.907.907,0,1,0,0-1.812h-3.8V17.493a.928.928,0,0,0-.95-.906Zm.951,1.812h7.6v21.74h-7.6V18.4Zm-9.5,5.435h7.6V40.139h-7.6V23.834Zm-9.5,4.529h7.6V40.139h-7.6Z" transform="translate(-4 -3)" fill="#22274e"/>
                    </Icon>
                    <Title>
                        خدمات التسويق وإدارة حسابات
                        التواصل الاجتماعي
                    </Title>
                    <SubTitle>
                        نجعلك أقرب من عملائك المحتملين ونعزز ثقة الناس بك
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 44.302 58.504">
                        <g id="Group_17087" data-name="Group 17087" transform="translate(-1441 -1606.441)">
                        <g id="Group_10848" data-name="Group 10848" transform="translate(1448.915 1617.635)">
                            <path id="Path_5245" data-name="Path 5245" d="M139.142,278.855H122.924a1.052,1.052,0,0,1-1.04-1.212l.879-5.706a1.047,1.047,0,0,1,1.04-.892h12.884a1.056,1.056,0,0,1,1.031.84Zm-15.462-1.7h13.38l-.9-4.41h-11.8Z" transform="translate(-116.374 -231.545)" fill="#22274e"/>
                            <path id="Path_5246" data-name="Path 5246" d="M121.286,173.464H108.565a1.208,1.208,0,0,1-1.121-.752L100.3,155.307a1.211,1.211,0,0,1,.1-1.116l13.057-20.26a1.21,1.21,0,0,1,1.881-.193,1.213,1.213,0,0,1,.809-.308,1.2,1.2,0,0,1,1.033.586L129.3,154.052a1.22,1.22,0,0,1,.09,1.073L122.412,172.7A1.206,1.206,0,0,1,121.286,173.464Zm-12.394-1.7h12.063l6.769-17.04-11.086-18.332v15.57a2.641,2.641,0,1,1-2.643-.026V136.244L101.974,154.9Zm6.416-18.5-.25.065a.94.94,0,1,0,.5.006Z" transform="translate(-101.064 -134.224)" fill="#22274e"/>
                        </g>
                        <path id="Path_5247" data-name="Path 5247" d="M121.76,112.883c-8.8-7.038-17.878-9.2-26.991-6.414a30.317,30.317,0,0,0-8.167,3.964,23.615,23.615,0,0,0-3.005,2.4l-1.06-1.061a24.454,24.454,0,0,1,3.164-2.535,31.854,31.854,0,0,1,8.568-4.179,27.239,27.239,0,0,1,12.791-.838,34.714,34.714,0,0,1,15.638,7.5Z" transform="translate(1360.574 1504.38)" fill="#22274e"/>
                        <path id="Path_5248" data-name="Path 5248" d="M82.4,131.094a2.5,2.5,0,1,1-2.5-2.5A2.5,2.5,0,0,1,82.4,131.094Z" transform="translate(1363.6 1485.584)" fill="#22274e"/>
                        <circle id="Ellipse_17" data-name="Ellipse 17" cx="2.5" cy="2.5" r="2.5" transform="translate(1480.302 1614.177)" fill="#22274e"/>
                        <rect id="Rectangle_189" data-name="Rectangle 189" width="5" height="5" transform="translate(1460.721 1606.441)" fill="#22274e"/>
                        </g>
                    </Icon>
                    <Title>تصميم الجرافيك</Title>
                    <SubTitle> 
                        نترجم ونلخص أفكارك في تصميم حيوي يجذب أنظار عملائك إليك
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.87 52.684">
                <g id="Group_17088" data-name="Group 17088" transform="translate(-557.5 -1616.27)">
                  <rect id="Rectangle_194" data-name="Rectangle 194" width="58.87" height="36.968" rx="4.063" transform="translate(558.5 1617.27)" fill="none" stroke="#22274e" strokeWidth="2"/>
                  <path id="Path_5249" data-name="Path 5249" d="M619.795,305.319c-.828-.746-1.5-.446-1.5.669v16.383c0,1.115.677,1.416,1.5.669l11.638-7.5a1.8,1.8,0,0,0,0-2.716Z" transform="translate(-36.53 1321.228)" fill="none" stroke="#22274e" strokeWidth="2"/>
                  <path id="Union_1" data-name="Union 1" d="M27,3.965h0a3.965,3.965,0,1,1,7.929,0h0a3.965,3.965,0,0,1-7.929,0Z" transform="translate(558.5 1660.024)" fill="none" stroke="#22274e" strokeLinecap="round" strokeWidth="2"/>
                </g>
                </Icon>
               
                    <Title>مونتاج الفيديوهات والموشن جرافيك</Title>
                    <SubTitle> 
                        الموشن جرافيك يضيف الروح لرسالتك سواء أكانت معلومات أو أشخاص تتحدث أو حتى نصوص فقط                    
                    </SubTitle>    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 54.563 60.705">
                        <g id="Document" transform="translate(0.599 0.6)">
                        <path id="Stroke_1" data-name="Stroke 1" d="M22.469.5H0" transform="translate(15.519 42.701)" fill="none" stroke="#22274e" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/>
                        <path id="Stroke_2" data-name="Stroke 2" d="M22.469.5H0" transform="translate(15.519 29.511)" fill="none" stroke="#22274e" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/>
                        <path id="Stroke_3" data-name="Stroke 3" d="M8.574.5H0" transform="translate(15.52 16.351)" fill="none" stroke="#22274e" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/>
                        <path id="Stroke_4" data-name="Stroke 4" d="M37.837,0,13.908.013C5.319.066,0,5.788,0,14.515V43.489C0,52.261,5.359,58,14.023,58L37.952,58c8.589-.054,13.911-5.778,13.911-14.506V14.515C51.863,5.744,46.5,0,37.837,0Z" transform="translate(0.751 0.75)" fill="none" stroke="#22274e" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2.7"/>
                        </g>
                    </Icon>
                    <Title>كتابة محتوى</Title>
                    <SubTitle> 
                        نرشدك لمجتمع عملائك عن طريق كتابة محتوى يليق بطموح توسعاتك المستقبلية نساعدك على إيصال خدماتك عبر استهداف شريحة ترغبها من عملائك المحتملين                   
                    </SubTitle>    
                </Box>
            </SwiperSlide>
        </SecDiv>
    </Swiper>    
    );
}

export default SecondServices;