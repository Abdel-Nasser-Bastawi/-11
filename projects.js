
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const navOverlay = document.getElementById("navOverlay");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    function toggleMenu() {
        menuToggle.classList.toggle("active");
        mobileDrawer.classList.toggle("active");
        navOverlay.classList.toggle("active");

        // منع تمرير الصفحة الرئيسية عند فتح القائمة
        if (mobileDrawer.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }

    menuToggle.addEventListener("click", toggleMenu);
    navOverlay.addEventListener("click", toggleMenu);

    // إغلاق القائمة عند الضغط على أي رابط
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mobileDrawer.classList.contains("active")) {
                toggleMenu();
            }
        });
    });
});



const projectsData = [



{
  img: 'img/fb5644c9-6cda-49e6-a89d-7721d47b9a24.jpg',
  type: 'التنفيذ والإشراف على أعمال الديكور الداخلي والخارجي',
  title: 'تنفيذ والإشراف على أعمال الديكور الداخلي والخارجي لأول 10 فلل بالجونة، مع متابعة جميع مراحل التشطيب',
  location: 'الغردقة، جمهورية مصر العربية',
  desc: 'مشروع متكامل يتضمن التنفيذ والإشراف الهندسي على أعمال الديكور الداخلي والخارجي لأول 10 فلل سكنية فاخرة في الجونة، مع المتابعة الدقيقة لكافة مراحل التشطيب لضمان أعلى معايير الجودة والرفاهية.'
},
{
  img: 'img/54831d4e-04bc-4ca7-a943-0e42ab0813ce.png',
  type: 'استوديو الأخبار — القناة الأولى',
  title: 'تصميم وتنفيذ الديكور الداخلي لاستوديو الأخبار بالقناة الأولى',
  location: 'القاهرة، جمهورية مصر العربية',
  desc: 'تصميم وتنفيذ الديكور الداخلي لاستوديو الأخبار بالقناة الأولى في أواخر التسعينيات، بما يتناسب تماماً مع متطلبات البث التلفزيوني الحديث والهوية البصرية للقناة.'
},
{
  img: 'img/34ce0b9c-c125-47f9-960b-9f051264ea4e.png',
  type: 'تصميم وتنفيذ الديكورات السينمائية',
  title: 'فيلم «المهاجر» — إخراج يوسف شاهين',
  location: 'القاهرة، جمهورية مصر العربية',
  desc: 'المشاركة الفعالة في تصميم وتنفيذ ديكورات فيلم «المهاجر» بقيادة المخرج الراحل يوسف شاهين، بما يخدم الرؤية الفنية ويعكس الطابع التاريخي والدرامي للعمل، مع الاهتمام الفائق بالتفاصيل البصرية وجودة التنفيذ.'
},
{
  img: 'img/2bf8bbb4-ae00-40ac-b975-044bb0f8f3fa.png',
  type: 'تنفيذ والإشراف على أعمال الديكور والتشطيبات',
  title: 'مبنى قيادة مرور الجيزة',
  location: 'الجيزة، جمهورية مصر العربية',
  desc: 'المشاركة في تنفيذ والإشراف على أعمال الديكور والتشطيبات لمبنى قيادة مرور الجيزة، بالتعاون مع المهندس عثمان أحمد عثمان، مع متابعة جودة التنفيذ والالتزام التام بالمواصفات الفنية والهندسية.'
},

{
  img: 'img/6f952646-f8c3-4ec5-a9c4-024a6b51b1d2.png',
  type: 'صيانة وتحديث المتحف المصري',
  title: 'المشاركة في أعمال الصيانة والتحديث بالمتحف المصري',
  location: 'ميدان التحرير، القاهرة، جمهورية مصر العربية',
  desc: 'المشاركة ضمن فريق العمل في تنفيذ أعمال الصيانة والتحديث بالمتحف المصري بميدان التحرير، مع المساهمة في تطوير وتجديد بعض العناصر الداخلية، والحفاظ على الطابع التاريخي والمعماري العريق للمبنى.'
},
{
  img: 'img/172601dd-8798-4986-a186-a9a0386acb71.png',
  type: 'ترميم وتجديد قلعة ومسجد محمد علي',
  title: 'المشاركة في أعمال الترميم والتجديد بقلعة ومسجد محمد علي',
  location: 'القاهرة، جمهورية مصر العربية',
  desc: 'المشاركة الفعالة ضمن فريق العمل في تنفيذ أعمال الترميم والتجديد بقلعة ومسجد محمد علي لصالح هيئة الآثار المصرية، مع المساهمة في الحفاظ على الطابع التاريخي والمعماري الأثري للموقع.'
},
{
  img: 'img/990ba959-f9c7-48d2-9fbf-579fcd69836c.png',
  type: 'تنفيذ مصنع النساجون الشرقيون',
  title: 'المشاركة في تنفيذ أعمال إنشاء وتجهيز مصنع النساجون الشرقيون',
  location: 'العاشر من رمضان، جمهورية مصر العربية',
  desc: 'المشاركة في تنفيذ أعمال إنشاء وتجهيز مصنع النساجون الشرقيون بمدينة العاشر من رمضان، مع متابعة مراحل التنفيذ بدقة والالتزام التام بالمواصفات الفنية ومعايير الجودة الصناعية المطلوبة.'
},
{
  img: 'img/d454ee80-3979-4a62-ab22-364f5dd25739.png',
  type: 'تنفيذ مصنع داو',
  title: 'المشاركة في تنفيذ أعمال إنشاء وتجهيز مصنع داو',
  location: 'العاشر من رمضان، جمهورية مصر العربية',
  desc: 'المشاركة في تنفيذ أعمال إنشاء وتجهيز مصنع داو بمدينة العاشر من رمضان لصالح شركة ناب كنتركت، مع متابعة مراحل التنفيذ هندسياً والالتزام بالمواصفات الفنية ومعايير الجودة المعتمدة.'
},


{
  img: 'img/ce661ec8-3fd1-4fb1-ac74-179eec98b562.png',
  type: 'تنفيذ رصيف بحري',
  title: 'المشاركة في تنفيذ أعمال إنشاء وتجهيز رصيف بحري',
  location: 'ميناء الغردقة العسكري، الغردقة، جمهورية مصر العربية',
  desc: 'المشاركة الفعالة في تنفيذ أعمال إنشاء وتجهيز رصيف بحري بميناء الغردقة العسكري، مع متابعة دقيقة لمراحل التنفيذ والالتزام التام بالمواصفات الفنية ومتطلبات الجودة والسلامة البحرية.'
},
{
  img: 'img/86a07810-1d92-49e0-be0f-a973bd0b533d.png',
  type: 'تنفيذ أعمال الديكور والتشطيبات',
  title: 'تنفيذ أعمال الديكور والتشطيبات لمصنع موكيت ماك',
  location: 'مدينة العاشر من رمضان، القاهرة، جمهورية مصر العربية',
  desc: 'تنفيذ أعمال الديكور والتشطيبات المتكاملة لمصنع موكيت ماك، بما يحقق بيئة عمل عملية وعصرية تتوافق مع متطلبات المنشآت الصناعية الكبرى، مع الالتزام بجودة التنفيذ ودقة التشطيبات وفق أعلى المعايير الفنية.'
},
{
  img: 'img/c3952a50-20a2-46a2-b540-8a2e8ecf2e6d.png',
  type: 'أعمال ديكور وتنفيذ مواقع تصوير',
  title: 'مسلسل ألف ليلة وليلة – السيرة الهلالية',
  location: 'القاهرة، جمهورية مصر العربية',
  desc: 'المشاركة ضمن فريق العمل في تنفيذ أعمال الديكور الخاصة بمسلسل ألف ليلة وليلة – السيرة الهلالية لصالح التلفزيون المصري، من خلال تجهيز عناصر الديكور بما يعكس الطابع التاريخي والدرامي للعمل بدقة واحترافية عالية.'
},
{
  img: 'img/cb4bdfc4-5498-460b-a38e-3d90b5bc23ce.png',
  type: 'تشطيبات وديكورات داخلية وخارجية',
  title: 'تشطيب وديكور فيلا المهندس حسين عثمان',
  location: 'الجيزة، مصر',
  desc: 'تنفيذ أعمال التشطيبات والديكورات المتكاملة لفيلا المهندس حسين عثمان بالجيزة، مع التركيز على دقة التفاصيل وجودة التنفيذ للمواد والأسطح المختلفة، وتوظيف العناصر الزخرفية والإضاءة المدروسة لإبراز الفخامة والتناغم البصري.'
},
{
  img: 'img/2973c671-9524-467b-8d17-32ea2f4f203f.png',
  type: 'تصميم وتنفيذ ديكورات داخلية وخارجية',
  title: 'تصميم وتنفيذ ديكورات فيلا محمود سوسة',
  location: 'مدينة الرحاب، القاهرة، مصر',
  desc: 'مشروع تصميم وتنفيذ ديكورات شامل لفيلا محمود سوسة، يجمع بين الأناقة العصرية واللمسات الفاخرة، مع تحويل المساحات الداخلية والخارجية إلى بيئة معيشية متناغمة وعملية تلبي احتياجات الأسرة وفق أدق تفاصيل التشطيبات والإنارة.'
},
{
  img: 'img/019aaf67-d75d-4726-a79c-24d7663da18e.png',
  type: 'تصميم وتنفيذ الديكورات والتشطيبات',
  title: 'تصميم وتنفيذ أعمال الديكورات لفيلا تراثية للأستاذة فريحة السيد',
  location: 'القاهرة، جمهورية مصر العربية',
  desc: 'تصميم وتنفيذ أعمال الديكورات والتشطيبات لفيلا تراثية للأستاذة فريحة السيد، مع الحفاظ على الطابع المعماري التراثي وإبراز التفاصيل الزخرفية الأصيلة لتحقيق التوازن بين الهوية التاريخية والوظيفة المعاصرة.'
},
{
  img: 'img/02bce2cf-ef23-4bce-9241-61fbfd528b5a.png',
  type: 'تنسيق مواقع ولاندسكيب',
  title: 'المشاركة في تنفيذ أعمال إنشاء الحديقة الدولية',
  location: 'مدينة مصر، القاهرة، جمهورية مصر العربية',
  desc: 'المشاركة مع فريق العمل في تنفيذ أعمال إنشاء الحديقة الدولية، والتي تشمل تنسيق الموقع العام وتنفيذ العناصر الجمالية والفراغات الخارجية بما يحقق بيئة متكاملة تجمع بين الجمال والوظيفة وفق أعلى معايير التنفيذ.'
},
{
  img: 'img/9803ca1c-8d59-40f5-aa9f-352ccb384b23.png',
  type: 'أعمال ديكور وتشطيبات',
  title: 'تنفيذ أعمال الديكور والتشطيبات الداخلية لفيلا الأستاذ محسن طاهر',
  location: 'الغردقة، محافظة البحر الأحمر، جمهورية مصر العربية',
  desc: 'تنفيذ أعمال الديكور والتشطيبات الداخلية لفيلا الأستاذ محسن طاهر، مع الاهتمام بتنسيق الخامات وجودة التنفيذ وإبراز التفاصيل المعمارية لتحقيق بيئة سكنية تجمع بين الفخامة والراحة وفق أعلى المعايير الفنية.'
},
{
  img: 'img/1db9874d-e866-4b70-9caf-99355a3a357f.png',
  type: 'إنشاء منشآت صناعية',
  title: 'تنفيذ أعمال إنشاء مصنع النيل للملابس الجاهزة',
  location: 'منطقة حلوان، القاهرة، جمهورية مصر العربية',
  desc: 'المشاركة في تنفيذ أعمال إنشاء مصنع النيل للملابس الجاهزة بمنطقة حلوان لصالح شركة ناب كنتركت، مع متابعة مراحل التنفيذ والالتزام بالمواصفات الفنية ومعايير الجودة لضمان إنجاز المشروع بكفاءة عالية.'
},
{
  img: 'img/88d58983-61f4-47c2-a8a0-4ffc89107e83.png',
  type: 'تصميم وتنفيذ الديكورات والتشطيبات',
  title: 'تصميم وتنفيذ ديكورات وتشطيبات فيلا السيدة زينة',
  location: 'جاردن سيتي، القاهرة، جمهورية مصر العربية',
  desc: 'تصميم وتنفيذ أعمال الديكورات والتشطيبات الداخلية لفيلا السيدة زينة، مع تقديم حلول تصميمية راقية تجمع بين الفخامة والوظيفة، والاهتمام بأدق التفاصيل لتحقيق أعلى مستويات الجودة في التنفيذ.'
}

]




  



