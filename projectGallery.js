document.addEventListener("DOMContentLoaded", function () {
    const projectGallery = document.getElementById("project-gallery");

    // 프로젝트 폴더 및 이미지 데이터
    const projects = [
        {
            name: "SMS 매니저",
            images: ["img/prj/sms_manager/img1.png", "img/prj/sms_manager/img2.png", "img/prj/sms_manager/img3.png"],
        },
        {
            name: "일정 매니저",
            images: Array.from({ length: 5 }, (_, i) => `img/prj/reservation_manager/img${i + 1}.png`)
        },
        {
            name: "쇼핑 매니저",
            images: Array.from({ length: 5 }, (_, i) => `img/prj/shop_manager/img${i + 1}.png`)
        },
    ];

    // 프로젝트 데이터를 기반으로 갤러리 생성
    projects.forEach(project => {
        const folderDiv = document.createElement("div");
        folderDiv.classList.add("project-folder");

        // 제목 생성
        const folderTitle = document.createElement("h3");
        folderTitle.textContent = project.name;
        folderDiv.appendChild(folderTitle);

        // 이미지 추가
        project.images.forEach((imageSrc, index) => {
            const img = document.createElement("img");
            img.src = imageSrc;
            img.alt = project.name;
            img.classList.add("gallery-image");
            img.style.left = `${10 + index * 5}px`; // 겹침 효과를 위한 동적 위치
            folderDiv.appendChild(img);
        });

        // View More 버튼 생성
        const viewMore = document.createElement("a");
        viewMore.href = "#";
        viewMore.textContent = "View More";
        viewMore.classList.add("view-more");
        folderDiv.appendChild(viewMore);

        // View More 버튼 클릭 이벤트
        viewMore.addEventListener("click", (event) => {
            event.preventDefault();
            openPopup(project.images, project.name);
        });

        projectGallery.appendChild(folderDiv);
    });

    // 팝업 열기 함수
    function openPopup(images, title) {
        // 팝업 컨테이너 생성
        const popup = document.createElement("div");
        popup.classList.add("popup-overlay");

        // 팝업 콘텐츠 생성
        const popupContent = document.createElement("div");
        popupContent.classList.add("popup-content");

        // 닫기 버튼 추가 (우측 상단 고정)
        const closeButton = document.createElement("span");
        closeButton.innerHTML = "&times;"; // X 표시
        closeButton.classList.add("fixed-close-button");
        closeButton.addEventListener("click", () => {
            document.body.removeChild(popup);
        });

        // 제목 추가
        const popupTitle = document.createElement("h3");
        popupTitle.textContent = title;

        popupContent.appendChild(popupTitle);

        // 이미지 추가
        images.forEach(imageSrc => {
            const img = document.createElement("img");
            img.src = imageSrc;
            img.alt = title;
            img.classList.add("popup-image");
            popupContent.appendChild(img);
        });

        popup.appendChild(popupContent);
        document.body.appendChild(popup);
        document.body.appendChild(closeButton); // 닫기 버튼을 팝업 외부에 추가
    }
});
