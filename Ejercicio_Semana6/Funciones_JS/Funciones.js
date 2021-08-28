// -------------------------------Inicio Requisito #1 

const {
    DW,
    Progra2
} = {
    DW: {
        Estudiantes: [{
            Nombre: 'Juan',
            Nota: 10
        }, {
            Nombre: 'Maria',
            Nota: 30
        }, {
            Nombre: 'Carlos',
            Nota: 20
        }, {
            Nombre: 'Karla',
            Nota: 40
        }]
    },
    Progra2: {
        Estudiantes: [{
            Nombre: 'Lili',
            Nota: 30
        }, {
            Nombre: 'Cleo',
            Nota: 40
        }, {
            Nombre: 'Pedro',
            Nota: 33
        }, {
            Nombre: 'Marco',
            Nota: 21
        }]
    }
}
//---------------------------------------Fin Requisito # 1

//--------------------------------------Inicio template string
function DesplegarDatos() {

    var SeleCCurso = document.getElementById("t_curso").value;
    const Imprimir = document.querySelector('#Estudiantes');
    let contenido = '';
    var sp = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";



    



    if (SeleCCurso == "desarrolloWeb") {


        for (let i = 0; i < 4; i++) {
            if (DW.Estudiantes[i].Nota > 10 && DW.Estudiantes[i].Nota <= 20) {
                contenido += `<li class="v">
        ${DW.Estudiantes[i].Nombre} ${sp}  ${DW.Estudiantes[i].Nota}
        </li>`

            }
            if (DW.Estudiantes[i].Nota <= 10) {
                contenido += `<li class="r">
        ${DW.Estudiantes[i].Nombre}  ${sp}  ${DW.Estudiantes[i].Nota}
        </li>`
            }
            if (DW.Estudiantes[i].Nota > 20) {
                contenido += `<li class="a">
        ${DW.Estudiantes[i].Nombre} ${sp}   ${DW.Estudiantes[i].Nota}
        </li>`
            }
        }
        let contenido1 = `<ul>${contenido}</ul>`;
        Imprimir.innerHTML = contenido1;
    }



    if (SeleCCurso == "Progra2") {
        for (let i = 0; i < 4; i++) {
            if (Progra2.Estudiantes[i].Nota > 10 && Progra2.Estudiantes[i].Nota <= 20) {
                contenido += `<li class="v">
        ${Progra2.Estudiantes[i].Nombre} ${sp} ${Progra2.Estudiantes[i].Nota}
        </li>`
            }
            if (Progra2.Estudiantes[i].Nota <= 10) {
                contenido += `<li class="r">
        ${Progra2.Estudiantes[i].Nombre}  ${sp}  ${Progra2.Estudiantes[i].Nota}
        </li>`
            }
            if (Progra2.Estudiantes[i].Nota > 20) {
                contenido += `<li class="a">
        ${Progra2.Estudiantes[i].Nombre} ${sp}   ${Progra2.Estudiantes[i].Nota}
        </li>`
            }
        }
        let contenido1 = `<ul>${contenido}</ul>`;
        Imprimir.innerHTML = contenido1;
    }

}

// ----------------------------------------------------------FIN template string

//---------------------------------------------------------CALCULAR OPERACIONES
var calcularoperaciones = () => {
    var divoperaciones = document.getElementById("operaciones");
    var numero = parseFloat(document.getElementById("entrada").value);
    var operacion = document.getElementById("selecope").value;
    var tab = "";

    if (operacion == "suma") {
        for (let i = 1; i < 11; i++) {
            tab += `<p> ${numero} + ${i} = ${numero+i} </p>`
        }
        divoperaciones.innerHTML = tab;
    }

    if (operacion == "resta") {
        for (let i = 1; i < 11; i++) {
            tab += `<p> ${numero} - ${i} = ${numero-i} </p>`
        }
        divoperaciones.innerHTML = tab;

    }
    if (operacion == "multiplicacion") {
        for (let i = 1; i < 11; i++) {
            tab += `<p> ${numero} * ${i} = ${numero*i} </p>`
        }
        divoperaciones.innerHTML = tab;
    }
    if (operacion == "division") {
        for (let i = 1; i < 11; i++) {
            tab += `<p> ${numero} / ${i} = ${numero/i} </p>`
        }
        divoperaciones.innerHTML = tab;
    }
}

//-------------------------------------------------------FIN OPERACIONES 