// دالة عامة لإنشاء وبناء بطاقات المشاريع داخل أي حاوية
function renderProjects(projectsArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;


  projectsArray.forEach((project, index) => {
    const article = document.createElement('article');
    article.className = 'project-card reveal-up';
    article.setAttribute('data-project', index);

    article.innerHTML = `
      <div class="project-card__media">
        <img src="${project.img}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-card__info">
        <span class="project-card__type">${project.type}</span>
        <h3>${project.title}</h3>
        <p>${project.location}</p>
        <p class="project-desc">${project.desc}</p>
      </div>
    `;

    container.appendChild(article);
  });
}

// تنفيذ الدوال عند تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
  renderProjects(constructionProjects, 'projectsSlider');
  renderProjects(eventsProjects, 'eventsSlider');
});

const sliderContainer = document.getElementById('projectsSlider');

// توليد الكاردات وعرضها ديناميكياً مع الوصف
projectsData.forEach((project, index) => {
  const cardHTML = `
    <article class="project-card reveal-up" data-project="${index}">
      <div class="project-card__media">
        <img src="${project.img}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-card__info">
        <span class="project-card__type">${project.type}</span>
        <h3>${project.title}</h3>
        <p class="project-location"><i class="fa-solid fa-location-dot"></i> ${project.location}</p>
        <p class="project-desc">${project.desc}</p>
      </div>
    </article>
  `;
  sliderContainer.innerHTML += cardHTML;
});

