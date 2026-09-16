/* ================================================= */
/*                 MONTH MEMORIES                    */
/* ================================================= */


/*
  MEMORY ทั้งหมดมี 16 รายการ

  1 เดือน = 4 memories
  รวมทั้งหมด = 4 เดือน × 4 memories = 16 memories

  แต่ละ Memory มี:
  - title
  - date
  - description
  - photo

  เปลี่ยนชื่อไฟล์รูปให้ตรงกับไฟล์จริงของคุณได้เลย
*/


const memories = {

  /* ================= MONTH 1 ================= */

  1: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "ถ่าย photobooth ครั้งแรก แล้วก็ไปกิน Kofuku และกิน Olino พุงเต่ง",

    photo:
      "07luv.jpg"

  },


  2: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "ไปนั่ง welcome drink ด้วยกัน ค่ตเปรี้ยว",

    photo:
      "08luv.jpg"

  },


  3: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "แต่งตัวไปเท่วและถ่ายรูปจากนั้นกินแซ่บ",

    photo:
      "09luv.jpg"

  },


  4: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "ไปหาอัยอ้วนหลังเลิกงานหอมแก้มโชว์ 1 ที",

    photo:
      "10luv.jpg"

  },


  /* ================= MONTH 2 ================= */

  5: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",
    description:
      "ให้ดอกกุหลาบแฟน เพราะแฟนชอบดอกไม้ อยากให้ทุกครั้งที่เจอกันเลย",

    photo:
      "11.jpg"

  },


  6: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "เจอกันปุ้ปกอดกันกลมดิ้กเยยยย",

    photo:
      "12.jpg"

  },


  7: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "หอมแก้มอีกแย้ว ก็แก้มแฟนนุ่มอะ",

    photo:
      "13.jpg"

  },


  8: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "แก้มเค้าก็นุ่ม นี่ไงอัยอ้วนบีบโชว์ไปที",

    photo:
      "14.jpg"

  },


  /* ================= MONTH 3 ================= */

  9: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "กินข้าวนำกันเด้ออ้าย",

    photo:
      "17.jpg"

  },


  10: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "ถ่ายรูปหน้ากระจกเก๊ก ๆ ถ่ายทุกที่ที่มีกระจกเยย",

    photo:
      "16.jpg"

  },


  11: {

   title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "ถ่ายรูปด้วยกันแล้วทำสร้อยข้อมือด้วยกัน น่ารักงะ",

    photo:
      "15.jpg"

  },


  12: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "กินแซ่บอีกแย้ว แต่รูปนี้หน้าเหมือนกันมาก",

    photo:
      "18.jpg"

  },


  /* ================= MONTH 4 ================= */

  13: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "เจอกระจกต้องแวะถ่ายหมดเยย555555",

    photo:
      "19.jpg"

  },


  14: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "พากันกินแซ่บ แต่ชอบสายตาอ้วนเวลามองเค้าจังเยยย",

    photo:
      "20.jpg"

  },


  15: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "อยากกินย้อยหย่อยอีก ตามรอยแอพดำ55555",

    photo:
      "21.jpg"

  },


  16: {

    title: "♡",

    date: "ℒ𝓸𝓿𝒆 𝔂𝓸𝓾",

    description:
      "ไปส่งอัยอ้วนขึ้นรถกลับมอ คิดถึงจัง",

    photo:
      "22.jpg"

  }

};


/* ================================================= */
/*                 OPEN MEMORY                       */
/* ================================================= */

function openMemory(id) {

  const data = memories[id];


  if (!data) {

    return;

  }


  document
    .getElementById("popupTitle")
    .textContent = data.title;


  document
    .getElementById("popupDate")
    .textContent = data.date;


  document
    .getElementById("popupDescription")
    .textContent = data.description;


  const image =
    document.getElementById("popupImage");


  image.src =
    data.photo;


  image.alt =
    data.title;


  /*
    เปิด animation ใหม่ทุกครั้ง
    เพื่อให้รูปมี animation ตอนเปลี่ยน
  */

  image.style.animation = "none";

  void image.offsetWidth;

  image.style.animation =
    "photoAppear 0.35s ease";


  document
    .getElementById("popup")
    .classList.add("open");


  document.body.style.overflow =
    "hidden";

}


