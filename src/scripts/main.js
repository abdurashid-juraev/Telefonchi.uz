("use strict");
// main slider
var swiper1 = new Swiper("#swiper1", {
  navigation: {
    nextEl: "#next1",
    prevEl: "#prev1",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
//==================================================
// slider-2
var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.7,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
//===================================================
// slider-3
var swiper3 = new Swiper("#swiper3", {
  slidesPerView: 1.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.7,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
//==============================================================
// slider-4
var swiper4 = new Swiper("#swiper4", {
  slidesPerView: 2.2,
  spaceBetween: 15,

  navigation: {
    nextEl: ".next4",
    prevEl: ".prev4",
  },
  breakpoints: {
    768: {
      slidesPerView: 3.4,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
//==============================================================
// slider-5
var swiper5 = new Swiper("#swiper5", {
  slidesPerView: 1.5,
  spaceBetween: 20,

  navigation: {
    nextEl: ".next5",
    prevEl: ".prev5",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.7,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
//==============================================================
const nav = document.querySelector(".nav");
const navTopBlock = document.querySelector(".top-block");
if (nav) {
  if (window.innerWidth < 992) {
    nav.insertAdjacentElement("afterend", navTopBlock);
  }
}
const navSearch = document.querySelector(".nav-search-block");
const notificationsWrap = document.querySelector(".notifications-wrap");
if ((navSearch, notificationsWrap)) {
  if (window.innerWidth < 992) {
    navSearch.insertAdjacentElement("afterend", notificationsWrap);
  }
}
//===============================================================
// lang dropdown

// let selected = document.querySelector(".selected");
// let optionsConteiner = document.querySelector(".options-container");
// let optionList = document.querySelectorAll(".option");
// let page = document.querySelector(".site-wrapper");
// if (selected) {
//   selected.addEventListener("click", function (e) {
//     e.stopPropagation();

//     optionsConteiner.classList.toggle("activ");
//   });
//   optionList.forEach((el) => {
//     el.addEventListener("click", (e) => {
//       if (selected) {
//         selected.innerHTML = el.querySelector("label").innerHTML;
//         optionsConteiner.classList.remove("activ");
//       }
//     });
//   });
//   page.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     optionsConteiner.classList.remove("activ");
//   });
// }
//====================================================================
let paymentSelected = document.querySelector(".payment-selected");
let paymentOptionsConteiner = document.querySelector(
  ".payment-options-container"
);
let paymentOptionList = document.querySelectorAll(".payment-option");

if (paymentSelected) {
  paymentSelected.addEventListener("click", function () {
    paymentOptionsConteiner.classList.toggle("activ");
  });
  paymentOptionList.forEach((el) => {
    el.addEventListener("click", () => {
      // el.stopPropagation();
      paymentSelected.innerHTML = el.querySelector("label").innerHTML;
      paymentOptionsConteiner.classList.remove("activ");
    });
  });
}

//====================================================================

let selected2 = document.querySelector(".selected2");
let optionsConteiner2 = document.querySelector(".options-container2");
let optionList2 = document.querySelectorAll(".option2");

if (selected2) {
  selected2.addEventListener("click", function () {
    optionsConteiner2.classList.toggle("activ");
  });
  optionList2.forEach((el) => {
    el.addEventListener("click", () => {
      selected2.innerHTML = el.querySelector(".label2").innerHTML;
      optionsConteiner2.classList.remove("activ");
    });
  });
}
//=========================================================================
// dropdown
// $(".filter-item-block h4").each(function (i, elFilter) {
//   $(elFilter).on("click", function () {
//     // $(elFilter).toggleClass("filter-item-open");
//     $(this)
//       .next(".filter-item")
//       .each(function (i, ele) {
//         if ($(ele).hasClass("d-block")) {
//           $(elFilter).addClass("filter-item-open");
//           $(ele).removeClass("d-block");
//         }
//         $(ele).slideToggle("400");
//       });
//   });
// });

$(".show-block").each(function (i, item) {
  $(item).css({ height: $(item).children("li").length * 41 + "px" });
});
$(".filter-item-block h4").each(function (i, elFilter) {
  $(elFilter).click(function () {
    if (!$(this).hasClass("filter-item-open")) {
      $(this).addClass("filter-item-open");
      $(this).next(".filter-item").addClass("show-block");
      $(this)
        .next(".filter-item")
        .css({
          height:
            $(this).next(".filter-item").children("li").length * 41 + "px",
        });
    } else {
      $(this).removeClass("filter-item-open");
      $(this).next(".filter-item").removeClass("show-block");
      $(this).next(".filter-item").css({ height: 0 });
    }
  });
});
//=========================================================================
// product counter
$(document).ready(function () {
  $(".btn-min").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".btn-max").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

//============================================================================
// add basket action
let cardPriceBlock = document.querySelectorAll(".card-price-inner");
let added = document.querySelectorAll(".orange-circle");

cardPriceBlock.forEach((elPriceBlock) => {
  const btn = elPriceBlock.querySelector(".card-shopping-icon");
  btn.addEventListener("click", () => {
    btn.classList.add("opacity");
    elPriceBlock.querySelector(".price").classList.add("opacity");
    elPriceBlock.querySelector(".card-order-btn").classList.add("order-click");
    setTimeout(function () {
      btn.classList.remove("opacity");
    }, 1500);
    setTimeout(function () {
      btn.classList.add("checked");
      added[1].classList.add("addProduct");
    }, 1000);
    setTimeout(function () {
      elPriceBlock
        .querySelector(".card-order-btn")

        .classList.remove("order-click");
    }, 1250);
    setTimeout(function () {
      elPriceBlock.querySelector(".price").classList.remove("opacity");
    }, 1500);
  });
});
//==========================================================================
// input password
let passwordInput = document.querySelectorAll(".wrap-input");
if (passwordInput) {
  passwordInput.forEach((elPassword) => {
    const input = elPassword.querySelector("input");
    const eye = elPassword.querySelector(".eye-wrap");
    eye.addEventListener("click", () => {
      if (input.type === "password") {
        eye.querySelector(".unview").classList.add("d-none");
        input.type = "text";
        eye.querySelector(".view").classList.add("d-block");
      } else if (input.type === "text") {
        eye.querySelector(".unview").classList.remove("d-none");
        input.type = "password";
        eye.querySelector(".view").classList.remove("d-block");
      }
    });
  });
}

//======================================================================
// image uploader
const uploadImage = document.querySelectorAll(".upload-box");

if (uploadImage) {
  uploadImage.forEach((elUpload) => {
    elUpload.addEventListener("change", (e) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        uploadBox = reader.result;
        elUpload.querySelector(
          ".upload-file"
        ).style.backgroundImage = `url(${uploadBox})`;
        if (elUpload.querySelector(".upload-bg"))
          elUpload.querySelector(".upload-bg").classList.add("d-none");
        if (elUpload.querySelector(".download-hide"))
          elUpload.querySelector(".download-hide").classList.add("d-none");
        if (elUpload.querySelector(".download-show"))
          elUpload.querySelector(".download-show").classList.add("d-block");
        if (elUpload.querySelector(".upload-text"))
          elUpload.querySelector(".upload-text").innerText = "Загружено";
      });
      reader.readAsDataURL(e.target.files[0]);
    });
  });
}
//=================================================================

//  tab modal payment
$(document).ready(function () {
  (function ($) {
    $(".tab ul.tabs").addClass("active").find("> li:eq(1)");
    // .removeClass("current");
    $(".tab ul.tabs li label").click(function (g) {
      $(this).find("input").prop("checked", true);
      var tab = $(this).closest(".tab"),
        index = $(this).closest("li").index();
      tab.find("ul.tabs > li").removeClass("current");
      $(this).closest("li").addClass("current");
      $(this).closest(".item_tab").addClass("current");
      tab
        .find(".tab_content")
        .find("div.tabs_item")
        .not("div.tabs_item:eq(" + index + ")")
        .slideUp();
      tab
        .find(".tab_content")
        .find("div.tabs_item:eq(" + index + ")")
        .slideDown();
      g.preventDefault();
    });
  })(jQuery);
});
//================================================================
// product tab
let tabLinks = document.querySelectorAll(".single-tabs__link");
let tabContents = document.querySelectorAll(".single-tabs__content");
if (tabLinks) {
  // tabLinks[1].classList.add("tab-active");
  // tabContents[1].classList.add("tab-active");
  tabLinks.forEach((tabLink, i) => {
    tabLink.addEventListener("click", () => {
      tabLinks.forEach((tabLink) => tabLink.classList.remove("tab-active"));
      tabContents.forEach((tabContent) =>
        tabContent.classList.remove("tab-active")
      );
      tabLink.classList.add("tab-active");
      tabContents[i].classList.add("tab-active");
    });
  });
}
//---------------------------------------------------------------------------
let productTabLinks = document.querySelectorAll(".product-tab1-img");
let productTabContents = document.querySelectorAll(".product-main-img-content");
if (productTabLinks) {
  // tabLinks[1].classList.add("tab-active");
  // tabContents[1].classList.add("tab-active");
  productTabLinks.forEach((productTabLink, i) => {
    productTabLink.addEventListener("click", () => {
      productTabLinks.forEach((productTabLink) =>
        productTabLink.classList.remove("tab-active")
      );
      productTabContents.forEach((productTabContent) =>
        productTabContent.classList.remove("tab-active")
      );
      productTabLink.classList.add("tab-active");
      productTabContents[i].classList.add("tab-active");
    });
  });
}
//--------------------------------------------------------------------
// modal tab
let payLinks = document.querySelectorAll(".pay-tabs__link");
let payContents = document.querySelectorAll(".pay-tabs__content");
if (payLinks) {
  // tabLinks[1].classList.add("tab-active");
  // tabContents[1].classList.add("tab-active");
  payLinks.forEach((payLink, i) => {
    payLink.addEventListener("click", () => {
      payLinks.forEach((payLink) => payLink.classList.remove("pay-active"));
      payContents.forEach((payContent) =>
        payContent.classList.remove("pay-active")
      );
      payLink.classList.add("pay-active");
      payContents[i].classList.add("pay-active");
    });
  });
}
//=====================================================================

let activPay = document.querySelectorAll(".payment-pay-link");
let payCardInfo = document.querySelector(".payCard-info");
if (payCardInfo) {
  activPay.forEach((el) => {
    el.addEventListener("click", () => {
      payCardInfo.classList.toggle("payCard-info-show");
    });
  });
}
//==========================================================================
// card parallax
let cardSecondary = document.querySelectorAll(".cardSecondary");
if (window.innerWidth > 992) {
  cardSecondary.forEach((elCard) => {
    elCard.addEventListener("mousemove", parallax);
    elCard.addEventListener("mouseleave", outparallax);

    function parallax(e) {
      elCardImg = elCard.querySelector(".cardSecondary-img");
      let speed = elCardImg.getAttribute("data-speed");
      const x = (elCard.clientWidth - e.pageX * speed) / -100;
      const y = (elCard.clientHeight - e.pageY * speed) / 150;
      elCardImg.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }

    function outparallax(e) {
      elCardImg = elCard.querySelector(".cardSecondary-img");
      x = 0;
      y = 0;
      elCardImg.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
  });
}

//----------------------------------------------------------------------
// card save btn
let cardSaveBtn = document.querySelectorAll(".card-like-btn");
cardSaveBtn.forEach((elItem) => {
  elItem.addEventListener("click", () => {
    elItem.classList.toggle("save");
  });
});
//=========================================================================

// modal
var popup = document.querySelector(".popup-wrapper");
let popupForm = document.querySelector(".popup-form");
let popupBtn = document.querySelectorAll(".popup-open");
let popupClose = document.querySelectorAll(".close-btn");
if (popupBtn) {
  popupBtn.forEach((elPopup) => {
    elPopup.addEventListener("click", (e) => {
      e.preventDefault;

      showPopup();
    });
  });
}

if (popupClose) {
  popupClose.forEach((elPopupClose) => {
    elPopupClose.addEventListener("click", (e) => {
      e.preventDefault;
      removePopup();
    });
  });
}
if (popupForm) {
  popupForm.addEventListener("submit", () => {
    removePopup();
  });
}

if (popup) {
  popup.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("popup-wrapper")) {
      removePopup();
    } else return;
  });
}

function showPopup() {
  popup.classList.add("active");
  body.style.overflow = "hidden";
}

function removePopup() {
  popup.classList.remove("active");
  body.style.overflow = "auto";
}

//=======================================================================
// tel
var tel = document.getElementById("selector");
var maskOptions = {
  phone: {
    mask: "+{998}(00)000-00-00",
    lazy: false,
    placeholderChar: "-",
  },
};
if (tel) {
  var mask = IMask(tel, maskOptions.phone);
}
//=========================================================================
// payment card
const cardnumber = document.getElementById("cardnumber");
if (cardnumber) {
  var cardnumber_mask = new IMask(cardnumber, {
    mask: [
      {
        mask: "0000 000000 00000",
        regex: "^3[47]\\d{0,13}",
        cardtype: "american express",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}",
        cardtype: "discover",
      },
      {
        mask: "0000 000000 0000",
        regex: "^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}",
        cardtype: "diners",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}",
        cardtype: "mastercard",
      }, // {
      //     mask: '0000-0000-0000-0000',
      //     regex: '^(5019|4175|4571)\\d{0,12}',
      //     cardtype: 'dankort'
      // },
      // {
      //     mask: '0000-0000-0000-0000',
      //     regex: '^63[7-9]\\d{0,13}',
      //     cardtype: 'instapayment'
      // },
      {
        mask: "0000 000000 00000",
        regex: "^(?:2131|1800)\\d{0,11}",
        cardtype: "jcb15",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(?:35\\d{0,2})\\d{0,12}",
        cardtype: "jcb",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}",
        cardtype: "maestro",
      }, // {
      //     mask: '0000-0000-0000-0000',
      //     regex: '^220[0-4]\\d{0,12}',
      //     cardtype: 'mir'
      // },
      {
        mask: "0000 0000 0000 0000",
        regex: "^4\\d{0,15}",
        cardtype: "visa",
      },
      {
        mask: "0000 0000 0000 0000",
        regex: "^62\\d{0,14}",
        cardtype: "unionpay",
      },
      {
        mask: "0000 0000 0000 0000",
        cardtype: "Unknown",
      },
    ],
    dispatch: function (appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, "");

      for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
        let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
        if (number.match(re) != null) {
          return dynamicMasked.compiledMasks[i];
        }
      }
    },
  });
}

var securitycode = document.getElementById("securitycode");
if (securitycode) {
  var maskOptions = {
    mask: "00/00",
  };
  var mask = IMask(securitycode, maskOptions);
}

//=======================================================================
// compare page scroll
$(document).ready(function () {
  if (document.querySelector(".compare__table")) {
    var section = document.querySelector(".p-50-0-0");
    var compareBlock = section.querySelector(".compare__block");
    var compareTable = compareBlock.querySelector(".compare__table");
    var compareTableRows = compareTable.querySelectorAll("tr");
    var count = compareTableRows[0].children.length;
    var tableColumns = compareTable.querySelectorAll("th, td");
    var bigCards = compareTable.querySelectorAll(".compare__product_card");
    var miniCards = compareTable.querySelectorAll(
      ".compare__product_mini_card"
    );

    var miniCardHeight = 0;
    var miniCardHeightChanged = false;

    var titleContent = document.querySelector(".title-content");
    var compareBlockHeight = compareBlock.offsetHeight + 80;
    var titleContentHeight = titleContent.offsetHeight;

    var stars = compareTable.querySelectorAll(".compare__stars-wrapper");
    var defStar = 5;
    stars.forEach((star) => {
      var fullStarCount = star.getAttribute("data-count");

      for (let i = 0; i < fullStarCount; i++) {
        var img = new Image();
        img.src = star.getAttribute("data-star-f");
        star.appendChild(img);
      }
      for (let i = 0; i < defStar - fullStarCount; i++) {
        var imgE = new Image();
        imgE.src = star.getAttribute("data-star-e");
        star.appendChild(imgE);
      }
    });

    var media767 = window.matchMedia("(max-width: 767px)");
    var media575 = window.matchMedia("(max-width: 575px)");

    if (media575.matches) {
      if (count > 2) {
        var allWidth = (count - 1) * 50;
        compareTable.style.width = allWidth + "%";
      }
      tableColumns.forEach((column, i) => {
        // if (!column.nodeName == 'TH') {
        if (i === 0 || i % count === 0) {
          column.style.width = 0 + "px";
        } else {
          if (count <= 2) {
            column.style.width = 100 / count + "%";
          } else {
            column.style.width = 50 + "%";
          }
        }
        // }
      });
    } else if (media767.matches) {
      if (count > 2) {
        compareTable.style.width = count * 33.33 + "%";
      }
      tableColumns.forEach((column, i) => {
        if (count <= 2) {
          column.style.width = 100 / count + "%";
        } else {
          column.style.width = 33.33 + "%";
        }
      });
    } else {
      if (count > 4) {
        compareTable.style.width = count * 25 + "%";
      } else {
        compareTable.style.width = count * 25 + "%";
      }
      tableColumns.forEach((column, i) => {
        if (count <= 4) {
          column.style.width = 100 / count + "%";
        } else {
          column.style.width = 25 + "%";
        }
      });
    }
    let marginBottom = compareTableRows[0].offsetHeight + 40 + "px";

    compareBlock.addEventListener("scroll", () => {
      if (compareBlock.scrollTop > compareTableRows[1].clientHeight) {
        compareTable.style.marginBottom = marginBottom;
      }

      for (let i = 0; i < bigCards.length; i++) {
        if (compareBlock.scrollTop > compareTableRows[1].clientHeight) {
          section.classList.add("active");
          compareBlock.classList.add("active");
          compareTable.classList.add("active");
          titleContent.classList.add("hide");
          compareBlock.style.height =
            compareBlockHeight + titleContentHeight + "px";
          bigCards[i].classList.add("hide");
          miniCards[i].classList.add("active");
          if (miniCardHeight < miniCards[i].offsetHeight) {
            miniCardHeight = miniCards[i].offsetHeight;
          }
        } else {
          section.classList.remove("active");
          compareTable.classList.remove("active");
          compareBlock.classList.remove("active");
          compareBlock.style.height = "";
          titleContent.classList.remove("hide");
          bigCards[i].classList.remove("hide");
          miniCards[i].classList.remove("active");
        }
      }

      if (miniCardHeight !== 0 && !miniCardHeightChanged) {
        for (let i = 0; i < miniCards.length; i++) {
          miniCards[i].style.height = miniCardHeight + "px";
          miniCardHeightChanged = true;
        }
      }
    });
  }
});
//=================================================================
// login verify code timer
var number = document.querySelector(".number");
let nums = document.querySelector(".timer-wrap");
var count = 60;
if (number) {
  var countdownInterval = setInterval(() => {
    count <= 1 && clearInterval(countdownInterval);
    if (count < 16) nums.style.color = "red";
    number.textContent = count <= 10 ? `0${--count}` : `${--count}`;
  }, 1000);
}

//=====================================================================

// confirmation verify login
const inputElements = [...document.querySelectorAll("input.verify-code")];

inputElements.forEach((ele, index) => {
  ele.addEventListener("keydown", (e) => {
    if (e.keyCode === 8 && e.target.value === "")
      inputElements[Math.max(0, index - 1)].focus();
  });
  ele.addEventListener("input", (e) => {
    const [first, ...rest] = e.target.value;
    e.target.value = first ?? "";
    const lastInputBox = index === inputElements.length - 1;
    const insertedContent = first !== undefined;
    if (insertedContent && !lastInputBox) {
      inputElements[index + 1].focus();
      inputElements[index + 1].value = rest.join("");
      inputElements[index + 1].dispatchEvent(new Event("input"));
    }
  });
});

function onSubmit(e) {
  e.preventDefault();
  const code = [...document.getElementsByTagName("input")]
    .filter(({ name }) => name)
    .map(({ value }) => value)
    .join("");
  console.log(code);
}

//=============================================================================
// select2
$(document).ready(function () {
  $(".single").select2({});
});
//==================================================================
// Trigger
$(document).ready(function () {
  $(function () {
    var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 0,
      max = 50000000,
      from = 0,
      to = 0;
    if ($range.ionRangeSlider) {
      $range.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        from: $inputFrom.val(),
        to: $inputTo.val(),
        prefix: "",
        onStart: updateInputs,
        onChange: updateInputs,
        step: 50000,
        prettify_enabled: true,
        prettify_separator: ".",
        values_separator: " - ",
        force_edges: true,
      });
    }

    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
      from = data.from;
      to = data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        from: val,
      });
    });

    $inputTo.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance.update({
        to: val,
      });
    });
  });
});
//===========================================================
// colorPicker;
let circleRadio = document.querySelectorAll(".circle-radio");

