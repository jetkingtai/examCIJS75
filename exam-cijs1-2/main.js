
// ----------------------Bài 2-----------------------

// function adjacentElementsProduct (...rest) {
//     let max = 0;
//     let arr = [];
//     for(let i = 0; i < rest.length; i++) {
//         if ( rest[i] * rest[i + 1] > max ) {
//             max = rest[i] * rest[i + 1]
//             arr = [rest[i], rest[i + 1]]
//         }
//     }
//     alert(`Tich lon nhat la ${max} hai so lien ke la ${arr[0]} va ${arr[1]}`)
// }
// adjacentElementsProduct(10, 2, -9, 3, -10)






// --------------------------Bài 2--------------------------
// function chiaHang (...rest) {
//     hangChung = rest
//     hang1 = []
//     hang2 = []
//     let kgHang1 = 0
//     let kgHang2 = 0
//     hang2.push(hangChung[0])
//     for(let i = 1; i < rest.length; i++ ) {
//         if(i % 2 !== 0) {
//             hang1.push(hangChung[i])
//         }
//     }   
//     for(let i = 1; i < rest.length; i++ ) {
//         if(i % 2 == 0) {
//             hang2.push(hangChung[i])
//         }
//     }  
//     for(i = 0; i < hang1.length; i++ ) {
//         kgHang1 = kgHang1 + hang1[i]
//     }
//     for(i = 0; i < hang2.length; i++ ) {
//         kgHang2 = kgHang2 + hang2[i]
//     }
//     alert(`tong can nang hang 1 la ${kgHang1} hang 2 la ${kgHang2}`)
// }
// chiaHang(1,2,3,4,5)