/* ================================================= */
/*                 CLOSE POPUP                       */
/* ================================================= */

function closeMemory() {

  document
    .getElementById("popup")
    .classList.remove("open");


  document.body.style.overflow =
    "";

}


/* ================================================= */
/*             CLICK OUTSIDE POPUP                   */
/* ================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const popup =
      document.getElementById("popup");


    /*
      คลิกพื้นที่มืดด้านนอก
      เพื่อปิด popup
    */

    if (popup) {

      popup.addEventListener(
        "click",
        (event) => {

          if (
            event.target === popup
          ) {

            closeMemory();

          }

        }
      );

    }


    /*
      กด ESC เพื่อปิด popup
    */

    document.addEventListener(
      "keydown",
      (event) => {

        if (!popup) {

          return;

        }


        const isOpen =
          popup.classList.contains("open");


        if (!isOpen) {

          return;

        }


        if (
          event.key === "Escape"
        ) {

          closeMemory();

        }

      }
    );


    /*
      เพลงจบแล้ว
      ให้ปุ่มกลับเป็น ▶

      หมายเหตุ:
      ตอนนี้ HTML ของเธอเอา Music Player ออกแล้ว
      ส่วนนี้จึงจะไม่ทำงาน และจะไม่รบกวนเว็บไซต์
    */

    const music =
      document.getElementById("music");


    const musicButton =
      document.getElementById("musicButton");


    if (music && musicButton) {

      music.addEventListener(
        "ended",
        () => {

          musicButton.textContent =
            "▶";

        }
      );

    }

  }
);


/* ================================================= */
/*                    MUSIC                          */
/* ================================================= */

function toggleMusic() {

  const music =
    document.getElementById("music");


  const button =
    document.getElementById("musicButton");


  if (!music || !button) {

    return;

  }


  if (music.paused) {

    music
      .play()

      .then(() => {

        button.textContent =
          "❚❚";

      })

      .catch(() => {

        button.textContent =
          "▶";


        alert(
          "ใส่ไฟล์เพลง music.mp3 ไว้โฟลเดอร์เดียวกับไฟล์นี้ก่อนนะครับ ถึงจะเล่นได้"
        );

      });

  }

  else {

    music.pause();

    button.textContent =
      "▶";

  }

}


/* ================================================= */
/*       RELATIONSHIP TIMER + ANNIVERSARY            */
/* ================================================= */


/*
  วันและเวลาเริ่มคบกัน

  20 พฤษภาคม 2026
  เวลา 20:30 น.
*/

const relationshipStart =
  new Date("2026-05-20T20:30:00+07:00");


/*
  ฟังก์ชันช่วยหา
  "เดือนที่ครบจริง" จากวันที่เริ่มคบ

  เช่น:
  20 พ.ค. → 20 มิ.ย. = 1 เดือน
  20 พ.ค. → 20 ต.ค. = 5 เดือน
*/

function getCompletedMonths(now) {

  let months =
    (now.getFullYear() -
      relationshipStart.getFullYear()) * 12
    +
    (now.getMonth() -
      relationshipStart.getMonth());


  const anniversaryThisMonth =
    new Date(relationshipStart);


  anniversaryThisMonth.setMonth(
    relationshipStart.getMonth() + months
  );


  /*
    ถ้ายังไม่ถึงเวลา/วันครบรอบ
    ให้ลดเดือนลง 1
  */

  if (now < anniversaryThisMonth) {

    months--;

  }


  if (months < 0) {

    months = 0;

  }


  return months;

}


/*
  หา "วันครบรอบเดือนถัดไป"
*/

function getNextAnniversary(monthsCompleted) {

  const nextAnniversary =
    new Date(relationshipStart);


  nextAnniversary.setMonth(
    relationshipStart.getMonth() +
    monthsCompleted +
    1
  );


  return nextAnniversary;

}


/* ================================================= */
/*             UPDATE RELATIONSHIP TIMER             */
/* ================================================= */

