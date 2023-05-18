let pantalla = $(".screennumber")
let resultado = $(".btnresult")
let reset = $(".btnreset")
let dels = $(".btntec")
let result;
let teclas = $(".tecla")
let btns = $(".btn")
let pp = ""
let pp2 = ""
let oldpp = ""
let oldpp2 = ""
let op = ""
let clicked = false

$(teclas).click(add)

function add() {
    
    if (isNaN(this.innerHTML) && this.innerHTML === "-" && pp.length === 0) {
        pp += "-"
        pantalla.html(pp)
    }else{
        if (isNaN(this.innerHTML)) {
            op = this.innerHTML
            pantalla.html( Number(pp).toLocaleString() + op )
        } else {
            if (op !== "") {
                pp2 += this.innerHTML
                pantalla.html( Number(pp).toLocaleString() + op + Number(pp2).toLocaleString() )
            } else {
                pp += this.innerHTML
                pantalla.html( Number(pp).toLocaleString() )
            }
        }
    }

    console.log(pp)
}
    
$(resultado).click(rest)

function rest() {
    let num1 = parseInt(pp);
    let num2 = parseInt(pp2);
    switch (op) {
        case "+":
            result = num1 + num2
            pantalla.html( result )
            pp = result
            pp2 = ""
            break;
    
        case "-":
            result = num1 - num2
            pantalla.html( result )
            pp = result
            pp2 = ""
            break;

        case "x":
            result = num1 * num2
            pantalla.html( result )
            pp = result
            pp2 = ""
            break;

        case "/":
            result = num1 / num2
            pantalla.html( result )
            pp = result
            pp2 = ""
            break;
    }
}

$(reset).click(resets)

function resets() {
    pp = 0
    pp2 = ""
    op = ""

    pantalla.html(Number(pp))
}

$(dels).click(deletes)

function deletes() {
    let ppslice;
    let pp2slice;

    if (pp2.length > 0) {
        pp2slice = pp2.slice(0, pp2.length - 1)
        pp2 = pp2slice
        pantalla.html( Number(pp).toLocaleString() + op + Number(pp2).toLocaleString())

        if (pp2.length === 0) {
            op = ""
            pantalla.html( Number(pp).toLocaleString())
        }
    }else{
        ppslice = pp.slice(0, pp.length - 1)
        pp = ppslice

        if (pp.length === 0 || pp === "-") {
            pp = ""
            pantalla.html("0")
        }else{
            pantalla.html(Number(pp).toLocaleString())
        }
    }
}

$(btns).click(touchme)

function colores(params) {
    const primaryColor = $(":root").css(`--${params}-main-background-color`)
    const toggle = $(":root").css(`--${params}-toggle-key-background-color`)
    const screencolor = $(":root").css(`--${params}-screen-background-color`)
    const textcolor = $(":root").css(`--${params}-text-color`)
    const teclas = $(":root").css(`--${params}-toggle-keypad-background-color`)
    const esp = $(":root").css(`--${params}-key-background-color`)
    const buttons = $(":root").css(`--${params}-buttons-background-color`)
    const shadow = `0 3px ${$(":root").css(`--${params}-buttons-shadow-color`)}`
    const shadowspec = `0 3px ${$(":root").css(`--${params}-key-shadow-color`)}`
    const restshadow = `0 3px ${$(":root").css(`--${params}-toggle-key-shadow-color`)}`

    if (params) {
        $("body, .bigcont").css("background-color", primaryColor)
        $(".btnresult").css("box-shadow", restshadow)
        $(".btn, .btnresult").css("background-color", toggle)
        $(".screen").css("background-color", screencolor)
        $(".teclas").css("background-color", teclas)
        $(".btntec, .btnreset").css({
            "background-color": esp,
            "box-shadow": shadowspec
        })
        $(".tecla").css({
            "background-color": buttons,
            "box-shadow": shadow
        })
        
        if (params !== "primary") {
            $(".tecla, .screennumber, .calc, .theme, .themenumbs").css("color", textcolor)
        }else{
            $(".tecla").css("color", $(":root").css(`--primary-text-color`))

            $(".calc, .theme, .themenumbs, .screennumber").css("color", $(":root").css(`--primary-white-color`))
        }

        if (params !== "third") {
            $(".btnresult").css("color", $(":root").css(`--primary-white-color`))
        }else{
            $(".btnresult").css("color", $(":root").css(`--third-result-color`))
            }
    }
}

function touchme() {
    let btnsid = $(this).attr("id");

    $(".btn").css("opacity", 0.3)
    $("#"+btnsid).css("opacity", 1)
    
    colores(btnsid)
}