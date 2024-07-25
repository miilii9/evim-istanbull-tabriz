import React from "react";
import Link from "next/link";
import styles from "@/styles/footer.module.css";

export default function MainFooter() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterBody}>
        <div className={styles.FooterBodyText}>
          <div className={styles.FooterText}>
            <div className={styles.FooterTextGroup}>
              <p>دسترسی آسان</p>
              <nav>
                <a href='/'>صفحه اصلی</a>
                {/* <a href="">وبلاگ</a> */}
                <a href='/about-us'>درباره ما</a>
                <a href='/contact-us'>تماس با ما</a>
              </nav>
            </div>
            <div className={styles.FooterTextLoc}>
              <p> اطلاعات تماس</p>
              <div>
                <img src='/icons/locationBlue.png' alt='آدرس شعبه مرکزی'></img>
                <span>
                  آدرس دفتر تبریز: تبریز، ولیعصر، برج تجارت جهانی، طبقه چهار
                </span>
              </div>
              <div>
                <img src='/icons/phoneBlue.png' alt='تلفن دفتری مرکزی'></img>
                <span className='flex align-middle items-center'>
                  تلفن دفتر تبریز:{"09020008804 "}
                </span>
              </div>
              <div>
                <img src='/icons/locationBlue.png' alt='آدرس شعبه مرکزی'></img>
                <span>
                  آدرس دفتر استانبول: استانبول ,بیلیکدوزو ,محله نازیم حکمت
                  ,ساختمان مارمارا کونسپت
                </span>
              </div>
              <div>
                <img src='/icons/phoneBlue.png' alt='تلفن دفتری مرکزی'></img>
                <span className='flex align-middle items-center'>
                  تلفن دفتر استانبول:{"905411852316 "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.FooterBodyContent}>
          <a>
            <img
              src='/media/evim-logo.png'
              alt='اویم استانبول '
              className={styles.logo}></img>
          </a>
          <p>
            اویم استانبول، تعریف نوین فروش و خدمات
            <br />
            <br />
            اویم استانبول مرجع کاملی از اطلاعات، محصولات و خدمات املاک
          </p>

          <p className={styles.FooterBodyContentTex}>
            با ما در شبکه های اجتماعی همراه باشید
          </p>
          <div className={styles.FooterBodyApplication}>
            <a href='https://www.aparat.com/salar_amiri'>
              <img src='/icons/aparat.png' alt='کانال آپارات ' />
            </a>
            <a href='https://www.instagram.com/evimistanbull.tab'>
              <img src='/icons/instagramBlue.png' alt='صفحه اینستاگرام'></img>
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=905411852316'
              target='_blank'>
              <img src='/icons/whatsappBlue.png' alt='صفحه whatsapp'></img>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.FooterEnd}>
        <p> تمامی حقوق مادی و معنوی وب سایت متعلق به اویم استانبول </p>
      </div>
    </div>
  );
}

// import React from "react";
// import Image from "next/image";
// export default function MainFooter() {
//   return (
//     <footer className='bg-white dark:bg-gray-800'>
//       <div className='max-w-screen-xl p-4 py-10 mx-auto lg:pt-20 md:p-8 lg:p-10'>
//         <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 w-full justify-items-center'>
//           <div>
//             <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
//               صفحات
//             </h3>
//             <ul className='text-gray-500 dark:text-gray-400'>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   صفحه اصلی
//                 </a>
//               </li>
//               <li className='mb-4'>
//                 <a href='#' className=' hover:underline'>
//                   درباره ما
//                 </a>
//               </li>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   خدمات ما
//                 </a>
//               </li>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   تماس با ما
//                 </a>
//               </li>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   قوانین و مقررات
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
//               راهنما
//             </h3>
//             <ul className='text-gray-500 dark:text-gray-400'>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   تهاتر ملک
//                 </a>
//               </li>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   خرید اقساطی
//                 </a>
//               </li>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   مهاجرت
//                 </a>
//               </li>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   سوالات متداول
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
//               راه های ارتباطی با ما{" "}
//             </h3>
//             <ul className='text-gray-500 dark:text-gray-400 flex flex-col items-center '>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   <Image
//                     alt='icon'
//                     src='/icons/instagram.png'
//                     width={30}
//                     height={30}
//                   />
//                 </a>
//               </li>
//               <li className='mb-4'>
//                 <a
//                   href='https://wa.me/905411852316?text=Hello'
//                   className='hover:underline'>
//                   <Image
//                     alt='icon'
//                     src='/icons/whatsapp.png'
//                     width={30}
//                     height={30}
//                   />
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
//               اپلیکیشن ها
//             </h3>
//             <ul className='text-gray-500 dark:text-gray-400'>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   iOS
//                 </a>
//               </li>
//               <li className='mb-4'>
//                 <a href='#' className='hover:underline'>
//                   Android
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
//         <div className='text-center'>
//           <div className='w-full flex justify-center mb-8'>
//             <Image
//               src='/media/evim-logo.png'
//               alt='Evim Logo'
//               width={70}
//               height={70}
//             />
//           </div>
//           <span className='block text-sm text-center text-gray-500 dark:text-gray-400'>
//             تمامی حقوق متعلق به اویم استانبول می‌باشد
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// }
