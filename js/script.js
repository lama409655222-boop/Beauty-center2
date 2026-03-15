window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
// الحصول على العناصر
const modal = document.getElementById("loginModal");
const loginBtn = document.getElementById("login-btn"); // تأكدي أن id الزر متطابق
const closeBtn = document.querySelector(".close-btn");

// 1. فتح النافذة عند الضغط على زر Login
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// 2. إغلاق النافذة عند الضغط على علامة X
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// 3. إغلاق النافذة عند الضغط في أي مكان خارج الصندوق الأبيض
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // منع الصفحة من التحديث
        
        // هنا يمكنك إضافة كود إرسال البيانات الفعلي لاحقاً
        
        const submitBtn = contactForm.querySelector('.btn');
        submitBtn.innerText = 'تم الإرسال بنجاح ✅';
        submitBtn.style.background = '#27ae60';
        
        // إعادة تعيين الحقول
        contactForm.reset();
        
        // إعادة الزر لحالته الأصلية بعد 3 ثوانٍ
        setTimeout(() => {
            submitBtn.innerText = 'إرسال الرسالة';
            submitBtn.style.background = '#5d8440';
        }, 3000);
    });
}
document.querySelector('.reademore').addEventListener('click', () => {
    alert("مركز سبيفيل هو وجهتكم الأولى للاسترخاء، تأسسنا عام 2020 لتقديم أرقى خدمات التدليك والعناية.");
});