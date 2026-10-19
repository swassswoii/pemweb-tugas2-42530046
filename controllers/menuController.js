const daftarMenu = require('../data/menu');

function tampilkanMenu(req, res) {
    const kategori = req.query.kategori;

    let menuDitampilkan = daftarMenu;

    if (kategori) {
        menuDitampilkan = daftarMenu.filter(function(menu) {
            return menu.kategori === kategori;
        });
    }

    res.render('menu', {
        daftarMenu: menuDitampilkan,
        kategoriDipilih: kategori || ''
    });
}

function tampilkanDetail(req, res) {
    const id = Number(req.params.id);

    const menu = daftarMenu.find(function(item) {
        return item.id === id;
    });

    if (!menu) {
        return res.status(404).render('not-found', {
            pesan: 'Maaf, menu lumpia yang kamu cari tidak tersedia.'
        });
    }

    res.render('detail', {
        menu: menu
    });
}

module.exports = {
    tampilkanMenu,
    tampilkanDetail
};
