function getPilihanComp() {
    const comp = Math.random();
    if (comp < 0.34) return 'batu';
    if (comp >= 0.34 && comp < 0.67) return 'kertas';
    return 'gunting';
};

const getHasil = (comp, player) => {
    if (player == comp) return 'Seri';
    if (player == 'batu') return (comp == 'kertas') ? 'KALAH!' : 'MENANG!';
    if (player == 'kertas') return (comp == 'gunting') ? 'KALAH!' : 'MENANG!';
    if (player == 'gunting') return (comp == 'batu') ? 'KALAH!' : 'MENANG!';
};

const pilPlayer = document.querySelectorAll('#player img');

pilPlayer.forEach(function (i) {
    i.addEventListener('click', function () {
        const pilihanComputer = getPilihanComp();
        const pilihanPlayer = i.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        const info = document.querySelector('#info');
        info.innerHTML = hasil;

        console.log(pilihanComputer);
        console.log(pilihanPlayer);
        console.log(hasil);
    });
});

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', function(){
    info.innerHTML = "VS";
});

















// const playerBatu = document.querySelector('#batu');
// playerBatu.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComp();
//     const pilihanPlayer = playerBatu.id;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const info = document.querySelector('#info');
//     info.innerHTML = hasil;
// });