function updateRelationshipTimer() {

  /*
    ถ้าหน้า HTML ไม่มีตัวนับ
    ก็ไม่ต้องทำอะไร
  */

  const monthsElement =
    document.getElementById("months");

  const daysElement =
    document.getElementById("days");

  const hoursElement =
    document.getElementById("hours");

  const minutesElement =
    document.getElementById("minutes");

  const secondsElement =
    document.getElementById("seconds");


  if (
    !monthsElement ||
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement
  ) {

    return;

  }


  const now =
    new Date();


  /*
    ถ้ายังไม่ถึงวันเริ่มคบ
  */

  if (now < relationshipStart) {

    monthsElement.textContent = "0";
    daysElement.textContent = "0";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    updateNextMilestone(
      now,
      0
    );

    return;

  }


  const monthsCompleted =
    getCompletedMonths(now);


  /*
    วันครบรอบล่าสุด
  */

  const latestAnniversary =
    new Date(relationshipStart);


  latestAnniversary.setMonth(
    relationshipStart.getMonth() +
    monthsCompleted
  );


  /*
    เวลาที่ผ่านไปหลังจาก
    ครบรอบเดือนล่าสุด
  */

  let remaining =
    now - latestAnniversary;


  if (remaining < 0) {

    remaining = 0;

  }


  const second =
    1000;

  const minute =
    second * 60;

  const hour =
    minute * 60;

  const day =
    hour * 24;


  const days =
    Math.floor(
      remaining / day
    );


  remaining %= day;


  const hours =
    Math.floor(
      remaining / hour
    );


  remaining %= hour;


  const minutes =
    Math.floor(
      remaining / minute
    );


  const seconds =
    Math.floor(
      (remaining % minute) /
      second
    );


  /*
    แสดงผลตัวนับ
  */

  monthsElement.textContent =
    monthsCompleted;


  daysElement.textContent =
    days;


  hoursElement.textContent =
    String(hours).padStart(
      2,
      "0"
    );


  minutesElement.textContent =
    String(minutes).padStart(
      2,
      "0"
    );


  secondsElement.textContent =
    String(seconds).padStart(
      2,
      "0"
    );


  /*
    อัปเดต milestone ถัดไป
  */

  updateNextMilestone(
    now,
    monthsCompleted
  );

}


/* ================================================= */
/*              NEXT LITTLE MILESTONE                */
/* ================================================= */

function updateNextMilestone(
  now,
  monthsCompleted
) {

  const milestoneTitle =
    document.getElementById(
      "nextMilestone"
    );

  const countdownDays =
    document.getElementById(
      "countdownDays"
    );

  const countdownHours =
    document.getElementById(
      "countdownHours"
    );

  const countdownMinutes =
    document.getElementById(
      "countdownMinutes"
    );

  const countdownSeconds =
    document.getElementById(
      "countdownSeconds"
    );


  /*
    ถ้า HTML ยังไม่มีส่วน
    Next Little Milestone
    ก็ไม่ต้องทำอะไร
  */

  if (
    !milestoneTitle ||
    !countdownDays ||
    !countdownHours ||
    !countdownMinutes ||
    !countdownSeconds
  ) {

    return;

  }


  const nextMonths =
    monthsCompleted + 1;


  const nextAnniversary =
    getNextAnniversary(
      monthsCompleted
    );


  /*
    ชื่อ milestone
  */

  milestoneTitle.textContent =
    `${nextMonths} Months`;


  /*
    เวลาที่เหลือ
  */

  let countdown =
    nextAnniversary - now;


  if (countdown < 0) {

    countdown = 0;

  }


  const second =
    1000;

  const minute =
    second * 60;

  const hour =
    minute * 60;

  const day =
    hour * 24;


  const days =
    Math.floor(
      countdown / day
    );


  countdown %= day;


  const hours =
    Math.floor(
      countdown / hour
    );


  countdown %= hour;


  const minutes =
    Math.floor(
      countdown / minute
    );


  const seconds =
    Math.floor(
      (countdown % minute) /
      second
    );


  countdownDays.textContent =
    days;


  countdownHours.textContent =
    String(hours).padStart(
      2,
      "0"
    );


  countdownMinutes.textContent =
    String(minutes).padStart(
      2,
      "0"
    );


  countdownSeconds.textContent =
    String(seconds).padStart(
      2,
      "0"
    );

}


/* ================================================= */
/*              START RELATIONSHIP TIMER             */
/* ================================================= */


/*
  ทำงานทันทีเมื่อเปิดเว็บ
*/

updateRelationshipTimer();


/*
  อัปเดตทุก 1 วินาที
*/

setInterval(
  updateRelationshipTimer,
  1000
);