// تفعيل أزرار التمرير العرضي يمين ويسار
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (nextBtn && prevBtn && sliderContainer) {
  nextBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({ left: 350, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({ left: -350, behavior: 'smooth' });
  });
}







document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('testiTrack');
    const slides = Array.from(track?.children || []);
    const prevBtn = document.getElementById('testiPrev');
    const nextBtn = document.getElementById('testiNext');
    const dotsContainer = document.getElementById('testiDots');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoplayTimer = null;

    // 1. توليد النقاط (Dots) ديناميكياً
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `عرض الشهادة ${index + 1}`);
        if (index === 0) dot.classList.add('is-active');
        
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    // 2. دالة الانتقال بين الكروت (متوافقة رياضياً مع اتجاه الـ RTL)
    function goToSlide(index) {
        // حماية الـ Index من الخروج عن النطاق
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        currentIndex = index;

        // السر هنا: في الـ RTL (من اليمين لليسار)، الموجب يحرك المسار لليمين ليكشف العناصر التي باليسار
        track.style.transform = `translateX(${currentIndex * 100}%)`;

        // تحديث حالة النقاط
        dots.forEach((dot, idx) => {
            dot.classList.toggle('is-active', idx === currentIndex);
        });
    }

    // 3. أزرار الأسهم
    nextBtn?.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoplay();
    });

    prevBtn?.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoplay();
    });

    // 4. التشغيل التلقائي (كل 5 ثواني)
    function startAutoplay() {
        autoplayTimer = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    }

    function stopAutoplay() {
        clearInterval(autoplayTimer);
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // إيقاف التلقائي عند لمس أو وضع الماوس
    const sliderContainer = document.getElementById('testiSlider');
    sliderContainer?.addEventListener('mouseenter', stopAutoplay);
    sliderContainer?.addEventListener('mouseleave', startAutoplay);
    sliderContainer?.addEventListener('touchstart', stopAutoplay, { passive: true });
    sliderContainer?.addEventListener('touchend', startAutoplay, { passive: true });

    // 5. دعم السحب (Swipe) للهواتف
    let startX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        // إذا سحب المستخدم بأكثر من 40 بيكسل
        if (Math.abs(diffX) > 40) {
            if (diffX > 0) {
                // سحب لليسار (التالي في الـ RTL)
                goToSlide(currentIndex + 1);
            } else {
                // سحب لليمين (السابق في الـ RTL)
                goToSlide(currentIndex - 1);
            }
        }
        isDragging = false;
    }, { passive: true });

    // بدء التشغيل
    startAutoplay();
});



