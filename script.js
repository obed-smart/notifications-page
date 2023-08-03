const notification = document.querySelector(".Notification");
const unreadmassage = document.querySelectorAll(".unread");
const markALl = document.getElementById("mark_all");

notification.innerHTML = unreadmassage.length;

unreadmassage.forEach((massage)=>{
    massage.addEventListener("click",() => {
massage.classList.remove("unread")
const unreadmassage = document.querySelectorAll(".unread");
notification.innerHTML = unreadmassage.length;
    })
})

markALl.addEventListener("click", () => {
    unreadmassage.forEach((massage) => {
massage.classList.remove("unread");
const unreadmassage = document.querySelectorAll(".unread");
notification.innerHTML = unreadmassage.length;
    })
})