circleRadio.forEach((item) => {
  let color = item.children[0].getAttribute("data-color");
  let circleBorder = item.querySelector(".color-border");
  let circleBg = item.querySelector(".color-bg");
  circleBg.style.backgroundColor = color;
  circleBorder.style.borderColor = color;
});

//=================================================================
// single product top 3 btns
let orderBtns = document.querySelectorAll(".product-order-btn");
if (orderBtns) {
  orderBtns.forEach((elBtns) => {
    elBtns.addEventListener("click", () => {
      elBtns.classList.toggle("active-btn");
    });
  });
  if (orderBtns[0]) {
    orderBtns[0].addEventListener("click", function () {
      setTimeout(function () {
        added[0].classList.add("addProduct");
      }, 400);
    });
  }
}
//=====================================================
// notifications
let notify = document.querySelectorAll(".notifications-wrap");
let errorExit = document.querySelectorAll(".error-exit");
notify.forEach((elNotify) => {
  setTimeout(() => {
    elNotify.classList.add("info-show");
  }, 700);
  errorExit.forEach((elExit) => {
    elExit.addEventListener("click", () => {
      elNotify.classList.remove("info-show");
    });
  });
});
//====================================================
// share links
let shareInfo = document.querySelector(".share-info");
let shareMenu = document.querySelector(".share-menu");
let body = document.querySelector("body");
if (shareInfo) {
  shareInfo.addEventListener("click", (e) => {
    e.stopPropagation();
    shareMenu.classList.toggle("menu-share");
  });
  body.addEventListener("click", (e) => {
    e.stopPropagation();
    shareInfo.classList.remove("active-btn");
    shareMenu.classList.remove("menu-share");
  });
}
//=======================================================
//copy url link
var $temp = $("<input>");
var $url = $(location).attr("href");

