// console.log('Bakal muncul pertama');

// setTimeout(() => {
//     console.log(
//         'Ini udah masuk memory proses tapi dijalankan setelah 3 detik kedepan'
//     );
// }, 3000);

// console.log('Bakal muncul kedua');

// setTimeout(function () {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(function () {
//         document.body.style.backgroundColor = 'yellow';
//         setTimeout(function () {
//             document.body.style.backgroundColor = 'green';
//             setTimeout(function () {
//                 document.body.style.backgroundColor = 'blue';
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// searchMovieApi('naruto', function (movies) {
//     saveToMyBd(
//         movies,
//         function () {
//             // kalau berhasil kita simpan
//         },
//         () => {
//             // kalau gagal kita coba lagi
//         }
//     );
// }, () => {
//     // server error
// });

// // callback version
// const requestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Error: Connection Timeout');
//         } else {
//             success(`Success: ${url} (${delay}ms)`);
//         }
//     }, delay);
// };

// // Promise version
// const requestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout(() => {
//             if (delay > 2000) {
//                 reject('Error: Connection Timeout');
//             } else {
//                 resolve(`Success: ${url} (${delay}ms)`);
//             }
//         }, delay);
//     });
// };

// requestPromise('movie.com')
//     .then((result) => {
//         console.log('page 1');
//         console.log(result);
//         return requestPromise('movie.com');
//     })
//     .then(() => {
//         console.log('page 2');
//         return requestPromise('movie.com');
//     })
//     .then(() => {
//         console.log('page 3');
//         return requestPromise('movie.com');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// requestPromise('movie.com')
//     .then((response) => {
//         console.log('success', response);
//         requestPromise('movie.com')
//             .then((response) => {
//                 console.log('success', response);
//                 requestPromise('movie.com')
//                     .then((response) => {
//                         console.log('success', response);
//                         requestPromise('movie.com')
//                             .then((response) => {
//                                 console.log('success', response);
//                                 requestPromise('movie.com')
//                                     .then((response) => {
//                                         console.log('success', response);
//                                     })
//                                     .catch((error) => {
//                                         console.log('error', error);
//                                     });
//                             })
//                             .catch((error) => {
//                                 console.log('error', error);
//                             });
//                     })
//                     .catch((error) => {
//                         console.log('error', error);
//                     });
//             })
//             .catch((error) => {
//                 console.log('error', error);
//             });
//     })
//     .catch((error) => {
//         console.log('error', error);
//     });

// requestCallback(
//     'movie.com',
//     function (response) {
//         console.log('success', response);
//         requestCallback(
//             'movie.com',
//             function (response) {
//                 console.log('success', response);
//                 requestCallback(
//                     'movie.com',
//                     function (response) {
//                         console.log('success', response);
//                         requestCallback(
//                             'movie.com',
//                             function (response) {
//                                 console.log('success', response);
//                                 requestCallback(
//                                     'movie.com',
//                                     function (response) {
//                                         console.log('success', response);
//                                     },
//                                     function (error) {
//                                         console.log('error, it failed!', error);
//                                     }
//                                 );
//                             },
//                             function (error) {
//                                 console.log('error, it failed!', error);
//                             }
//                         );
//                     },
//                     function (error) {
//                         console.log('error, it failed!', error);
//                     }
//                 );
//             },
//             function (error) {
//                 console.log('error, it failed!', error);
//             }
//         );
//     },
//     function (error) {
//         console.log('error, it failed!', error);
//     }
// );

// const contohPromise = () => {
//     return new Promise((resolve, reject) => {
//         // resolve(() => {
//         //     'berhasil'
//         // });
//         reject(() => {
//             'gagal'
//         });
//     });
// };

// Promise version
const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Error: Connection Timeout');
            } else {
                resolve(`Success: ${url} (${delay}ms)`);
            }
        }, delay);
    });
};

async function requestHandler() {
    try {
        let result = await requestPromise('movie.com');
        console.log(result);
    } catch (error) {
        console.log(' Pesan Error', error);
    }
}