document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-val');

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const duration = 1800; // مدة الأنيميشن بالملي ثانية
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;

        const easeOutQuad = t => t * (2 - t); // تأثير حركة سلس يبدأ سريعاً وينتهي بنعومة

        const timer = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const currentCount = Math.round(target * progress);

            if (frame === totalFrames) {
                counter.innerText = target;
                clearInterval(timer);
            } else {
                counter.innerText = currentCount;
            }
        }, frameDuration);
    };

    // التشغيل عند الوصول للسكشن في الموبايل
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const countElements = entry.target.querySelectorAll('.count-val');
                countElements.forEach(el => animateCounter(el));
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const section = document.querySelector('.counters-section');
    if (section) observer.observe(section);
});




document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const items = document.querySelectorAll(".timeline-item");
    items.forEach(item => observer.observe(item));
});













const eventsProjects = [
  

{
  img: 'img/066cca31-6683-48c0-8002-e5b8d8a8dbf8.jpg',
  type: 'تنظيم وإقامة المعارض',
  title: 'معرض الفن التشكيلي',
  location: 'محافظة الجبيل، المنطقة الشرقية، المملكة العربية السعودية',
  desc: 'المشاركة في تنظيم وإقامة معرض الفن التشكيلي بمحافظة الجبيل، والذي أُقيم بقاعة الأمير متعب تحت رعاية المحافظ، وشهد مشاركة ما يقارب 500 فنان وفنانة تشكيلية من مختلف أنحاء المملكة العربية السعودية.',
},

{
  img: 'img/da8e6a94-4b72-4baf-a5dc-8166bf930722.png',
  type: 'تنظيم وإقامة المعارض',
  title: 'معرض أنوارالخبر  بمدينة الخبر ',
  location:'مدينة الخبر، المنطقة الشرقية، المملكة العربية السعودية' ,
  desc:'لمشاركة في تنظيم وإدارة معرض أنوار الخبر  بمدينة الخبر، من خلال الإشراف على الجوانب التنظيمية والتنسيقية للحدث، بما يسهم في ضمان سير الفعاليات بكفاءة وتحقيق أهدافها، مع الحصول على شهادة تكريم تقديرًا للمساهمة الفاعلة في نجاح المعرض',
},



{
  img: 'img/a67d4344-a5da-478a-ba0d-1a074b19d053.jpg',
  type: 'تنظيم وإدارة المعارض',
  title: 'المعرض الفني بمدينة الدمام',
  location: 'مدينة الدمام، المنطقة الشرقية، المملكة العربية السعودية',
  desc: 'المشاركة في تنظيم وإدارة معرض فني بمدينة الدمام تحت رعاية وزارة الثقافة والإعلام السعودية، بإشراف مدير عام الوزارة بالمنطقة الشرقية، الأستاذ ماجد البابطين، مع الحصول على تكريم تقديرًا للمشاركة في نجاح الحدث.',
},



{
  img: 'img/a067496c-5ccd-400a-b910-c4c385463c44.png',
  type: 'تنظيم الفعاليات الوطنية',
  title: 'فعاليات اليوم الوطني السعودي الـ89',
  location: 'حفر الباطن، المنطقة الشرقية، المملكة العربية السعودية',
  desc: 'المشاركة في تنظيم فعاليات اليوم الوطني السعودي التاسع والثمانين بمدينة حفر الباطن، مع المساهمة في تجهيز وتنفيذ الحدث، والحصول على تكريم من سمو الأمير منصور بن عبد الله تقديرًا للمشاركة.',
},




{
  img: 'img/aa851391-9e3a-4406-a70e-b637763fb824.jpg',
  type: 'تنظيم وإدارة المؤتمرات',
  title: 'المؤتمر الدولي الأول - علم النفس الواقع والطموح',
  location: 'جامعة حفر الباطن، حفر الباطن، المملكة العربية السعودية',
  desc: 'المشاركة في تنظيم المؤتمر الدولي الأول بجامعة حفر الباطن بعنوان «علم النفس.. الواقع والطموح»، والمساهمة في تجهيز وإدارة فعاليات المؤتمر، مع الحصول على تكريم من شركة العنود الدولية وجامعة حفر الباطن.',
},




{
  img: 'img/8f195acc-199c-40fb-877d-f9d9a3cec3fc.jpg',
  type: 'تنظيم وإدارة المؤتمرات',
  title: 'المؤتمر البيئي الأول - الكنز الأخضر',
  location: 'المنطقة الشرقية، المملكة العربية السعودية',
  desc: 'المشاركة في تنظيم وإدارة المؤتمر البيئي الأول بالمنطقة الشرقية بالمملكة العربية السعودية تحت عنوان "الكنز الأخضر"، برعاية وزارة البيئة والمياه والزراعة، مع الإشراف على تجهيزات المؤتمر وإدارة الفعاليات وتنسيق تجربة الحضور وفق أعلى معايير الجودة والاحترافية.',
},


];

