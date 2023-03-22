import _ from   'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {array<String>} tiposDeCartas ejemplo ['C','D','H','S']
 * @param {arrayString>} tiposEspeciales ejemplo ['A','J','Q','K']
 * @returns {array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (! tiposDeCartas ||tiposDeCartas.length === 0 )
         throw new Error('tipoDeCarta es Obilgatorio como un arreglo de string');
    
         if (! tiposEspeciales ||tiposEspeciales.length === 0 )
         throw new Error('tiposEspeciales es Obilgatorio como un arreglo de string');
    

    let deck =[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
   
    return deck;
}