$(".share-menu-link").on("click", function () {
  $("body").append($temp);
  $temp.val($url).select();
  document.execCommand("copy");
  $temp.remove();
  $("copyL").text("URL copied!");
});
//============================================================
// pagination btns
let pageItem = document.querySelectorAll(".page-item");
if (pageItem) {
  pageItem.forEach((elPageItem) => {
    elPageItem.addEventListener("click", () => {
      pageItem.forEach((item) => {
        item.classList.remove("active-item");
      });
      elPageItem.classList.add("active-item");
    });
  });
}
//===========================================================
// mobile mega menu
if (window.innerWidth < 992) {
  $(".nav-menu-item").each(function (i, el) {
    $(el).click(function () {
      $(this).find(".nav-megamenu").slideToggle("600");
      $(el).find(".nav-menu-link").toggleClass("open-mege");
    });
  });

  //---------------------------------------------------------------
  // mobile burger menu

  $(".burger-btn").click(function () {
    $(".header").slideToggle("600");

    $(this).find(".burger-icon").toggleClass("open-burger");
  });
}
//=======================================================
// sticy category
if (window.innerWidth > 992) {
  $(function () {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $(".nav-wrap");
    var headerHeight = $header.outerHeight();

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass("nav-sticky");
      } else {
        $header.removeClass("nav-sticky");
        $header.removeClass("nav-show");
      }

      if ($header.hasClass("nav-sticky")) {
        if (windowTop < lastScrollTop) {
          $header.addClass("nav-show");
        } else {
          $header.removeClass("nav-show");
        }
      }

      lastScrollTop = windowTop;
    });
  });
}

