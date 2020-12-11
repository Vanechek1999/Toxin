jQuery(document).ready(function(){
    $('.date').mask('00/00/0000');
})
$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);
$( function() {
    $("#datepicker").datepicker();
    
});
$( function() {
    $("#datepicker1").datepicker();
});

(function ($) {

    $.fn.daterange = function () {
        // опции
        var opts = $.extend({
            "dateFormat": "dd.mm",
            "changeMonth": false,
            "changeYear": false,
            "numberOfMonths": 1,
            "rangeSeparator": "-"
        }, arguments[0] || {}, {
            // обработчики событий datepicker
            // закрытие
            "onClose": function (dateText, inst) {
                if ($.isFunction(opts.callback)) {
                    opts.callback.apply(this, arguments);
                }
            },
            // выбор даты
            "onSelect": function (dateText, inst) {
                var textStart;
                if (!inst.rangeStart) {
                    inst.inline = true;
                    inst.rangeStart = dateText;
                } else {
                    inst.inline = false;
                    textStart = inst.rangeStart;
                    if (textStart !== dateText) {
                        $(this).val(textStart + " " + opts.rangeSeparator + " " + dateText);
                        inst.rangeStart = null;
                    }
                }
            }
        });

        return this.each(function () {
            var input = $(this);
            if (input.is("input")) {
                input.datepicker(opts);
            }
        });
    };

}(jQuery));

$("#d").daterange({
    callback: function (range) {
      $(this)  
    }
});

$(".btn_Dropdown").click(function(){
    $('.expanded').toggle()
    
})


$(".plus1").click(function() {
    var $price = $(".value1");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
  });
$(".plus2").click(function() {
    var $price = $(".value2");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
});
$(".plus3").click(function() {
    var $price = $(".value3");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
});
$(".minus1").click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
$(".minus2").click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
});
$(".minus3").click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
});

$(".check_drop").click(function(){
    if ($('.checkboxlist').css('display','none')){
        $('.checkboxlist').css('display','block')
    }
    $(".check_drop").click(function(){
        if ($('checkboxlist').css('display','block')){
            $('.checkboxlist').css('display','none')
        }
    }) 
})

$(".check_drop").click(function(){
    if ($('.check_drop').css('transform','none')){
        $('.check_drop').css('transform','rotate(180deg)')
    }
    $(".check_drop").click(function(){
        if ($('.check_drop').css('transform','rotate(180deg)')){
            $('.check_drop').css('transform','none')
        }
    })
}) 

$(".btn_DropdownPeople").click(function(){
    $('.DropdownPeople_form').toggle()
    
})
$(".plus4").click(function() {
    var $price = $(".value4");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
  });
$(".plus5").click(function() {
    var $price = $(".value5");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
});
$(".plus6").click(function() {
    var $price = $(".value6");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
});
$(".minus4").click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
$(".minus5").click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
});
$(".minus6").click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
});

$(".plus7").click(function() {
    var $price = $(".value7");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
  });
$(".plus8").click(function() {
    var $price = $(".value8");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
});
$(".plus9").click(function() {
    var $price = $(".value9");
    $price.val(parseInt($price.val()) + 1);
    $price.change();
});
$(".minus7").click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
$(".minus8").click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
});
$(".minus9").click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
});

var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".fakeRangeSlider > .thumb.left")
var thumbRight = document.querySelector(".fakeRangeSlider > .thumb.right")
var range = document.querySelector(".fakeRangeSlider > .range")

function setLeftValue(){
    var _this = inputLeft,
        min = parseInt(_this.min);
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) + 1);

    var percent = ((_this.value - min) / (max-min))*100; 

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
}
setLeftValue()
function setRightValue(){
    var _this = inputRight,
        min = parseInt(_this.min);
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) - 1);

    var percent = ((_this.value - min) / (max-min))*100; 

    thumbRight.style.right = (100 - percent) + "%";
    range.style.left = (100 - percent) + "%";
}
setRightValue()
inputLeft.addEventListener("input", setLeftValue)
inputRight.addEventListener("input", setRightValue)