renderProjects(eventsProjects, "eventsSlider");

const eventsSlider = document.getElementById("eventsSlider");

const eventsNextBtn = document.getElementById("eventsNextBtn");

const eventsPrevBtn = document.getElementById("eventsPrevBtn");

if (eventsSlider && eventsNextBtn && eventsPrevBtn) {

    eventsNextBtn.addEventListener("click", () => {
        eventsSlider.scrollBy({
            left: 350,
            behavior: "smooth"
        });
    });

    eventsPrevBtn.addEventListener("click", () => {
        eventsSlider.scrollBy({
            left: -350,
            behavior: "smooth"
        });
    });

}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            
            const subjectSelect = document.getElementById('subject');
            const subject = subjectSelect ? subjectSelect.options[subjectSelect.selectedIndex].text : '';
            
            const message = document.getElementById('message').value.trim();

            const whatsappNumber = "966564709073"; 

            const whatsappMessage = `رسالة جديدة من موقعك الإلكتروني:\n\n` +
                `الاسم: ${name}\n` +
                `البريد الإلكتروني: ${email}\n` +
                `رقم الجوال: ${phone || 'غير مسجل'}\n` +
                `الموضوع: ${subject}\n` +
                `الرسالة:\n${message}`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/${+966564709073}?text=${encodedMessage}`;
            
            window.open(whatsappURL, '_blank');
        });
    }
});