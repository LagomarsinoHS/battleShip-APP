import React from "react";

const PanelJugador = props => {

    if (!!props.listaId) {
        props.listaId.map(id => {
            let divId = document.getElementById(`${id}`)
            divId.classList.add("nave")
           
        })
    }




    return <>
        <div className="col-md-5 ml-4 border">

            <div className="row mt-3 text-center">
                <div className="col-md-1 divHijoVertical"></div>
                <div className="col-md-1 divHijoHorizontal">1</div>
                <div className="col-md-1 divHijoHorizontal">2</div>
                <div className="col-md-1 divHijoHorizontal">3</div>
                <div className="col-md-1 divHijoHorizontal">4</div>
                <div className="col-md-1 divHijoHorizontal">5</div>
                <div className="col-md-1 divHijoHorizontal">6</div>
                <div className="col-md-1 divHijoHorizontal">7</div>
                <div className="col-md-1 divHijoHorizontal">8</div>
                <div className="col-md-1 divHijoHorizontal">9</div>
            </div>

            <div className="row text-center">
                <div className="col-md-1 divHijoVertical">A</div>
                <div className="col-md-1 mar" id="00" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>00</div>
                <div className="col-md-1 mar" id="01" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>01</div>
                <div className="col-md-1 mar" id="02" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>02</div>
                <div className="col-md-1 mar" id="03" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>03</div>
                <div className="col-md-1 mar" id="04" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>04</div>
                <div className="col-md-1 mar" id="05" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>05</div>
                <div className="col-md-1 mar" id="06" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>06</div>
                <div className="col-md-1 mar" id="07" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>07</div>
                <div className="col-md-1 mar" id="08" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>08</div>
            </div>

            <div className="row text-center">
                <div className="col-md-1 divHijoVertical">B</div>
                <div className="col-md-1 mar" id="10" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>10</div>
                <div className="col-md-1 mar" id="11" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>11</div>
                <div className="col-md-1 mar" id="12" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>12</div>
                <div className="col-md-1 mar" id="13" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>13</div>
                <div className="col-md-1 mar" id="14" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>14</div>
                <div className="col-md-1 mar" id="15" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>15</div>
                <div className="col-md-1 mar" id="16" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>16</div>
                <div className="col-md-1 mar" id="17" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>17</div>
                <div className="col-md-1 mar" id="18" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}>18</div>
            </div>

            <div className="row text-center">
                <div className="col-md-1 divHijoVertical">C</div>
                <div className="col-md-1 mar" id="20" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="21" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="22" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="23" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="24" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="25" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="26" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="27" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="28" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
            </div>

            <div className="row text-center">
                <div className="col-md-1 divHijoVertical">D</div>
                <div className="col-md-1 mar" id="30" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="31" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="32" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="33" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="34" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="35" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="36" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="37" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="38" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
            </div>

            <div className="row text-center">
                <div className="col-md-1 divHijoVertical">E</div>
                <div className="col-md-1 mar" id="40" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="41" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="42" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="43" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="44" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="45" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="46" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="47" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="48" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
            </div>

            <div className="row text-center">
                <div className="col-md-1 divHijoVertical">F</div>
                <div className="col-md-1 mar" id="50" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="51" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="52" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="53" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="54" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="55" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="56" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="57" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="58" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
            </div>

            <div className="row text-center">
                <div className="col-md-1 divHijoVertical">G</div>
                <div className="col-md-1 mar" id="60" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="61" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="62" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="63" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="64" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="65" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="66" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="67" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="68" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
            </div>

            <div className="row text-center">
                <div className="col-md-1 divHijoVertical">H</div>
                <div className="col-md-1 mar" id="70" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="71" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="72" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="73" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="74" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="75" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="76" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="77" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="78" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
            </div>

            <div className="row text-center">
                <div className="col-md-1 divHijoVertical">I</div>
                <div className="col-md-1 mar" id="80" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="81" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="82" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="83" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="84" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="85" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="86" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="87" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
                <div className="col-md-1 mar" id="88" onClick={(e) => { props.fuego(e); props.posicionarNave(e) }}></div>
            </div>







        </div>









    </>
}

export default PanelJugador;