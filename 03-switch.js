const day = 10;
switch ( day ) {
    case 0:
    console.log('mondat');
    break;
    case 1:
        console.log('tuestday')
        break;
    case 2:
    console.log('wednessday');
    break;
    case 3:
        console.log('thursday')
        break;
    case 4:
    console.log('friday');
    break;
    case 5:
        console.log('saturday')
        break;
    case 6:
    console.log('sunday');
    break;
    default:
        throw new Error('not a day please type coreact day ');
}