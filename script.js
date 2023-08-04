const notification = document.querySelector(".Notification");
const markAll = document.getElementById("mark_all");
const unreadmassage = document.querySelectorAll(".unread");

notification.innerHTML = unreadmassage.length

unreadmassage.forEach((unread) => {
    unread.addEventListener("click", () => {
        unread.classList.remove("unread");
        const unreadmassage = document.querySelectorAll(".unread");
        notification.innerHTML = unreadmassage.length
    })
})

markAll.addEventListener("click", () => {
    unreadmassage.forEach((unread) => {
        unread.classList.remove("unread");
        const unreadmassage = document.querySelectorAll(".unread");
        notification.innerHTML = unreadmassage.length
    })
})