//===============================================================
// auto height textarea
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

//=================================================================
// move bottom .product-top
const formElement = document.querySelector(".form-element");
const productTop = document.querySelector(".product-top");
if (formElement) {
  if (window.innerWidth < 992) {
    formElement.insertAdjacentElement("afterend", productTop);
    productTop.style.marginTop = "48px";
  }
}
//=================================================================
// product tab show more btn
if (window.innerWidth < 992) {
  $(".show-content").on("click", function () {
    $(".tab-descrip-block:not(:first-child)").slideToggle();
  });
}
//===============================================================
if (window.innerWidth > 992) {
  $(".img-product-container")
    // tile mouse actions
    .on("mouseover", function () {
      $(this)
        .addClass("img-scale")
        .children(".img-product")
        .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
    })
    .on("mouseout", function () {
      $(this)
        .removeClass("img-scale")
        .children(".img-product")
        .css({ transform: "scale(1)" });
    })
    .on("mousemove", function (e) {
      $(this)
        .children(".img-product")
        .css({
          "transform-origin":
            ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
            "% " +
            ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
            "%",
        });
    });
}
//================================================================
// Hide Header on on scroll down
if (window.innerWidth < 992) {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $(".nav-user-right ").outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      $(".nav-user-right ").removeClass("nav-down").addClass("nav-up");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $(".nav-user-right ").removeClass("nav-up").addClass("nav-down");
      }
    }

    lastScrollTop = st;
  }
}
//================================================================
let mainBtn = document.querySelectorAll(".main-btn");
mainBtn.forEach((btnItem) => {
  bgBtn = btnItem.getAttribute("data-bgcolor");
  if (bgBtn) btnItem.style.backgroundColor = bgBtn;
});

