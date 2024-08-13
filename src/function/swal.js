const Swal = require('sweetalert2')

export const textPopUp = (title, text, icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'Close'
    });
}

export const confirmDelete = (title, text, id) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            return { id: id, confirmed: true };
        } else {
            return { id: id, confirmed: false };
        }
    });
}