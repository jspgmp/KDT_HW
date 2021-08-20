// 글쓰기 버튼 페이지 이동 방지(defer를 사용한다면)
// const $submit = document.querySelector('button[type="submit"]');
// $submit &&
//     $submit.addEventListener("click", e => {
//         e.preventDefault();
//         alert("Great!");
//     });

//DOM 객체를 이용한 방식, DOM 로드가 다 됐으면, 다음을 실행해라
document.addEventListener("DOMContentLoaded", function() { 
    const $submit = document.querySelector('button[type="submit"]');
    $submit &&
        $submit.addEventListener("click", e => {
            // e.preventDefault();
            alert("Great!");
        });
});