//=================================================================
// shops map

// var marker;
// var map;
if (document.getElementById("map-canvas")) {
  $(".shops-address-item").each(function (index, elAddress) {
    $(elAddress).click(function () {
      $(".shops-address-item.active-region").removeClass("active-region");
      $(this).addClass("active-region");
      const LAT = elAddress.getAttribute("data-mapLat");
      const LON = elAddress.getAttribute("data-mapLon");
      changeMarkerPos(LAT, LON);
    });
  });

  function initialize() {
    var styles = [
      {
        stylers: [
          {
            saturation: -100,
          },
        ],
      },
    ];
    var styledMap = new google.maps.StyledMapType(styles, {
      name: "Styled Map",
    });
    var mapProp = {
      center: new google.maps.LatLng(41.2827052, 69.2093272),
      zoom: 7,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      overviewMapControl: false,
      rotateControl: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapProp);

    map.mapTypes.set("map_style", styledMap);
    map.setMapTypeId("map_style");

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(41.2827052, 69.2093272),

      animation: google.maps.Animation.DROP,
      icon: "/images/png/location.png",
    });

    marker.setMap(map);
    map.panTo(marker.position);
  }

  function changeMarkerPos(lat, lon) {
    myLatLng = new google.maps.LatLng(lat, lon);
    marker.setPosition(myLatLng);
    map.panTo(myLatLng);
  }

  google.maps.event.addDomListener(window, "load", initialize);
}

//================================================================
$(document).ready(function () {
  if (document.querySelector(".num4")) {
    let num4 = document.querySelectorAll(".num4");

    for (let i = 0; i < num4.length; i++) {
      let regExpMask = IMask(num4[i], {
        mask: "0000",
        lazy: false,
      });
      num4[i].addEventListener("input", () => {
        if (num4[i].value.replace(/_/g, "").length == 4) {
          if (i + 1 < num4.length) {
            num4[i + 1].focus();
          }
        } else if (num4[i].value.replace(/_/g, "").length == 0) {
          if (i - 1 >= 0) {
            num4[i - 1].focus();
          }
        }
      });
    }
  }

  if (document.querySelector(".num2")) {
    let num2 = document.querySelectorAll(".num2");

    for (let i = 0; i < num2.length; i++) {
      let regExpMask = IMask(num2[i], {
        mask: "00",
        lazy: false,
      });
      num2[i].addEventListener("input", () => {
        if (num2[i].value.replace(/_/g, "").length == 2) {
          if (i + 1 < num2.length) {
            num2[i + 1].focus();
          }
        } else if (num2[i].value.replace(/_/g, "").length == 0) {
          if (i - 1 >= 0) {
            num2[i - 1].focus();
          }
        }
      });
    }
  }

  if (document.querySelector(".text-card-nums")) {
    let cardNumsWrapper = document.querySelectorAll(".text-card-nums");
    cardNumsWrapper.forEach((item) => {
      let btn = item.querySelector(".copy-nums");
      let text = item.getAttribute("data-cardnumber");
      btn.addEventListener("click", () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text);
          item.classList.add("active");
          setTimeout(() => {
            item.classList.remove("active");
          }, 500);
        }
      });
    });
  }
});
